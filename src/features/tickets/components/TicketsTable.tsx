import { Link } from "react-router-dom";
import type { TicketDto } from "../../../models/ticket.models";
import { dateUtils } from "../../../shared/dateUtils";
import { TicketStatusBadge } from "./TicketStatusBadge";

interface TicketsTableProps {
  tickets: TicketDto[];
}

export default function TicketsTable({ tickets }: TicketsTableProps) {
  return (
    /* 1. Cambiamos las clases del contenedor para adaptarlo al modo oscuro */
    <div className="custom-table-container border-0 shadow-lg">
      <div className="table-responsive">
        
        {/* 2. Añadimos .custom-table y quitamos clases de Bootstrap que inyecten color claro */}
        <table className="table align-middle mb-0 custom-table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Título</th>
              <th scope="col">Estado</th>
              <th scope="col">Agente</th>
              <th scope="col">Creado</th>
              <th scope="col" className="text-end">
                Acciones
              </th>
            </tr>
          </thead>

          <tbody>
            {tickets.map((ticket) => (
              <tr key={ticket.ticketId}>
                <td>#{ticket.ticketId}</td>

                <td>
                  <div className="fw-semibold text-white">{ticket.ticketTitle}</div>
                </td>
                
                <td>
                  <TicketStatusBadge
                    statusCode={ticket.status.statusId}
                    statusName={ticket.status.statusName}
                  />
                </td>

                <td>
                  {ticket.agent ? (
                    `${ticket.agent.username} ${ticket.agent.userLastName}`
                  ) : (
                    /* Ajustamos la clase nativa a nuestro texto muted personalizado */
                    <span className="text-muted-custom">Sin asignar</span>
                  )}
                </td>

                <td>{dateUtils.formatDate(ticket.createdAt.toString())}</td>

                <td className="text-end">
                  {/* 3. Reemplazamos el btn-outline-primary nativo por nuestro btn-table-action */}
                  <Link
                    to={`/backoffice/tickets/${ticket.ticketId}`}
                    className="btn btn-sm btn-table-action"
                  >
                    Ver detalle
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}