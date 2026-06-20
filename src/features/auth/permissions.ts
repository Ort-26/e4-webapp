export const Permissions = {
  TicketCreate: 'TICKET_CREATE',
  TicketAssign: 'TICKET_ASSIGN',
  TicketInProgress: 'TICKET_IN_PROGRESS',
  TicketWaitClient: 'TICKET_WAIT_CLIENT',
  TicketResolve: 'TICKET_RESOLVE',
  TicketClose: 'TICKET_CLOSE',
} as const;

export type PermissionName = typeof Permissions[keyof typeof Permissions];