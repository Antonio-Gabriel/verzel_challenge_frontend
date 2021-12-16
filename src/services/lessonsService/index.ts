import { api } from "../api";
import { ILessons } from "../../types/ILessons";

export async function GetAllLessons() {
  return await (
    await api.get<ILessons[]>("/lessons/")
  ).data;
}
