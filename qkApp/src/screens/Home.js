import React, { useCallback, useEffect, useState, useMemo } from "react";
import { Alert, View, Text, StyleSheet, Pressable, SafeAreaView, ScrollView, BackHandler} from "react-native";
import { useIsFocused, useFocusEffect } from "@react-navigation/native";
import GeneralHeader from "../component/GeneralHeader";
import { useStdData } from "../component/StdLoginContext";
import TodayComponent from "../component/TodayCompnent";
import useMyReservation from "../component/useMyReservation";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import axios from "axios";
// import ReservationStack from "../navigation/ReservationStack";
// import ReservationMain from "./reservation/ReservationMain";

async function getBoardList() {
  try {
    const response = await axios.get("http://localhost:8070/boardlist");
    // console.log("게시글 조회 결과:", response.data);
    const sortedData = response.data.sort((a, b) => new Date(b.createDate) - new Date(a.createDate));
    return sortedData;
  } catch (error) {
    console.error("게시글 조회 에러:", error);  
  } 
}


function Home ({ navigation }) {
  const isFocused = useIsFocused();
  // const today = '2024-05-01';
  const [today, setToday] = useState(TodayComponent());
  const { reservationData, fetchReservationData } = useMyReservation();
  const { stdId, setStdId, stdName, setStdName, teamName, setTeamName } = useStdData();
  const [noReservation, setNoReservation] = useState(null);
  const [boardList, setBoardList] = useState([]);


  // 게시판 표시용 데이터 가져오기
  useEffect(() => {
    if (isFocused) {
      getBoardList().then((data) => setBoardList(data));
    }
  }, [isFocused])

  useEffect(() => {
    if (reservationData === null || reservationData.length === 0) {
      setNoReservation(true);
    } else {
      setNoReservation(false);
    }
  }, [reservationData]);
  
  useEffect(() => {
    if (isFocused) {
      setToday(TodayComponent());
      fetchReservationData(stdId, today);
    }
  }, [isFocused]);
  
  // 안드로이드 뒤로가기 버튼 작동 방지 코드
  // useEffect 대신 useFocusEffect 사용하는것은 스택 네비게이터 구조상
  // 다른 화면 이동해도 홈 화면이 뒤에 유지되어 백 핸들러가 언마운트 되지 않기 때문에
  // 홈 화면에 포커스가 있을때만 기능이 실행되게 함
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

  // 로그아웃 버튼 클릭시 ContextApi 에 저장된 사용자 이름, 네비게이터 초기화하는 함수
  const logoutHandler = () => {
    Alert.alert("","로그아웃 하시겠습니까?",
    [{text: "네", onPress: () =>{ 
      setStdName(null);
      setTeamName(null);
      setStdId(null);
      console.log("로그아웃: ",stdName, teamName)
      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      });
    },},
    {text: "아니요"}
  ]);
};

// 예약창 스타일 예약상태 참조용으로 뺌 (noReservation ? "center" : "start")
// 스타일 쪽에 두면 noReservation 값에 따라 다른 스타일을 적용할 수 없어서 함수로 빼둠
const getReserveBoardStyle = (noReservation) => ({
  flex:3,
  flexDirection: "row",
  justifyContent: "center",
  alignItems: noReservation ? "center" : "start",
  backgroundColor: "white",
  margin: 20,
  marginTop: 0,
  marginBottom: 10,
  padding: 5,
  paddingHorizontal: 10,
  borderColor: "#0A4A9B",
  borderWidth: 1,
});

const reservationItems = useMemo(() => reservationData.map((item, index) => {
  const key = `${item.resdate}-${item.resnum}`;
  // console.log('Key:', key);
  return (
    <Pressable key={key} style={({ pressed }) => [
      {opacity: pressed ? 0.6 : 1},
      styles.resBox]}
      onPress={() => navigation.navigate('예약', { screen:'ReservationMain' })}>
      <Text style={styles.outText}>예약 일자: <Text style={styles.boardText}>{item.resdate}</Text></Text>
      <Text style={styles.outText}>예약 시간: <Text style={styles.boardText}>{item.restime.slice(-2)}:00</Text></Text>
      <Text style={styles.outText}>이용 시간: <Text style={styles.boardText}>{item.usetime}시간</Text></Text>
    </Pressable>
  );
}), [reservationData]);

const boardItems = useMemo(() => boardList.map((item, index) => {
  if (index > 3) { 
    return null;
  }

  const key = `${item.id}-${item.title}`;
  return (
    <View style={styles.boardPreview} key={key}>
      <Pressable  style={({ pressed }) => [
        {opacity: pressed ? 0.6 : 1},
      ]}
        onPress={() => navigation.navigate('게시판', {
        screen: 'PostPage',
        params: {id: item.id, title: item.title, content: item.content, writer: item.writer, tag: item.category, time: item.createDate}})}>             
        <Text style={styles.boardPreviewText} numberOfLines={1} ellipsizeMode='tail'>‣  {item.title}</Text>          
      </Pressable >
    </View>
);
}).filter(Boolean), [boardList]);

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

      <View style={getReserveBoardStyle(noReservation)}>
          <ScrollView>
            {reservationData === null || reservationData.length === 0 ? (
              <View style={{alignItems: 'center'}}>
                <Text style={styles.boardText}>예약 내역이 없습니다</Text>
              </View>
            ) : reservationItems}
        </ScrollView>
      </View>

      <View style={styles.postBoard}>
        <ScrollView>
          {boardList === null || boardList.length === 0 ? (
            <View style={{alignItems: 'center', justifyContent:'center'}}>
              <Text style={styles.boardText}>게시글 내역이 없습니다</Text>
            </View>
            ): boardItems
          }
        </ScrollView>
      </View>
    </SafeAreaView>
  );
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
    marginRight: 10,
  },
  postBoard: {
    flex:2,
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
  },
  boardPreview: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 5,
    borderColor: "#0A4A9B",
    borderBottomWidth: 1,
    borderRadius: 5,
    backgroundColor: "white",
    marginVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },  
  boardPreviewText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0A4A9B",
  },  
})