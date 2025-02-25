import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Container } from "@mui/material";
import { GlobalContextProvider } from "./context/GlobalContext.jsx";

createRoot(document.getElementById("root")).render(
  <GlobalContextProvider>
    <Container>
      <App />
    </Container>
  </GlobalContextProvider>
);
