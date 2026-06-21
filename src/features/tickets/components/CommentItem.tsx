import type { CommentDto } from "../../../models/comment.model";
import { dateUtils } from "../../../shared/dateUtils";
import { getInitials } from "../../../shared/utils";

interface CommentItemProps {
    comment: CommentDto;
}


export function CommentItem({ comment }: CommentItemProps) {
  return (
    <article className="border-custom rounded p-3" style={{ backgroundColor: "#161a29" }}>
      <div className="d-flex justify-content-between align-items-start gap-3 mb-3">
        <div className="d-flex align-items-center gap-3">
          <div
            className="rounded-circle avatar-custom d-flex align-items-center justify-content-center fw-bold"
            style={{ width: 42, height: 42, flexShrink: 0 }}
          >
            {getInitials(comment.user.username, comment.user.userLastName)}
          </div>

          <div>
            <p className="fw-bold text-white mb-0 small">
              {comment.user.username} {comment.user.userLastName}
            </p>
            <p className="text-primary small mb-0 fw-semibold" style={{ fontSize: "0.8rem" }}>
              {comment.user.role.roleName}
            </p>
          </div>
        </div>

        <span className="text-muted-custom small text-end" style={{ fontSize: "0.8rem" }}>
          {dateUtils.formatDateShort(comment.createdAt.toString())}
        </span>
      </div>

      <p className="mb-0 text-light-emphasis lh-base fs-6 ps-1" style={{ color: "#e2e8f0" }}>
        {comment.content}
      </p>
    </article>
  );
}

