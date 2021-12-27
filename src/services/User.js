import { ApiService } from "../utils";

const client = new ApiService();

export const readUser = () => {
  return client.get("/user");
};
