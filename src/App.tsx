import { BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { GlobalStyles } from "./styles/GlobalStyles";


export function App() {
  return (
    <BrowserRouter>
      <Home />

      <GlobalStyles />
    </BrowserRouter>
  );
}
