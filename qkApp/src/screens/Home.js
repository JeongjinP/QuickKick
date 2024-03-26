import React, {useCallback, useEffect} from "react";
import {View, Text, StyleSheet, Pressable, SafeAreaView, BackHandler} from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import GeneralHeader from "../component/GeneralHeader";
import {useFocusEffect} from "@react-navigation/native";


function Home ({ navigation, route }) {
  
  // 안드로이드 뒤로가기 버튼 작동 방지 코드
  // useEffect 대신 useFocusEffect 사용하는것은 스택 네비게이터 구조상
  // 다른 화면 이동해도 홈 화면이 뒤에 유지되어 백핸들러가 언마운트 되지 않기 때문에
  // 화면에 포커스가 있을때만 기능이 실행되게 함
  useFocusEffect(
    useCallback(() => {
      const backAction = () => {
        return true;
      };
      const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        backAction,
      );
      return () => {
        backHandler.remove();
      };
    }, []))

  return (
    <SafeAreaView style={GeneralHeader.container}>
      <View style={GeneralHeader.header}>
        <Text style={GeneralHeader.title}>홈</Text>
      </View>
      {/*유저정보 표시 박스*/}
      <View style={styles.userInfo}>
        <View>
          {/*유저 이름, 팀 표시*/}
          {/*화면 이동간 받은 데이터 수신은 route 를 통해 함. Login 컴포넌트에서 userName, userTeam 받아와서 표시해줌*/}
          <Text style={styles.userInfoText}>{route.params.stdName}님 안녕하세요</Text>
          <Text style={[styles.userInfoText,{fontSize: 20}]}>소속팀: 1</Text>
        </View>

        {/*로그아웃버튼*/}
        <Pressable
          style={({ pressed }) => [
            {opacity: pressed ? 0.3 : 1},
            styles.outButton]}
          onPress={() => navigation.reset({
          index: 0,
          routes: [{name: "Login"}]})}
        >
          <AntDesign name="logout" size={30} color="white" />
        </Pressable>
      </View>

      <View style={styles.board}>
        <Text style={styles.boardText}>내 예약 간단하게 표시</Text>
      </View>

      <View style={styles.board}>
        <Text style={styles.boardText}>게시판 글 표시</Text>
      </View>
    </SafeAreaView>);
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  userInfo:{
    flex: 1,
    flexDirection: "row",
    backgroundColor: '#0A4A9B',
    margin: 20,
    borderRadius: 10,
    paddingHorizontal: 5,
    justifyContent:"space-around",
    alignItems: "center"
},
    userInfoText: {
      margin: 10,
      fontSize: 22,
      fontWeight: "bold",
      color: "white",
    },
    outButton: {
      backgroundColor: "#ffa600",
      borderRadius: 10,
      padding: 10,
    },
  board: {
    flex:2,
    backgroundColor: "white",
    margin: 20,
    marginTop: 0,
    borderColor: "#0A4A9B",
    borderWidth: 1,
    // borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
},
  boardText: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#0A4A9B",
},
  }
)