import { createContext, useContext, useReducer } from "react";

const MainContext = createContext();

const initialState = {
  favourite: [],
  bag: [],
};

// We will use Supabase

function reducer(state, action) {
  switch (action.type) {
    case "addToFavourite":
      return {
        ...state,
        favourite: [...state.favourite, action.payload],
      };
    case "addToCart":
      return {
        ...state,
        bag: [...state.bag, action.payload],
      };
    default:
      throw new Error("unknown action type");
  }
}

function MainStateProvider({ children }) {
  const [{ favourite, bag }, dispatch] = useReducer(reducer, initialState);

  function addProductToFavourite(product) {
    dispatch({ type: "addToFavourite", payload: product });
  }

  return (
    <MainContext.Provider
      value={{
        favourite,
        bag,
        addProductToFavourite,
        dispatch,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}

function useMainContext() {
  const context = useContext(MainContext);
  if (context === undefined)
    throw new Error("MainContext was used outside of CitiesProvider");
  return context;
}

export { MainStateProvider, useMainContext };
