import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Loading } from '../../../../shared/components/Loading';
import { ticketServices } from '../../../../core/services/TicketsService';
import type { TicketDto } from '../../../../models/ticket.models';
import NoTicketsFound from '../../components/NoTicketsFound';
import TicketsTable from '../../components/TicketsTable';
import { AppRoutes } from '../../../../app/router/AppRoutes';
import { useAuth } from '../../../../core/auth/useAuth';

export const TicketListPage = () => {
  const [tickets, setTickets] = useState<TicketDto[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { user } = useAuth();

  const loadTickets = async () => {
    try {
      setIsLoading(true);
      setErrorMessage(null);

      const ticketsResponse: TicketDto[] = await ticketServices.getTickets();
      setTickets(ticketsResponse);

      if (user?.roleId === 3 || user?.roleId === 2) {
        const allTickets = await ticketServices.getAllTickets();
        setTickets(allTickets);
      }

    } catch(error) {
      console.log('Error loading tickets:', error);
      setErrorMessage('No fue posible cargar los tickets.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadTickets();
  }, []);

  if (isLoading) {
    return <Loading message="Cargando tickets..." />;
  }

  return (
    <section className="pb-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1 className="h2 fw-bold text-white mb-2">Tickets</h1>
          <p className="mb-0 fs-6 lh-base text-white">
            Consulta y administra los tickets registrados en E4-Support Desk.
          </p>
        </div>

        <Link to={AppRoutes.TICKETS.CREATE} className="btn btn-primary">
          <i className="bi bi-plus-lg me-2" />
          Nuevo ticket
        </Link>
      </div>

      {errorMessage && (
        <div className="alert alert-danger d-flex justify-content-between align-items-center">
          <span>{errorMessage}</span>
          <button className="btn btn-sm btn-outline-danger" onClick={loadTickets}>
            Reintentar
          </button>
        </div>
      )}

      {!errorMessage && tickets.length === 0 && (<NoTicketsFound />)}
      {!errorMessage && tickets.length > 0 && (<TicketsTable tickets={tickets} />)}
    </section>
  );
};

