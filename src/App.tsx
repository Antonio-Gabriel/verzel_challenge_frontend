import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes";
import { GlobalStyles } from "./styles/GlobalStyles";

import "./assets/icons/style.css";


export function App() {
  return (
    <BrowserRouter>
      <Routes />
      <GlobalStyles />
    </BrowserRouter>
  );
}
