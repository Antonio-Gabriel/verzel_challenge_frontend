import { createContext, ReactNode, useState } from "react";
import { authUser } from "../services/userService";
import { IAuthentication } from "../types/IAuthentication";
import { IUserAccount } from "../types/IUserAccount";

interface IAuthState {
  access_token: string;
  user: IUserAccount;
}

interface IAuthContextState extends IAuthState {
  signIn(credentials: IAuthentication): Promise<void>;
  signOut(): void;
}

interface IContextProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as IAuthContextState);

export function AuthContextProvider({ children }: IContextProviderProps) {
  const [data, setData] = useState(() => {
    const access_token = localStorage.getItem("access_token");
    const user = localStorage.getItem("user");

    if (access_token && user) {
      return { access_token, user: JSON.parse(user) };
    }

    return {} as IAuthState;
  });

  async function signIn(credentials: IAuthentication) {
    const response = await authUser(credentials);

    const { access_token, user } = response;

    localStorage.setItem("access_token", access_token);
    localStorage.setItem("user", JSON.stringify(user));

    setData({
      access_token,
      user,
    });
  }

  function signOut() {
    localStorage.removeItem("access_token");
    localStorage.removeItem("user");

    setData({} as IAuthState);
  }

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        access_token: data.access_token,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
