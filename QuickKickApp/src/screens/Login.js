import React, { useState } from "react";
import {Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Logo from "../img/inuLogo.png";
import Home from "./Home";

function Login ({ navigation }) {
  const [inputId,setInputId] = useState("");

  function onChangeText(enteredText) {
    setInputId(enteredText);
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image source={Logo} style={styles.logoImg}/>
      </View>

      <View style={styles.inputBox}>
        {/*아이디, 비밀번호 입력창*/}
        <TextInput
          placeholder={"아이디"}
          style={styles.input}
          label={"id"}
          onChangeText={onChangeText}

        />
        <TextInput
          placeholder={"패스워드"}
          style={styles.input}
          secureTextEntry={true}
        />
        <View style={styles.loginOptions}>
          <Text style={styles.Text}>아이디저장</Text>
          <Text style={styles.Text}>자동로그인</Text>
        </View>
      </View>


      <View style={{flex:2}}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Root", {
            screen: "홈",
            params: {user: inputId},
          })}>
          <Text style={styles.buttonText}>로그인</Text>
        </TouchableOpacity>

        <View style={styles.loginInfo}>
          <Text style={styles.Text}>로그인 정보는 포탈과 동일합니다.</Text>
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
    marginBottom: 20,
    // marginTop: 200,
  },
  logoImg: {
    width: 130,
    height: 130,
    resizeMode: "contain", // 가로세로 비율 유지하고 이미지 리사이징
  },
  inputBox: {
    flex: 1,
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    // borderRadius: 5,
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
    fontSize: 16,
  },
  loginInfo: {
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 10,
    },
  Text: {
    marginTop: 5,
    fontSize: 14,
    color: "gray",
  }

})