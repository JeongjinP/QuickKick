import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import { View, Text, StyleSheet, Pressable, SafeAreaView } from "react-native";
import GeneralHeader from "../../component/GeneralHeader";
import { useStdData } from "../../component/StdLoginContext";
import TodayComponent from "../../component/TodayCompnent";
import useMyReservation from "../../component/MyReservation";
import { useFocusEffect } from "@react-navigation/native";
import { useIsFocused } from "@react-navigation/native";



function ReservationMain({ navigation }){
  const { stdId } = useStdData();
  const isFocused = useIsFocused();
  const [today, setToday] = useState(TodayComponent());
  const { reservationData, fetchReservationData } = useMyReservation();
  // const today = '2024-05-14';
  console.log("stdId: ",stdId);
  console.log("today: ",today);

  // const reservationData = useMyReservation(stdId, today);

  useEffect(() => {
    if (isFocused) {
      setToday(TodayComponent());
      fetchReservationData(stdId, today);
    }
  }, [isFocused]);
  
  

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
      <View style={styles.board}>
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
  board: {
    flex: 6,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "start",
    marginHorizontal: 20,
    marginVertical: 20,
    backgroundColor: "white",
    borderColor: "#0A4A9B",
    borderWidth: 1,
    // borderRadius: 30,
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