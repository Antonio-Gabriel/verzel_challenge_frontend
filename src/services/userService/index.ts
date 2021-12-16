import { IUserAccount } from "../../types/IUserAccount";
import { api } from "../api";

export async function createUserAccount(userAccountData: IUserAccount) {
  return await (
    await api.post<IUserAccount>("/users/", userAccountData)
  ).data;
}
