interface TicketStatusBadgeProps {
  statusCode: number;
  statusName: string;
}

export const TicketStatusBadge = ({statusCode,statusName}: TicketStatusBadgeProps) => {
  const badgeClassName = getBadgeClassName(statusCode);
  return <span className={badgeClassName}>{statusName}</span>;
};

const getBadgeClassName = (statusCode: number) => {
  const baseClassName = 'badge rounded-pill';

  const statusClassName: Record<number, string> = {
    1: 'text-bg-secondary',
    2: 'text-bg-info',
    3: 'text-bg-primary',
    4: 'text-bg-warning',
    5: 'text-bg-success',
    6: 'text-bg-dark',
  };

  return `${baseClassName} ${statusClassName[statusCode] ?? 'text-bg-secondary'}`;
};