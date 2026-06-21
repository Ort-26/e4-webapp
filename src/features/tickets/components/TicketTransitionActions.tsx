import type { TicketStatuses } from "../../../models/ticket-status.model";

interface TicketTransitionsActionsProps {
  ticketId: number;
  availableTransitions: TicketStatuses[];
  isLoadingTransitions: boolean;
  isChangingStatus: boolean;
  onLoadTransitions: () => Promise<void>;
  onChangeStatus: (statusId: number) => Promise<void>;
}

export function TicketTransitionsActions({
  ticketId,
  availableTransitions,
  isLoadingTransitions,
  isChangingStatus,
  onLoadTransitions,
  onChangeStatus,
}: TicketTransitionsActionsProps) {
  const hasTransitions = availableTransitions.length > 0;

  return (
    <div className="card custom-card shadow-sm mt-4">
      <div className="card-header custom-card-header">
        <h2 className="h5 fw-bold mb-0 text-white">
          Acciones del ticket
        </h2>
      </div>

      <div className="card-body p-4">
        <p className="text-secondary small mb-3">
          Consulta los siguientes estados disponibles para el ticket #{ticketId}.
        </p>

        <button
          type="button"
          className="btn btn-outline-primary w-100 fw-semibold mb-3"
          onClick={onLoadTransitions}
          disabled={isLoadingTransitions || isChangingStatus}
        >
          {isLoadingTransitions
            ? "Consultando estados..."
            : "Ver siguientes estados posibles"}
        </button>

        {!isLoadingTransitions && !hasTransitions && (
          <div className="alert alert-secondary bg-dark border-secondary text-secondary mb-0">
            No hay transiciones cargadas o disponibles.
          </div>
        )}

        {hasTransitions && (
          <div className="d-flex flex-column gap-2">
            {availableTransitions.map((transition) => (
              <button
                key={transition.statusId}
                type="button"
                className="btn btn-dark border-secondary text-start p-3"
                disabled={isChangingStatus}
                onClick={() => onChangeStatus(transition.statusId)}
              >
                <div className="d-flex justify-content-between align-items-start gap-3">
                  <div>
                    <p className="fw-bold text-white mb-1">
                      {transition.statusName}
                    </p>

                    <p className="small text-secondary mb-0">
                      {transition.statusDesc}
                    </p>
                  </div>

                  <span className="badge bg-primary-subtle text-primary border border-primary-subtle">
                    {transition.statusCode}
                  </span>
                </div>
              </button>
            ))}
          </div>
        )}

        {isChangingStatus && (
          <p className="text-primary small mt-3 mb-0">
            Actualizando estado del ticket...
          </p>
        )}
      </div>
    </div>
  );
}