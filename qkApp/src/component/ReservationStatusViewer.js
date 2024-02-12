import React from "react";
import {View, Text, ScrollView, StyleSheet} from "react-native";

// 예약 화면 달력에서 날짜를 선택한 뒤 아래에 해당일, 해당 구장의 예약 현황을 시간 목록으로 보여줄 컴포넌트
// 예약 현황을 해당 날짜와 구장에 맞게 가져와서 보여주기

// 뷰어 안에서 예약 현황을 보여주는 박스 컴포넌트
const ReservationBox = () => {
    return (
      <View style={styles.timeView}>
        <Text style={styles.Text}>XX:00 ~ XX:00</Text>
        <Text style={styles.Text}>예약가능</Text>
      </View>
    );
}

const ReservationStatusViewer = () => {
  return (
    <ScrollView style={{flex:1, marginTop:5 }}>
      <ReservationBox/>
      <ReservationBox/>
      <ReservationBox/>
    </ScrollView>
  );
}

export default ReservationStatusViewer;


const styles = StyleSheet.create({
    timeView: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      marginBottom: 5,
      padding: 5,
      borderBottomWidth: 1,
      borderColor: "lightgray"
    },
    Text: {
      color: "black",
      fontSize: 16,
    },
})
