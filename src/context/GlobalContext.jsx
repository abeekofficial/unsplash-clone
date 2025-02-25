import { createContext, useEffect, useReducer } from "react";

export const GlobalContext = createContext();

const dataFromStorage = () => {
  const storedData = localStorage.getItem("unsplash");

  if (storedData && storedData !== undefined && storedData !== "") {
    try {
      return JSON.parse(storedData);
    } catch (error) {
      console.error("Error parsing stored data:", error);
      return {
        colors: ["#0277bd", "#f50057", "#ffc107"],
        navBgColor: null,
        images: {},
        likedImages: [],
      };
    }
  }

  // Default state if no storedData
  return {
    colors: ["#0277bd", "#f50057", "#ffc107"],
    navBgColor: null,
    images: [],
    likedImages: [],
  };
};

const changeState = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "CHANGE_NAV_BG":
      return { ...state, navBgColor: payload };
    case "ADD_LIKED_IMAGE":
      return {
        ...state,
        likedImages: Array.isArray(state.likedImages)
          ? [...state.likedImages, payload]
          : [payload],
      };
    case "ADD_IMAGES":
      return { ...state, images: [...state.images, ...payload] };
    default:
      return state;
  }
};

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(changeState, dataFromStorage());

  useEffect(() => {
    localStorage.setItem("unsplash", JSON.stringify(state));
  }, [state]);

  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
