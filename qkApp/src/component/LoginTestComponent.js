import React from "react";

//데이터베이스 결합 테스트용 로그인 컴포넌트
//Login.js 에서 ID,PW를 입력받아 유저 정보와 비교해 맞다면 Root 로 이동하게끔 구현
// 테스트용 더미 데이터
const dummyData = {
  ID: "20241111",
  PW: "1234",
  NAME:"근찬",
}

// props로 받은 ID, PW를 dummyData와 비교하여 로그인 성공 여부와 성공시 유저 이름을 반환
const checkUser = (id, pw) => {
    if(id === dummyData.ID && pw === dummyData.PW){
        console.log("로그인 성공");
        return { success: true, userName: dummyData.NAME };
    }
    else{
        console.log("로그인 실패");
        // console.log("ID: ", id, "PW: ", pw);
        return { success: false };
    }
}

export function LoginTestComponent( props ) {
    return (
      checkUser(props.credential.ID, props.credential.PW)
    );
}

