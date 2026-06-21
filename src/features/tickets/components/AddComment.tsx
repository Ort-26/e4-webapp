import { type SubmitEvent, useState } from "react";
import { ticketServices } from "../../../core/services/TicketsService";

interface AddCommentProps {
  refresh: () => Promise<void>;
  ticketId: number;
  setErrorMessage: (message: string | null) => void;
}

export function AddComment({refresh,ticketId,setErrorMessage}: AddCommentProps) {
  const [newComment, setNewComment] = useState("");
  const [isSavingComment, setIsSavingComment] = useState(false);

  const handleAddComment = async (content: string) => {
      if (!content.trim()) {
        setErrorMessage("El comentario no puede estar vacío.");
        return;
      }
  
      try {
        setIsSavingComment(true);
        setErrorMessage(null);
        await ticketServices.createComment(ticketId, {content});
        await refresh();
      } catch (error) {
        console.log("Error creating comment:", error);
        setErrorMessage("No fue posible agregar el comentario.");
      } finally {
        setIsSavingComment(false);
      }
    };

  const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedComment = newComment.trim();
    if (!trimmedComment) return;
    await handleAddComment(trimmedComment);
    setNewComment("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <label
        htmlFor="newComment"
        className="form-label text-white fw-semibold"
      >
        Agregar comentario
      </label>

      <textarea
        id="newComment"
        className="form-control bg-dark text-white border-secondary"
        rows={3}
        placeholder="Escribe una actualización o respuesta..."
        value={newComment}
        onChange={(event) => setNewComment(event.target.value)}
        disabled={isSavingComment}
      />

      <div className="d-flex justify-content-end mt-3">
        <button
          type="submit"
          className="btn btn-primary fw-semibold"
          disabled={isSavingComment || newComment.trim().length === 0}
        >
          {isSavingComment ? "Guardando..." : "Agregar comentario"}
        </button>
      </div>
    </form>
  );
}