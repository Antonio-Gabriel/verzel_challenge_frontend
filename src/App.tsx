import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes";
import { GlobalStyles } from "./styles/GlobalStyles";


export function App() {
  return (
    <BrowserRouter>
      <Routes />
      <GlobalStyles />
    </BrowserRouter>
  );
}
