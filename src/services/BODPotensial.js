import { ApiService } from "../utils";

const client = new ApiService();

export const getDataBod = () => {
  return client.get("/BODPotensial");
};
