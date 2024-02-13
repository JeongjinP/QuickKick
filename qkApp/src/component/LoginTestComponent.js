import React from "react";
import axios from "axios";

//데이터베이스 결합기능 테스트용 LoginTestComponent

//Login.js 에서 ID,PW를 입력받아와 유저 정보와 비교해 맞다면 Root 로 이동하게끔 구현


/*
  Backend 단에서 Spring boot를 통해서 DB 접근
*/


useEffect(async() => {
  try {
    const res = await axios.get('')
    const _inputData = await res.data.map((rowData)=> ({
      ID: rowData.ID,
      PW: rowData.password,
      name: rowData.stdName
      })
    )
    setInputData(inputData.concat(_inputData))
  } catch(e) {
    console.error(e.message)
  }
},[]);

export function LoginTestComponent( props ) {
  const baseUrl = "http://localhost:8080";

  // props 로 받은 ID, PW를 dummyData 와 비교하여 로그인 성공 여부와 성공시 유저 이름을 반환
  const checkUser = (id, pw) => {
    if(id === rowData.ID && pw === rowData.PW){
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

