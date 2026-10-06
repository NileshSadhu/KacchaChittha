import apiClient from "../axiosInstance";
import { API_ROUTES } from "../apiRoutes";

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

export const authService = {
  loginWithGoogle: () => {
    window.location.href = API_ROUTES.AUTH.LOGIN_GOOGLE;
  },

  signOut: async (): Promise<void> => {
    await apiClient.post(API_ROUTES.AUTH.SIGNOUT);
  },

  getMe: async (): Promise<User> => {
    const response = await apiClient.get<User>(API_ROUTES.AUTH.ME);
    return response.data;
  },
};
