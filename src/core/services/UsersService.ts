import type { ApiResponse } from "../../models/api-response.type";
import type { UserDto } from "../../models/users.model";
import { axiosClient, unwrapApiResponse } from "../http/axios-client";

const getAgents = async ():Promise<UserDto[]> => {
    const response = await unwrapApiResponse(axiosClient.get<ApiResponse<UserDto[]>>('/users/agents'));
    return response;
}

const assignAgent = async (ticketId: number, agentId: number): Promise<void> => {
    await unwrapApiResponse(axiosClient.post(`/users/${ticketId}/assign/${agentId}`));
}

export const usersService = {
    getAgents,
    assignAgent
}