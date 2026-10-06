import apiClient from "../axiosInstance";
import { API_ROUTES } from "../apiRoutes";

export interface Account {
  id: string;
  name: string;
  balance?: number;
}

export const accountService = {
  createAccount: async (data: Partial<Account>): Promise<Account> => {
    const response = await apiClient.post<Account>(API_ROUTES.ACCOUNTS.CREATE, data);
    return response.data;
  },

  getAccounts: async (): Promise<Account[]> => {
    const response = await apiClient.get<Account[]>(API_ROUTES.ACCOUNTS.GET_ALL);
    return response.data;
  },

  getAccount: async (id: string): Promise<Account> => {
    const response = await apiClient.get<Account>(API_ROUTES.ACCOUNTS.GET_BY_ID(id));
    return response.data;
  },

  updateAccount: async (id: string, data: Partial<Account>): Promise<Account> => {
    const response = await apiClient.patch<Account>(API_ROUTES.ACCOUNTS.UPDATE(id), data);
    return response.data;
  },

  deleteAccount: async (id: string): Promise<void> => {
    await apiClient.delete(API_ROUTES.ACCOUNTS.DELETE(id));
  },
};
