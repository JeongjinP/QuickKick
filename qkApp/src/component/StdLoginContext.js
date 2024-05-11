import React, { createContext, useState, useContext } from 'react';

const StdLoginContext = createContext();

export function StdLoginProvider({ children }) {
  const [stdName, setStdName] = useState(null);
  const [teamName, setTeamName] = useState(null);
  const [stdId, setStdId] = useState(null);

  return (
    <StdLoginContext.Provider value={{ stdName, setStdName, teamName, setTeamName, stdId, setStdId }}>
      {children}
    </StdLoginContext.Provider>
  );
}

export function useStdData() {
  const context = useContext(StdLoginContext);
  if (!context) {
    throw new Error('useStdData 는 StdLoginProvider 안에서만 사용 가능합니다.');
  }
  return context;
}


