import type { TicketDto } from "../../../models/ticket.models";
import type { TicketStatuses } from "../../../models/ticket-status.model";
import { useState } from "react";
import { ticketServices } from "../../../core/services/TicketsService";


interface TicketStatusCardProps {
  ticket: TicketDto;
  availableTransitions: TicketStatuses[];
  setErrorMessage?: (message: string | null) => void;
  refresh: () => Promise<void>;
}

export default function TicketStatusCard({ticket,availableTransitions,refresh,setErrorMessage}: TicketStatusCardProps) {
  const [isChangingStatus, setIsChangingStatus] = useState(false);
  const hasTransitions = availableTransitions.length > 0;

  const handleChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const statusId = Number(event.target.value);
    if (Number.isNaN(statusId) || statusId === 0) return; 
    event.target.value = "0";
    const selectedTransition = availableTransitions.find(t => t.statusId === statusId);
    if (!selectedTransition) {
      setErrorMessage && setErrorMessage('La transición seleccionada no es válida.');
      return;
    }
    try {
      setIsChangingStatus(true);
      await ticketServices.transitionTicket(ticket.ticketId, statusId);
      await refresh();
    } catch (error) {
      console.error('Error changing ticket status:', error);
      if (setErrorMessage) {
        setErrorMessage('No fue posible cambiar el estado del ticket.');
      }
    } finally {
      setIsChangingStatus(false);
    }
  };

  return (
    <div className="mb-4">
      <h3 className="h6 text-primary fw-bold text-uppercase small mb-2">
        Estado actual
      </h3>

      <div className="border-custom rounded p-3">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-start gap-3">
          <div>
            <p className="fw-bold text-white mb-1">
              {ticket.status.statusName}
            </p>

            <p className="text-muted-custom small mb-0">
              {ticket.status.statusDesc}
            </p>
          </div>

          <span className="badge bg-dark text-light border border-secondary px-2 py-1.5 fs-7 align-self-start">
            {ticket.status.statusCode}
          </span>
        </div>

        <div className="mt-3 pt-3 border-top border-secondary-subtle">
          <label
            htmlFor="ticketStatusTransition"
            className="form-label text-white small fw-semibold"
          >
            Cambiar estado
          </label>

          <select
            id="ticketStatusTransition"
            className="form-select bg-dark text-white border-secondary"
            defaultValue="0"
            onChange={handleChange}
            disabled={!hasTransitions || isChangingStatus}
          >
            <option value="0" >
              {"Selecciona el siguiente estado"}
            </option>

            {availableTransitions.map((transition) => (
              <option
                key={transition.statusId}
                value={transition.statusId}
              >
                {transition.statusName}
              </option>
            ))}
          </select>

          {isChangingStatus && (
            <p className="text-primary small mt-2 mb-0">
              Actualizando estado del ticket...
            </p>
          )}

        </div>
      </div>
    </div>
  );
}