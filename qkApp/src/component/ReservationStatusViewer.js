import React, { useState, useEffect } from "react";
import axios from "axios";
import { View, Text, ScrollView, StyleSheet, TouchableHighlight } from "react-native";


// 예약 화면 달력에서 날짜를 선택한 뒤 아래에 해당일, 해당 구장의 예약 현황을 시간 목록으로 보여줄 컴포넌트
// 예약 현황을 해당 날짜와 구장에 맞게 가져와서 보여주기

// 뷰어 안에서 예약 현황을 보여주는 박스 컴포넌트
const ReservationBox = ({time}) => {
    return (
      <View style={styles.timeView}>
        <Text style={styles.Text}>{time}:00 ~ {time+1}:00</Text>
        <Text style={styles.Text}>  예약가능</Text>
      </View>
    );
}


const ReservationStatusViewer = ({date, ground}) => {
  const [reservationData, setReservationData] = useState([]);

  const ReservationView = ({date}) => {
    const SERVER_URL = "http://localhost:8080/Reservation/";
    useEffect(() => {
        const fetchData = async () => {
            try{
                const url = `${SERVER_URL}search?resdate=${date}`
                const response = await axios.post(url);
                if(response.data) {
                  setReservationData(response.data);
                } else {
                    console.log("데이터가 없습니다.");
                }
            } catch (error){
                console.error("예약 조회 에러:", error);
            }
        };
        fetchData();
    }, [date]);
  }

  ReservationView({date});
  console.log("reservationData: ", reservationData);

  return (
    <ScrollView style={{flex:1, marginTop:5 }}>
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={() => 'none'}
      >
        <ReservationBox time={9}/>

      </TouchableHighlight>
      <ReservationBox time={10}/>
      <ReservationBox time={11}/>
      <ReservationBox time={12}/>
      <ReservationBox time={13}/>
      <ReservationBox time={14}/>
      <ReservationBox time={15}/>
      <ReservationBox time={16}/>
      <ReservationBox time={17}/>

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
