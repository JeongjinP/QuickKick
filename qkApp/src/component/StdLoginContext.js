import React, { createContext, useState, useContext } from 'react';

// Context API 를 사용해 전역으로 사용할 수 있는 Context 생성
// 사용자 로그인하면 사용자 이름, 팀 이름, 학번을 전역으로 사용할 수 있게 함
// 최상위 컴포넌트인 App.js 에서 StdLoginProvider 로 감싸줘서 하위 컴포넌트 전체에서 사용 가능

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


