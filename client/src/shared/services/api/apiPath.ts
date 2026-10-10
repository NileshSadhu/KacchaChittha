import { API_BASE_URL } from './apiConfig';

export const ApiPath = {
    auth: {
        googleRedirectUrl: `${API_BASE_URL}/auth/google`,

        googleInit: '/auth/google',
        me: '/auth/me',
        signOut: '/auth/signout',
    },
    accounts: {
        base: '/accounts',
        byId: (id: string) => `/accounts/${id}`,
    },
} as const;
