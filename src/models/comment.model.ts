import type { UserDto } from "./users.model";

export interface CommentDto {
  commentId: number;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  user: UserDto;
}