import axios from "axios";

interface Response {
  email: string;
  id: number;
  name: string;
  role: "admin" | "user";
}

interface Authenticate {
  (email: string, password: string): Response;
}

export const authenticate: Authenticate = (email, password) =>
  axios.post(`http://localhost:3001/login?email=${email}&password=${password}`);
