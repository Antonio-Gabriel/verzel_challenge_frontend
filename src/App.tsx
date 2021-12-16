import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalStyles";
import { ToastContainer } from "react-toastify";

import { Routes } from "./routes";

import "./assets/icons/style.css";
import "react-toastify/dist/ReactToastify.css";
import { AuthContextProvider } from "./provider/AuthContext";

export function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes />
        <ToastContainer />
        <GlobalStyles />
      </BrowserRouter>
    </AuthContextProvider>
  );
}
