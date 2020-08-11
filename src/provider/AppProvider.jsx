import React, { useReducer } from 'react';
import { useEffect } from 'react';
import reducer, { initialState } from '../reduser/appReducer';
import { getCereal } from '../service/cerealService';
import { AppContext } from '../Hooks/appContext'

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  useEffect(() => {
    getCereal()
      .then(cereal => dispatch({ type: 'SET_CEREAL', payload: cereal }));
  }, [])
  
  console.log(state)



  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
};

export default AppProvider;