import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3001",
});

export const apiCursos = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
  }
});
