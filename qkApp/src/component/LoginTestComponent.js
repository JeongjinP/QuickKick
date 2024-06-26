import axios from "axios";
import querystring from "querystring";


export function LoginTestComponent(props) {
  // 로그인 URL
  const SERVER_URL = "http://localhost:8090/member/login";


  // ID, PW를 서버에 전송하여 사용자 인증
  const authenticateUser = async (id, pw) => {
    console.log("입력 id:",id);
    console.log("입력 pw:",pw);
    try {
      // 서버에 POST 요청을 보내기 위한 데이터, URL 설정하고 POST 요청
      // const data = { id: id, password: pw };
      // const url = `${SERVER_URL}login?id=${data.id}&password=${data.password}`
      // const response = await axios.post(SERVER_URL, data);

      // 서버에 보내는 요청 주소에서 id, password를 노출하지 않기 위해 
      const data = querystring.stringify({ id: id, password: pw });
      const response = await axios.post(SERVER_URL, data, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });

      // 서버 응답 json 데이터 확인
      console.log("서버에서 응답받은 데이터: ",response.data);
      
      // 서버로부터 받은 응답 처리
      if (response.data.id) {
        console.log("로그인 성공");
        return { success: true, stdName: response.data.stdName, teamName: response.data.teamName};
      } else {
        console.log("로그인 실패");
        return { success: false };
      }
    } catch (error) {
        console.error("로그인 에러:", error);
        return false;
    }
  };

  // props 로 받은 ID, PW를 함수에 전달하고 결과 리턴
  return authenticateUser(props.credential.ID, props.credential.PW);
}
