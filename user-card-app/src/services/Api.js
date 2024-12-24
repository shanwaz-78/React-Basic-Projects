import axios from "axios";
const baseURL = `https://randomuser.me/api`;

const api = axios.create({ baseURL });

export const getUsers = (queryParams) => {
  return api.get(queryParams);
};
