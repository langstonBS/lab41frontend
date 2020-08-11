import React, { useContext } from 'react';

export const AppContext  = React.createContext()

export const useState = () => {
  const { state } = useContext(AppContext);
  return state;
};

export const useCereal = () => {
  const { state } = useContext(AppContext);
  return state.cereal;
};