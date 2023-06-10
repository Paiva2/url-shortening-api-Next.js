import axios from "axios";

const apiMethod = axios.create({
    baseURL: 'https://api.shrtco.de/v2/',
  });