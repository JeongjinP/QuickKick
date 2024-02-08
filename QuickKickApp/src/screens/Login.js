import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Logo from "../img/inuLogo.png";
import LoginTestComponent from "../component/LoginTestComponent";
// import AntDesign from '@expo/vector-icons/AntDesign';
// const userIcon = <AntDesign name="user" size={20} color="black" />;

function Login ({ navigation }) {
  const [credential,setCredential] = useState({ID: "", PW: ""});

  // 유저 정보를 변수에 저장하기 위한 함수 inputChangeHandler
  const inputChangeHandler = (enteredText, field) => {
    setCredential({...credential, [field]: enteredText});
  };

  // 로그인 여부를 판단해주는 함수 LoginTestComponent라는 외부 컴포넌트에 credential 배열을 props로 전달한 다음
  // 결과를 true, false와 함께 userName을 받아와서 로그인 성공시 'Root'(RootStack = TabNavigator)로 이동하게끔 구현
  const loginHandler = () => {
    const loginResult = LoginTestComponent({credential});

    if (loginResult.success) {
      navigation.navigate("Root", {
        // 중첩 네비게이터일 때 이동할 화면 이름도 써주어야 함
          screen: "홈",
          params: {userName: loginResult.userName},
      });
    } else {
        alert("로그인 실패");
    }
    // if (LoginTestComponent({credential})) {
    //   navigation.navigate("Root", {
    //     screen: "홈",
    //     params: {userName: },
    //   });
    // }
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image source={Logo} style={styles.logoImg}/>
      </View>

      {/*아이디, 비밀번호 입력 박스*/}
      <View style={styles.inputBox}>
        <TextInput
          placeholder={"아이디"}
          style={styles.input}
          value={credential.ID}
          onChangeText={(text) => inputChangeHandler(text, "ID")}
        />
      </View>

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

      <View style={{flex:2}}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => loginHandler()}>
          // loginHandler 함수로  로그인 여부 판단
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
      // borderRadius: 5,
      width: '100%',
      padding: 10,
      marginBottom: 18,
      fontSize: 16,
      borderColor: "lightgrey",
    },
    // icon: {
    //   position: "absolute",
    //   top: 15,
    //   left: 15,
    // },
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