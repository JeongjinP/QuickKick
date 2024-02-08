import React from "react";

//데이터베이스 결합기능 테스트용 LoginTestComponent

//Login.js 에서 ID,PW를 입력받아와 유저 정보와 비교해 맞다면 Root 로 이동하게끔 구현
// 테스트용 데이터
const dummyData = {
  ID: "20241111",
  PW: "1111",
  NAME:"이근찬",
  TEAM:"사상 최강의 팀"
}

export function LoginTestComponent( props ) {

  // props 로 받은 ID, PW를 dummyData 와 비교하여 로그인 성공 여부와 성공시 유저 이름을 반환
  const checkUser = (id, pw) => {
    if(id === dummyData.ID && pw === dummyData.PW){
      console.log("로그인 성공");

      // 성공여부, 유저이름, 유저팀 반환
      return { success: true, userName: dummyData.NAME, userTeam: dummyData.TEAM };
    }
    else{
      console.log("로그인 실패");
      return false;
    }
  }
    return (
      checkUser(props.credential.ID, props.credential.PW)
    );
}

