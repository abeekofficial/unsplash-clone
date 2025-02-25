import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error(
      "useGlobalContext() GlobalContextPrivederni ichida bo'lishi kerak"
    );
  }

  return context;
};
