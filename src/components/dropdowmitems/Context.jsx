import { createContext, useState, useContext } from "react";
import DropDown from "./DropDown";

const GlobalStateContext = createContext();

const Context = () => {
  const initialState = []; 
  const [globalState, setGlobalState] = useState(initialState);

  return (
    <GlobalStateContext.Provider value={{ globalState, setGlobalState }}>
      <DropDown />
    </GlobalStateContext.Provider>
  );
};
export const useGlobalState = () => useContext(GlobalStateContext);
export default Context;
