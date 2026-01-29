import { apiRequest } from "./api";

export const getMousApi = () => {
  return apiRequest("/mous/");
};
