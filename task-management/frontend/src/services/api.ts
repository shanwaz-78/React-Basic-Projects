import axios from "axios";
import { Register, Task, User } from "../types/type";

const API_URL = "http://localhost:5000/api";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const fetchTasks = async () => {
  const response = await api.get("/tasks");
  return response.data;
};

export const createTask = async (
  taskData: Omit<Task, "id" | "createdAt" | "updatedAt" | "userId">
) => {
  const response = await api.post("/tasks", taskData);
  return response.data;
};

export const updateTask = async (id: string, taskData: Partial<Task>) => {
  const response = await api.patch(`/tasks/${id}`, taskData);
  return response.data;
};

export const deleteTask = async (id: string) => {
  const response = await api.delete(`/tasks/${id}`);
  return response.data;
};

export const login = async (credentials: User) => {
  const response = await api.post("/auth/login", credentials);
  return response.data;
};

export const register = async (userData: Register) => {
  const response = await api.post("/auth/register", userData);
  return response.data;
};
