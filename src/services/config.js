import axios from "axios";

export const http = axios.create({
  baseURL: "https://db.ygoprodeck.com/api/v7/",
});
