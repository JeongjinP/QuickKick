import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Logo from "../img/inuLogo.png";
import { LoginTestComponent } from "../component/LoginTestComponent";


function Login ({ navigation }) {
  // useState 를 사용해 ID, PW를 저장할 credential 배열 생성
  const [credential,setCredential] = useState({ID: "", PW: ""});

  // id, pw 입력창에서 사용할 함수
  const inputChangeHandler = (enteredText, field) => {
    setCredential({...credential, [field]: enteredText});
  };

  // 로그인 여부를 판단해주는 LoginTestComponent 라는 컴포넌트에 사용자로부터 입력받은 credential 배열을 props 로 전달
  // 결과로 true, false 와 함께 사용자 이름, 팀 userName, userTeam 을 받아옴
  // 로그인 성공시 "Root"(RootStack 에서 Login => TabNavigator)로 이동하게끔 구현
  const loginHandler = () => {
    // loginResult 에 LoginTestComponent 에서 나온 return 값을을 저장
    const loginResult = LoginTestComponent({credential});

    // 로그인 성공시
    if (loginResult.success) {
      navigation.navigate("Root", {
        // 여러 네비게이션을 동시에 사용한 중첩 네비게이션에서는 이동할 화면 이름도 써주어야 함
        // return 받은 userName, userTeam 까지 전달해줌
          screen: "홈",
          params: {userName: loginResult.userName, userTeam:loginResult.userTeam},
      });
    } else {
        alert("로그인 실패");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image source={Logo} style={styles.logoImg}/>
      </View>

      {/*아이디 입력창*/}
      <View style={styles.inputBox}>
        <TextInput
          placeholder={"아이디"}
          style={styles.input}
          value={credential.ID}
          // 입력 상자에서 텍스트 변화시 함수 실행
          onChangeText={(text) => inputChangeHandler(text, "ID")}
        />
      </View>

      {/*비밀번호 입력창*/}
      <View style={styles.inputBox}>
        <TextInput
          placeholder={"패스워드"}
          style={styles.input}
          secureTextEntry={true}
          value={credential.PW}
          onChangeText={(text) => inputChangeHandler(text, "PW")}
        />
      </View>

      <View style={styles.loginOptions}>
        <Text style={styles.Text}>아이디저장</Text>
        <Text style={styles.Text}>자동로그인</Text>
      </View>

      {/*로그인 버튼*/}
      <View style={{flex:2}}>
        <TouchableOpacity
          style={styles.button}
          // 버튼 눌렀을 때 loginHandler 함수로  로그인 여부 판단
          // 함수에서 로그인 여부 확인해서 화면 이동까지 처리
          onPress={() => loginHandler()}
        >
          <Text style={styles.buttonText}>로그인</Text>
        </TouchableOpacity>

        <View style={styles.loginInfo}>
          <Text style={styles.Text}>로그인 정보는 포탈과 동일합니다.</Text>
          <Text style={styles.Text}>(학생은 학번, 교원은 교번, 직원은 사번입니다)</Text>
          <Text style={styles.Text}>아이디찾기/비밀번호 찾기는 PC에서 포탈을 이용하시기 바랍니다.</Text>
        </View>
      </View>

    </View>
  );
      }

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 14,
    backgroundColor: "white",
  },
  logoBox: {
    flex: 2,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 30,
    // marginTop: 200,
  },
  logoImg: {
    width: 130,
    height: 130,
    resizeMode: "contain", // 가로세로 비율 유지하고 이미지 리사이징
  },
  inputBox: {
    flexDirection: "row",
    justifyContent: "center",
  },
    input: {
      flex: 1,
      borderWidth: 1,
      width: '100%',
      padding: 10,
      marginBottom: 18,
      fontSize: 16,
      borderColor: "lightgrey",
    },
  loginOptions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginHorizontal: 70,
    marginBottom: 30,
    },
  button: {
    alignItems: "center",
    backgroundColor: "#0A4A9B",
    padding: 16,
    marginHorizontal: 10,
    // borderRadius: 5,
    },
    buttonText: {
      color: "white",
      fontSize: 14,
    },
  loginInfo: {
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 10,
    },
  Text: {
    marginTop: 5,
    fontSize: 12,
    color: "gray",
  }

})