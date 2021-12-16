import { IModules } from "../../types/IModules";
import { api } from "../api";

export async function GetAllModulesWithLessons() {
  return await (
    await api.get<IModules[]>("/modules/")
  ).data;
}

export async function GetLessonsByModule(idModule: number) {
  return await (
    await api.get<IModules>(`/modules/${idModule === 0 ? "" : idModule}/`)
  ).data;
}

export async function GetModuleById(id: number) {
  const token = localStorage.getItem("access_token");

  return await (
    await api.get<IModules[]>(`/modules/${id}/`, {
      headers: { Authorization: `Bearer ${token}` },
    })
  ).data;
}

export async function createModule(moduleData: IModules) {
  const token = localStorage.getItem("access_token");

  return await (
    await api.post<IModules>(`/modules/`, moduleData, {
      headers: { Authorization: `Bearer ${token}` },
    })
  ).data;
}

export async function updateModule(moduleData: IModules) {
  const token = localStorage.getItem("access_token");

  return await (
    await api.put<IModules>(`/modules/${moduleData.id}/`, moduleData, {
      headers: { Authorization: `Bearer ${token}` },
    })
  ).data;
}

export async function deleteModule(id: number) {
  const token = localStorage.getItem("access_token");

  return await (
    await api.delete(`/modules/${id}/`, {
      headers: { Authorization: `Bearer ${token}` },
    })
  ).data;
}
