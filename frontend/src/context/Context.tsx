import React, { createContext, useReducer, useEffect } from "react";
import { InitialState } from "./InitialState";
import { State } from "./State";
import { Reducer } from "./Reducer";

interface Props {
  children: React.ReactNode;
}

export const Context = createContext<{
  state: State;
  dispatch: React.Dispatch<any>;
}>({ state: InitialState, dispatch: () => null });

export const RootProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, InitialState, () => {
    const local = localStorage.getItem("state");

    return local ? JSON.parse(local) : InitialState;
  });

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
