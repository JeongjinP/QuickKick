import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable, SafeAreaView, ScrollView } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import GeneralHeader from "../../component/GeneralHeader";
import { useStdData } from "../../component/StdLoginContext";
import TodayComponent from "../../component/TodayCompnent";
import useMyReservation from "../../component/useMyReservation";


function ReservationMain({ navigation }){
  // 예약 조회를 위한 useMyReservation 훅 사용
  // 학번 정보는 useStdData 훅을 사용하여 가져옴
  // 화면 포커스 여부를 확인하기 위해 useIsFocused 훅 사용 -> 포커스시 예약 데이터 업데이트해 조회
  // 오늘 날짜를 가져오기 위해 TodayComponent 함수 사용
  const { stdId } = useStdData();
  const isFocused = useIsFocused();
  const [today, setToday] = useState(TodayComponent());
  const { reservationData, fetchReservationData } = useMyReservation();
  // console.log("stdId: ",stdId);
  // console.log("today: ",today);

  useEffect(() => {
    if (isFocused) {
      setToday(TodayComponent());
      fetchReservationData(stdId, today);
    }
  }, [isFocused]);

  // console.log("reservationData: ",reservationData.useground);

  const renderReservation = (item, index) => {
    const sportType = (item.groundtype === 0 ? '풋살' : '축구');
    let groundName;
    if (item.groundtype === false) {
      groundName = (item.useground === 'east' ? '동쪽구장' : '서쪽구장');
    } else {
      groundName = (item.useground === "east" ? '잔디구장' : '마사토구장')
    }
  
    return (
      <View key={index} style={styles.resBox}>
        <Text style={styles.outText}>예약 일자: <Text style={styles.boardText}>{item.resdate}</Text></Text>
        <Text style={styles.outText}>예약 시간: <Text style={styles.boardText}>{item.restime.slice(-2)}:00</Text></Text>
        <Text style={styles.outText}>이용 시간: <Text style={styles.boardText}>{item.usetime}시간</Text></Text>
        <Text style={styles.outText}>선택 종목: <Text style={styles.boardText}>{sportType}</Text></Text>
        <Text style={styles.outText}>사용 구장: <Text style={styles.boardText}>{groundName}</Text></Text>
      </View>
    )
  }

  // 예약 있을땐 상단 정렬, 없을땐 중앙 정렬하기 위한 코드
  const [noReservation, setNoReservation] = useState(null);

  useEffect(() => {
    if (reservationData === null || reservationData.length === 0) {
      setNoReservation(true);
    } else {
      setNoReservation(false);
    }
  }, [reservationData]);

  const getReserveBoardStyle = (noReservation) => ({
      flex: 6,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: noReservation ? "center" : "start",
      marginHorizontal: 20,
      marginVertical: 20,
      backgroundColor: "white",
      borderColor: "#0A4A9B",
      borderWidth: 1,
  });
  // console.log("sportType: ",sportType);
  // console.log("reservationData: ",reservationData);

  return (
    
    <SafeAreaView style={GeneralHeader.container}>
      <View style={GeneralHeader.header}>
        <Text style={GeneralHeader.title}>예약</Text>
      </View>
      <Pressable
        style={({ pressed }) => [
          {opacity: pressed ? 0.3 : 1},
          styles.reserveButton]}
        onPress={() => navigation.navigate('SelectSport')}
      >
        <Text style={styles.reserveButtonText}>예약하기</Text>
      </Pressable>
      <View style={getReserveBoardStyle(noReservation)}>
      <ScrollView>
        {reservationData === null || reservationData.length === 0 ? (
          <View style={{alignItems: 'center'}}>
            <Text style={styles.boardText}>예약 내역이 없습니다</Text>
          </View>
        ) : (
          reservationData.map(renderReservation)
        )}
      </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default ReservationMain;

const styles = StyleSheet.create({
  reserveButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: "#0A4A9B"
  },
  reserveButtonText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
  },
  boardText: {
    fontSize: 18,
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
    margin: 5,
    marginHorizontal : 10,
    padding: 5,
    borderColor: "#0A4A9B",
    borderWidth: 1,
    borderRadius: 5,
  }
})