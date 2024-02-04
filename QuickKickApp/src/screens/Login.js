import React from "react";
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Logo from "../img/inuLogo.png";

function Login ({ navigation }) {
  return (

    <View style={styles.container}>

      <View style={styles.logoBox}>
        <Image source={Logo} style={styles.logoImg}/>
      </View>

      <View style={{flex:1}}>
        {/*아이디, 비밀번호 입력창*/}
        <TextInput
          placeholder={"아이디"}
          style={styles.input}
        />
        <TextInput
          placeholder={"패스워드"}
          style={styles.input}
          secureTextEntry={true}/>
      </View>
      <View style={{flex:1}}>

      </View>
      <View style={{flex:3}}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Main")}>
          <Text style={styles.buttonText}>로그인</Text>
        </TouchableOpacity>
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
    flex: 1,
    alignItems: "center",
    marginTop: 100,
    marginBottom: 100,
  },
  logoImg: {
    width: 130,
    height: 130,
    resizeMode: "contain", // 가로세로 비율 유지하고 이미지 리사이징
  },
  input: {
    borderWidth: 1,
    // borderRadius: 5,
    width: '100%',
    padding: 10,
    marginBottom: 18,
    fontSize: 18,
    borderColor: "lightgrey",

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
  }

})