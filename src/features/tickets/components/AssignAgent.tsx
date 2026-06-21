import { useEffect, useState } from "react";
import { PERMISSIONS } from "../../../core/auth/permissions";
import { useAuth } from "../../../core/auth/useAuth";
import type { UserDto } from "../../../models/users.model";
import { usersService } from "../../../core/services/UsersService";
import { ticketServices } from "../../../core/services/TicketsService";

interface AssignAgentProps {
    ticketId: number;
    setErrorMessage: (message: string | null) => void;
    refresh: () => Promise<void>;
}

export default function AssignAgent({ ticketId, refresh, setErrorMessage }: AssignAgentProps) {
    const { user } = useAuth();
    const canAssign = user?.permissions.includes(PERMISSIONS.TICKET_ASSIGN);
    const [userList,setUserList] = useState<UserDto[] | null>(null);
    
    const assignAgent = async  (event: React.ChangeEvent<HTMLSelectElement>) => {
        const agentId = Number(event.target.value);
        const selectedAgent = userList?.find(agent => agent.userId === agentId);
        if (!selectedAgent) {
            setErrorMessage('Agente seleccionado no válido');
            return;
        }
        try {
            await usersService.assignAgent(ticketId, agentId);
            await ticketServices.transitionTicket(ticketId, agentId);
            await refresh();
        } catch (error) {
            console.error('Error assigning agent:', error);
            setErrorMessage('No fue posible asignar el agente al ticket.');
        }
    }

    const loadAgents = async () => {
        const agents = await usersService.getAgents();
        setUserList(agents);
    }

    useEffect(() => {
        if (canAssign) {
            loadAgents();
        }
    }, [canAssign]);
    
    return (
        <>
        <div className="text-center py-3">
            <p className="text-muted-custom mb-0 fs-6">
                Este ticket todavía no tiene agente asignado.
            </p>
        </div>
        {
            canAssign && userList && (
            <select
                id="selectAgent"
                className="form-select bg-dark text-white border-secondary"
                defaultValue="0"
                onChange={assignAgent}
            >
                <option value="0" >{"Asignar agente..."}</option>

                {userList.map((agent) => (
                <option
                    key={agent.userId}
                    value={agent.userId}
                >
                    {agent.userId} - {agent.username} {agent.userLastName}
                </option>
                ))}
            </select>
            )
        }
        </>
    )
}
