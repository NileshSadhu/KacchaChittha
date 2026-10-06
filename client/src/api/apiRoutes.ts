export const API_ROUTES = {
  AUTH: {
    LOGIN_GOOGLE: "/auth/google",
    SIGNOUT: "/auth/signout",
    ME: "/auth/me",
  },
  ACCOUNTS: {
    CREATE: "/accounts",
    GET_ALL: "/accounts",
    GET_BY_ID: (id: string | number) => `/accounts/${id}`,
    UPDATE: (id: string | number) => `/accounts/${id}`,
    DELETE: (id: string | number) => `/accounts/${id}`,
  },
} as const;
