import { useContext } from "react";
import { AuthContext } from "../provider/AuthContext";

export function useAuthentication() {
  return useContext(AuthContext);
}
