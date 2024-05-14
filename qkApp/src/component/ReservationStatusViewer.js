import React, { useState, useEffect } from "react";
import axios from "axios";
import { View, Text, ScrollView, StyleSheet, TouchableHighlight } from "react-native";


// 예약 화면 달력에서 날짜를 선택한 뒤 아래에 해당일, 해당 구장의 예약 현황을 시간 목록으로 보여줄 컴포넌트
// 예약 현황을 해당 날짜와 구장에 맞게 가져와서 보여주기

// 뷰어 안에서 예약 현황을 보여주는 박스 컴포넌트
// !!! 시간대 한자리일 경우 0 붙여주는데 폰트가 고정폭이 아니여서 틀어지므로 수정 필요
const ReservationBox = ({time, isReserved, isSelected}) => {
  const formattedTime = String(time).padStart(2, '0');
  const nextHour = String(time + 1).padStart(2, '0');
  const reservationStatus = isReserved ? "예약 중" : "예약 가능";
  const textColor = isSelected ? '#0a4a9b' : '#000000';
  return (
    <View style={styles.timeView}>
      <Text style={{...styles.Text, color: textColor}}>{formattedTime}:00 ~ {nextHour}:00</Text>
      <Text style={{...styles.Text, color: textColor}}> {reservationStatus}</Text>
    </View>
  );
}

const ReservationStatusViewer = ({date, ground, onHourSelected, selectedSport}) => {
  const [reservationData, setReservationData] = useState([]);
  const [selectedHour, setSelectedHour] = useState(null);
  console.log("스테이터스뷰어 : ", date, ground, selectedSport);

  // 종목 선택에 따라 예약을 보기 위한 groundType 설정 (풋살 = false, 축구 = true)
  const groundType = selectedSport === 0 ? false : true;
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

  // ReservationView({date});

  console.log("reservationData: ", reservationData);
  const hours = Array.from({length: 10}, (_, i) => i + 9);
  return (
    // 예약중인 시간대 보여주는 ScrollView
    <ScrollView style={{ flex:1, marginTop:3 }}>
      {hours.map((hour, index) => {
        const isReserved = reservationData.some(reservation => {
          const reservationStart = parseInt(reservation.restime.split(":")[2]);
          const reservationEnd = reservationStart + reservation.usetime;
          return hour >= reservationStart && hour < reservationEnd && reservation.useground === ground && reservation.groundtype === groundType;
        });
        const isSelected = hour === selectedHour;
        return (
          <TouchableHighlight
            key={index}
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => {
              setSelectedHour(hour); 
              onHourSelected(hour);
            }}
          >
            <ReservationBox time={hour} isReserved={isReserved} isSelected={isSelected} />
          </TouchableHighlight>
        );
      })}
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
      borderColor: "lightgray",
    },
    Text: {
      color: "black",
      fontSize: 16,
    },
})
