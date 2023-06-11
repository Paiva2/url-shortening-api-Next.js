import axios from "axios";

export const apiMethod = axios.create({
  baseURL: "https://api.shrtco.de/v2/",
});
