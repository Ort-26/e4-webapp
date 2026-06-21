export const AppRoutes = {
    ROOT: '/',
    LANDING: {
        ABOUT: '/about',
        WORKFLOW: '/workflow',
    },
    AUTH: {
        LOGIN: '/login',
    },
    TICKETS: {
        LIST: '/backoffice/tickets', 
        DETAIL: '/backoffice/tickets/:ticketId', 
        CREATE: '/backoffice/tickets/new',
    },
    // FORBIDDEN: '/forbidden',
    // NOT_FOUND: '/not-found',
};

export const AppPublicRoutes = [
    AppRoutes.ROOT,
    AppRoutes.LANDING.ABOUT,
    AppRoutes.LANDING.WORKFLOW
]; 