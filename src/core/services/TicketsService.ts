import type { ApiResponse } from '../../models/api-response.type';
import type { TicketStatuses } from '../../models/ticket-status.model';
import type { CreateTicketRequest, CreateTicketResponse, TicketDetail, TicketDto } from '../../models/ticket.models';
import { axiosClient, unwrapApiResponse } from '../http/axios-client';

const getTickets = async (): Promise<TicketDto[]> => {
    const response = await unwrapApiResponse(axiosClient.get<ApiResponse<TicketDto[]>>('/me/tickets'));
    return response;
  }

const getAllTickets = async (): Promise<TicketDto[]> => {
    const response = await unwrapApiResponse(axiosClient.get<ApiResponse<TicketDto[]>>('/tickets'));
    return response;
}

const getTicketDetailById = async (ticketId: number): Promise<TicketDetail> => {
    const response = await unwrapApiResponse(axiosClient.get<ApiResponse<TicketDetail>>(`/tickets/${ticketId}`));
    return response;
}

const createComment = async (ticketId: number, payload: { content: string }): Promise<void> => {
    await unwrapApiResponse(axiosClient.post(`/tickets/${ticketId}/comments`, payload));
}

const getAvailableTransitions = async (ticketId: number): Promise<TicketStatuses[]> => {
  const response = await unwrapApiResponse(axiosClient.get<ApiResponse<TicketStatuses[]>>(`/tickets/${ticketId}/available-transitions`));
  return response;
}

const transitionTicket = async (ticketId: number, statusId: number): Promise<void> => {
  await unwrapApiResponse(axiosClient.post(`/tickets/${ticketId}/transition/${statusId}`));
}

const createTicket = async (payload: CreateTicketRequest): Promise<CreateTicketResponse> => {
  const response = await unwrapApiResponse(axiosClient.post<ApiResponse<CreateTicketResponse>>('/tickets', payload));
  return response;
}

export const ticketServices = {
    getTickets,
    getAllTickets,
    getTicketDetailById,
    getAvailableTransitions,
    createComment,
    transitionTicket,
    createTicket
}