export const PERMISSIONS = {
    TICKET_CREATE: 1,
    TICKET_READ_OWN: 2,
    TICKET_READ_ALL: 3,
    TICKET_ASSIGN: 4,
    TICKET_START_PROGRESS: 5,
    TICKET_REQUEST_CLIENT_INFO: 6,
    TICKET_CLIENT_RESPOND: 7,
    TICKET_RESOLVE: 8,
    TICKET_CLOSE: 9,
    TICKET_CLOSE_ANY: 10,
    TICKET_COMMENT: 11,
    TICKET_REOPEN: 12
} as const;

export const ROLES = {
  USER: 1,
  SUPPORT: 2,
  MANAGER: 3,
} as const;

export const TICKET_STATUSES = {
  CREATED: 1,
  ASSIGNED: 2,
  IN_PROGRESS: 3,
  WAITING_FOR_CLIENT: 4,
  RESOLVED: 5 ,
  CLOSED: 6,
 } as const;


export type PermissionName = typeof PERMISSIONS[keyof typeof PERMISSIONS];
export type RoleName = typeof ROLES[keyof typeof ROLES];