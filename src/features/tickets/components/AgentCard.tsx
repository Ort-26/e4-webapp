import type { UserDto } from "../../../models/users.model";
import { getInitials } from "../../../shared/utils";
import AssignAgent from "./AssignAgent";

interface AgentCardProps {
    ticketId: number;
    agent: UserDto | null;
    setErrorMessage: (message: string | null) => void;
    refresh: () => Promise<void>;
}

export default function AgentCard({ ticketId, agent, refresh, setErrorMessage }: AgentCardProps) {
  return (
    <div className="card custom-card shadow-sm position-sticky" style={{ top: "2rem" }}>
      <div className="card-header custom-card-header">
        <h2 className="h5 fw-bold mb-0 text-white">Agente asignado</h2>
      </div>

      <div className="card-body p-4">
        {!agent ? (
          <AssignAgent ticketId={ticketId} refresh={refresh} setErrorMessage={setErrorMessage} />
        ) : (
          <>
            <div className="d-flex align-items-center gap-3 mb-4">
              <div
                className="rounded-circle avatar-custom d-flex align-items-center justify-content-center fw-bold fs-5"
                style={{ width: 52, height: 52, flexShrink: 0 }}
              >
                {getInitials(agent.username, agent.userLastName)}
              </div>

              <div className="overflow-hidden">
                <p className="fw-bold text-white mb-0 text-truncate fs-6">
                  {agent.username} {agent.userLastName}
                </p>
                <p className="text-muted-custom small mb-0 text-truncate">
                  {agent.email}
                </p>
              </div>
            </div>

            <div className="border-custom rounded p-3" style={{ backgroundColor: "#161a29" }}>
              <p className="mb-2">
                <span className="badge bg-primary fw-semibold px-2 py-1">
                  {agent.role.roleName}
                </span>
              </p>
              <p className="text-muted-custom small mb-0 lh-sm">
                {agent.role.roleDesc}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
