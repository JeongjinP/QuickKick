// import React from "react";
// import axios from "axios";
//
// //데이터베이스 결합기능 테스트용 LoginTestComponent
//
// //Login.js 에서 ID,PW를 입력받아와 유저 정보와 비교해 맞다면 Root 로 이동하게끔 구현
//
//
// /*
//   Backend 단에서 Spring boot를 통해서 DB 접근
// */
//
// const dummyData = {
//   ID: "",
//   PW: "",
//   NAME: "이근찬",
//   TEAM: "사상 최강의 팀"
// }
// export function LoginTestComponent( props ) {
//
//   // props 로 받은 ID, PW를 dummyData 와 비교하여 로그인 성공 여부와 성공시 유저 이름을 반환
//   const checkUser = (id, pw) => {
//     if(id === dummyData.ID && pw === dummyData.PW){
//       console.log("로그인 성공");
//
//       // 성공여부, 유저이름, 유저팀 반환
//       return { success: true, userName: dummyData.NAME, userTeam: dummyData.TEAM };
//     }
//     else{
//       console.log("로그인 실패");
//       return false;
//     }
//   }
//     return (
//       checkUser(props.credential.ID, props.credential.PW)
//     );
// }
//

import axios from "axios";
import {useState} from "react";

// 데이터베이스 결합기능 테스트용 LoginTestComponent

// Login.js 에서 ID, PW를 입력받아와 유저 정보와 비교해 맞다면 Root 로 이동하게끔 구현

export function LoginTestComponent(props) {

  // 서버의 URL
  const SERVER_URL = "http://localhost:8080/member/login";
  const [loginResult, setLoginResult] = useState(null);

  // ID, PW를 서버에 전송하여 사용자 인증을 시도
  const authenticateUser = async (id, pw) => {
    try {
      // 서버에 POST 요청을 보내기 위한 데이터
      const data = { id: id, pw: pw };
      // 서버로 POST 요청
      const response = await axios.post(SERVER_URL, data);

      // 서버로부터 받은 응답 처리
      if (response.data.success) {
        console.log("로그인 성공");
        // 성공 여부, 유저 이름, 유저 팀 반환
        setLoginResult({
          success: true,
          userName: response.data.userName,
          userTeam: response.data.userTeam
        });
      } else {
        console.log("로그인 실패");
        setLoginResult({ success: false });
      }
    } catch (error) {
      console.error("로그인 에러:", error);
      setLoginResult({ success: false });
    }
  };
  authenticateUser(props.credential.ID, props.credential.PW);
  return loginResult;
}
