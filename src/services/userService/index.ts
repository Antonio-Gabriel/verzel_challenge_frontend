import { IAuthentication } from "../../types/IAuthentication";
import { IUserAccount } from "../../types/IUserAccount";
import { api } from "../api";

export async function createUserAccount(userAccountData: IUserAccount) {
  return await (
    await api.post<IUserAccount>("/users/", userAccountData)
  ).data;
}

export async function authUser(credentials: IAuthentication) {
  return await (
    await api.post("/user/login/", credentials)
  ).data;
}

export async function updateUserAccountData(userAccountData: IUserAccount) {
  const token = localStorage.getItem("access_token");

  return await (
    await api.put(`/users/${userAccountData.id}/`, userAccountData, {
      headers: { Authorization: `Bearer ${token}` },
    })
  ).data;
}

export async function GetAllUsers() {
  return await (
    await api.get<IUserAccount[]>("/users/")
  ).data;
}
