import React, { useCallback, useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import {View, Text, StyleSheet, Pressable, SafeAreaView, BackHandler} from "react-native";
import GeneralHeader from "../component/GeneralHeader";
import { useFocusEffect } from "@react-navigation/native";
import { useStdData } from "../component/StdLoginContext";
import TodayComponent from "../component/TodayCompnent";
import useMyReservation from "../component/MyReservation";
import { ScrollView } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

function Home ({ navigation }) {
  const isFocused = useIsFocused();
  const { stdId } = useStdData();
  // const today = '2024-05-01';
  const [today, setToday] = useState(TodayComponent());

  const { reservationData, fetchReservationData } = useMyReservation();
  const { stdName, setStdName, teamName, setTeamName } = useStdData();

  useEffect(() => {
    if (isFocused) {
      setToday(TodayComponent());
      fetchReservationData(stdId, today);
    }
  }, [isFocused]);
  
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

  // 로그아웃 버튼 클릭시 ContextApi 에 저장된 사용자 이름, 네비게이터 초기화
  const logoutHandler = () => {
    setStdName(null);
    setTeamName(null);
    console.log("로그아웃: ",stdName, teamName);
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  }

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
          <Text style={styles.userInfoText}>{stdName}님 안녕하세요</Text>
          <Text style={[styles.userInfoText,{fontSize: 20}]}>소속팀:  {teamName}</Text>
        </View>

        {/*로그아웃버튼*/}
        <Pressable
          style={({ pressed }) => [
            {opacity: pressed ? 0.3 : 1},
            styles.outButton]}
          onPress={logoutHandler}
        >
          <MaterialIcons name="logout" size={30} color="#ffffff" />
          {/* <MaterialCommunityIcons name="logout" size={30} color="white" /> */}
        </Pressable>
      </View>

      <View style={styles.reserveBoard}>
        <ScrollView>
          {reservationData === null || reservationData.length === 0 ? (
            <View style={{alignItems: 'center'}}>
              <Text style={styles.boardText}>예약 내역이 없습니다</Text>
            </View>
          ) : (
            reservationData.map((item, index) => (
              <View key={index} style={styles.resBox}>
                <Text style={styles.outText}>예약 일자: <Text style={styles.boardText}>{item.resdate}</Text></Text>
                <Text style={styles.outText}>예약 시간: <Text style={styles.boardText}>{item.restime.slice(-2)}:00</Text></Text>
                <Text style={styles.outText}>이용 시간: <Text style={styles.boardText}>{item.usetime}시간</Text></Text>
                <Text style={styles.outText}>사용 구장: <Text style={styles.boardText}>{item.useground === 'east' ? ('동쪽구장') : ('서쪽구장')}</Text></Text>
              </View>
              ))
          )}
        </ScrollView>
      </View>

      <View style={styles.greetingBoard}>
        <Text style={styles.boardText}>게시판 글 표시</Text>
      </View>
    </SafeAreaView>);
}

export default Home;

const styles = StyleSheet.create({
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
  reserveBoard: {
    flex:3,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "start",
    backgroundColor: "white",
    margin: 20,
    marginTop: 0,
    marginBottom: 10,
    padding: 5,
    paddingHorizontal: 10,
    borderColor: "#0A4A9B",
    borderWidth: 1,

},  
  greetingBoard: {
    flex:1,
    flexDirection: "row",
    backgroundColor: "white",
    margin: 20,
    marginTop: 0,
    borderColor: "#0A4A9B",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
},
  boardText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#0A4A9B",
},  
  outText: {
    fontSize: 16,
    fontWeight: "",
    color: "black",
},
  resBox: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "start",
    backgroundColor: "white",
    margin: 5,
    marginHorizontal: 0,
    padding: 5,
    borderColor: "#0A4A9B",
    borderWidth: 1,
    borderRadius: 5,
}
  }
)