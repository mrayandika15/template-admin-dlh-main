import { ApiService } from "../utils";

const client = new ApiService();

export const login = (payload) => {
  return client.post("/auth/login", payload);
};
