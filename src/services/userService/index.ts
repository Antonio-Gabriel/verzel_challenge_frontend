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
