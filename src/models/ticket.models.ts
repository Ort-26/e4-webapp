import type { CommentDto } from "./comment.model";
import type { TicketStatuses } from "./ticket-status.model";
import type { UserDto } from "./users.model";

export interface TicketDto {
  ticketId: number;
  ticketTitle: string;
  ticketDesc: string;
  createdAt: Date;
  updatedAt: Date;
  status: TicketStatuses;
  agent: UserDto | null;
}

export interface TicketDetail {
    ticket: TicketDto;
    comments: CommentDto[];
} 

export interface CreateTicketRequest {
    ticketTitle: string;
    ticketDesc: string;
}

export interface CreateTicketResponse {
    ticketId: number;
    createdAt: Date;
    statusId: number;
}