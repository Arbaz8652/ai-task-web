import axios from "axios";
import { BASE_URL } from "../types/constants";
import type { Task } from "../types/types";

export async function fetchTasks(params?: string): Promise<Task[]> {
    const res = await axios.get(`${BASE_URL}/api/tasks`, { params });
    return res.data;
}

export async function markComplete(id: string) {
  return axios.patch(`${BASE_URL}/${id}/complete`);
}

export async function deleteTask(id: string) {
  return axios.delete(`${BASE_URL}/${id}`);
}
