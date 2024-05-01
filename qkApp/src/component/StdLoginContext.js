import React, { createContext, useState, useContext } from 'react';

const StdLoginContext = createContext();

export function StdLoginProvider({ children }) {
  const [stdName, setStdName] = useState(null);

  return (
    <StdLoginContext.Provider value={{ stdName, setStdName }}>
      {children}
    </StdLoginContext.Provider>
  );
}

export function useStdName() {
  const context = useContext(StdLoginContext);
  if (!context) {
    throw new Error('useStdName must be used within a StdNameProvider');
  }
  return context;
}