import { api } from "../api";
import { ILessons } from "../../types/ILessons";

export async function GetAllLessons() {
  return await (
    await api.get<ILessons[]>("/lessons/")
  ).data;
}

export async function createLessons(moduleData: ILessons) {
  const token = localStorage.getItem("access_token");

  return await (
    await api.post<ILessons>(`/lessons/`, moduleData, {
      headers: { Authorization: `Bearer ${token}` },
    })
  ).data;
}

export async function updateLessons(moduleData: ILessons) {
  const token = localStorage.getItem("access_token");

  return await (
    await api.put<ILessons>(`/lessons/${moduleData.id}/`, moduleData, {
      headers: { Authorization: `Bearer ${token}` },
    })
  ).data;
}

export async function deleteLessons(id: number) {
  const token = localStorage.getItem("access_token");

  return await (
    await api.delete(`/lessons/${id}/`, {
      headers: { Authorization: `Bearer ${token}` },
    })
  ).data;
}