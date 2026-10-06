export { default as apiClient } from "./axiosInstance";
export { API_ROUTES } from "./apiRoutes";

// Export all services
export { authService } from "./services/authService";
export { accountService } from "./services/accountService";

// Export all types/interfaces
export type { User } from "./services/authService";
export type { Account } from "./services/accountService";
