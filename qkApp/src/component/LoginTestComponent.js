import React from "react";
import axios from "axios";


export function LoginTestComponent(props) {

  // 서버의 URL
  const SERVER_URL = "http://localhost:8080/member";

  // ID, PW를 서버에 전송하여 사용자 인증을 시도
  const authenticateUser = async (id, pw) => {
    console.log("입력 id:",id);
    console.log("입력 pw:",pw);
    try {
      // 서버에 POST 요청을 보내기 위한 데이터
      const data = { id: id, password: pw };
      const url = `${SERVER_URL}/login?id=${data.id}&password=${data.password}`
      const response = await axios.post(url);
      console.log("응답",response.data);
      // 서버로부터 받은 응답 처리
      if (response.data.id) {
        console.log("로그인 성공");
        // 성공 여부, 유저 이름, 유저 팀 반환
        console.log(response.data.id);
        console.log(response.data.stdName);



        return { success: true, stdName: response.data.stdName};
      } else {
        console.log("로그인 실패");
        return { success: false };
      }
    } catch (error) {
        console.error("로그인 에러:", error);
        return false;
    }
  };

  // props로 받은 ID, PW를 서버에 전달하여 사용자 인증 시도
  return authenticateUser(props.credential.ID, props.credential.PW);
}
