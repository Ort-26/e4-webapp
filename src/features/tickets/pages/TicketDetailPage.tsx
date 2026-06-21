import { useEffect, useState } from "react";
import type { TicketDetail, TicketDto } from "../../../models/ticket.models";
import type { CommentDto } from "../../../models/comment.model";
import { ticketServices } from "../../../core/services/TicketsService";
import { Loading } from "../../../shared/components/Loading";
import { useParams } from "react-router-dom";
import AgentCard from "../components/AgentCard";
import EmptyComments from "../components/EmptyComments";
import { CommentItem } from "../components/CommentItem";
import TicketStatusCard from "../components/TicketStatusCard";
import { AddComment } from "../components/AddComment";
import { TICKET_STATUSES } from "../../../core/auth/permissions";
import type { TicketStatuses } from "../../../models/ticket-status.model";

const defaultTicket: TicketDto = {
  ticketId: 0,
  ticketTitle: "",
  ticketDesc: "",
  createdAt: new Date(),
  updatedAt: new Date(),
  status: {
    statusId: 0,
    statusName: "",
    statusCode: "",
    statusDesc: "",
  },
  agent: null
};

export function TicketDetailPage() {
  const { ticketId } = useParams<{ ticketId: string | undefined}>();
  const [ticket, setTicket] = useState<TicketDto>(defaultTicket);
  const [comments, setComments] = useState<CommentDto[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [availableTransitions, setAvailableTransitions] = useState<TicketStatuses[]>([]);

  const loadTicket = async () => {
    try {
      setIsLoading(true);
      setErrorMessage(null);
      if (!ticketId || Number.isNaN(Number(ticketId))) {
        setErrorMessage('ID de ticket no proporcionado.');
        return;
      }
      const ticketResponse: TicketDetail = await ticketServices.getTicketDetailById(Number(ticketId));
      if (!ticketResponse || !ticketResponse.ticket) {
        setErrorMessage('Ticket no encontrado.');
        return;
      }
      const availableTransitionsResponse = await ticketServices.getAvailableTransitions(Number(ticketId));
      const inversedComments = [...ticketResponse.comments].reverse();
      setTicket(ticketResponse.ticket);
      setComments(inversedComments);
      setAvailableTransitions(availableTransitionsResponse);
    } catch(error) {
      console.log('Error loading ticket:', error);
      setErrorMessage('No fue posible cargar el ticket.');
    } finally {
      setIsLoading(false);
    }
  };  

  useEffect(() => {
    loadTicket();
  }, []);

  if (isLoading) {
    return <Loading message="Cargando tickets..." />;
  }

  return (
    <main className="pt-3">
      <div className="container">
        
        {/* Alerta de Error */}
        {errorMessage && (
          <div className="alert alert-danger bg-danger-subtle border-danger text-danger-emphasis mb-4" role="alert">
            {errorMessage}
          </div>
        )}

        {/* Encabezado Principal */}
        <section className="mb-5 pb-4 border-bottom border-secondary-subtle" style={{ borderColor: "#23283b !important" }}>
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
            <div>
              <span className="badge bg-primary-subtle text-primary border border-primary-subtle px-3 py-2 rounded-pill small fw-bold text-uppercase tracking-wider mb-2 d-inline-block">
                Ticket #{ticket.ticketId}
              </span>
              <h1 className="h2 fw-bold text-white mb-2">{ticket.ticketTitle}</h1>
            </div>
          </div>
        </section>

        <div className="row g-4">
          <section className="col-12 col-lg-8">
            <div className="card custom-card shadow-sm mb-4">
              <div className="card-header custom-card-header">
                <h2 className="h5 fw-bold mb-0 text-white">Detalle del ticket</h2>
              </div>
              <div className="card-body p-4">
                <TicketStatusCard 
                  ticket={ticket}
                  availableTransitions={availableTransitions} 
                  setErrorMessage={setErrorMessage}
                  refresh={loadTicket} 
                />
                <div className="mb-4">
                  <h3 className="h6 text-primary fw-bold text-uppercase small mb-2">Descripción</h3>
                  <p className="mb-0 fs-6 lh-base text-white">{ticket.ticketDesc}</p>
                </div>
              </div>
            </div>

            <div className="card custom-card shadow-sm mb-5">
              <div className="card-header custom-card-header d-flex justify-content-between align-items-center">
                <h2 className="h5 fw-bold mb-0 text-white">Comentarios</h2>
                <span className="badge bg-primary text-white px-2.5 py-1.5 rounded-pill fw-bold">
                  {comments.length}
                </span>
              </div>
              <div className="card-body p-4">
                {
                  ticket.status.statusId !== TICKET_STATUSES.CLOSED &&
                  <AddComment 
                    refresh={loadTicket} 
                    ticketId={ticket.ticketId} 
                    setErrorMessage={setErrorMessage} 
                  />
                }
                <br />
                {comments.length === 0 ? (
                  <EmptyComments />
                ) : (
                  <div className="d-flex flex-column gap-3">
                    {comments.map((comment) => (
                      <CommentItem key={comment.commentId} comment={comment} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>

          <aside className="col-12 col-lg-4">
            <AgentCard 
              ticketId={ticket.ticketId}
              agent={ticket.agent} 
              refresh={loadTicket} 
              setErrorMessage={setErrorMessage} 
            />
          </aside>

        </div>
      </div>
    </main>
  );
}



