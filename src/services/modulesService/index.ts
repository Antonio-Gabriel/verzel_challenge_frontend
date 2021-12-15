import { IModules } from "../../types/IModules";
import { api } from "../api";

export async function GetAllModulesWithLessons() {
  return await (
    await api.get<IModules[]>("/modules")
  ).data;
}

export async function GetLessonsByModule(idModule: number) {
  return await (
    await api.get<IModules>(`/modules/${idModule === 0 ? "" : idModule}`)
  ).data;
}
