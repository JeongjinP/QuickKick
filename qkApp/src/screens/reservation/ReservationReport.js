import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, TextInput, Pressable, Alert } from "react-native";
import GeneralHeader from "../../component/GeneralHeader";
import { useStdData } from "../../component/StdLoginContext";
import axios from "axios";

// selectedSport 0 === 풋살, 1 === 축구
// 풋살 east, west = 동쪽 서쪽구장, 축구 east = 잔디구장, west = 마사토구장

function ReservationReport ({ navigation, route }) {
  const { stdName, teamName, stdId } = useStdData();
  const { selectedDate, selectedGround, selectedHour } = route.params;
  const selectedSport = route.params.selectedSport;
  const [useTime, setUseTime] = useState('');
  let groundName;
  if (selectedSport === 0) {
    groundName = { east: '동쪽구장', west: '서쪽구장' };
  } else {
    groundName = { east: '잔디구장', west: '마사토구장' };
  }

  // console.log("date: ",selectedDate);
  // console.log("ground: ", selectedGround);
  // console.log("sport: ", selectedSport);

  // 서버로 post요청 하는 부분
  const SERVER_URL = "http://localhost:8080/Reservation/";
  const ReportData = async () => {
    const url = `${SERVER_URL}save?resdate=${selectedDate}&restime=${selectedHour}&usetime=${useTime}&groundtype=${selectedSport}&useground=${selectedGround}&responsibility=${stdId}`;
  
    try {
      const response = await axios.post(url);
  
      if (response.status !== 200) {
        throw new Error('HTTP error ' + response.status);
      }
      Alert.alert('예약 완료', '예약이 성공적으로 완료되었습니다!', [{ text: '좋아요!' }]);
    } catch (error) {
      console.error('오류가 발생했습니다', error);
    }
  };

  return (
    <SafeAreaView style={GeneralHeader.container}>
      <View style={GeneralHeader.header}>
        <Text style={GeneralHeader.title}>예약 서류 작성</Text>
      </View>

      <View style={styles.reportBox}>
        <Text>신청자명: </Text>
        <TextInput
          placeholder={"신청자명"}
          style={styles.reportInput}
          value={stdName}
        />
      </View>

      <View style={styles.reportBox}>
        <Text>팀: </Text>
        <TextInput
          placeholder={"팀"}
          style={styles.reportInput}
          value={teamName}
        />

      </View>
      <View style={styles.reportBox}>
        <Text>선택구장: </Text>
        <TextInput
          placeholder={"선택구장"}
          style={styles.reportInput}
          value={groundName[selectedGround]}
        />
      </View>
      <View style={styles.reportBox}>
        <Text>학번: </Text>
        <TextInput
          placeholder={"학번"}
          style={styles.reportInput}
          value={stdId}
        />
      </View>
      <View style={styles.reportBox}>
        <Text>신청일자: </Text>
        <TextInput
          placeholder={"신청일자"}
          style={styles.reportInput}
          value={selectedDate}
        />
      </View>

      <View style={styles.reportBox}>
        <Text>예약시간: </Text>
        <TextInput
          placeholder={"예약시간"}
          style={styles.reportInput}
          value={selectedHour.toString() + ":00"}
        />
      </View>
      <View style={styles.reportBox}>
        <Text>사용시간: </Text>
        <TextInput
          placeholder={"사용시간"}
          style={styles.reportInput}
          keyboardType='numeric'
          onChangeText={(text) => setUseTime(text)}
        />
      </View>
      {/* <View style={styles.reportBox}>
        <Text>사용목적: </Text>
        <TextInput
          style={styles.reportInput}
        />
      </View> */}
      {/* <View style={styles.reportBox}>
        <Text>사용내용: </Text>
        <TextInput
          style={styles.reportInput}
        />
      </View> */}

      <Pressable
        style={({ pressed }) => [
          {opacity: pressed ? 0.3 : 1},
          styles.reserveButton]}
        onPress={async () => {
          await ReportData();
          navigation.navigate('ReservationMain');
        }}
      >
        <Text style={styles.reserveButtonText}>신청서 작성</Text>
      </Pressable>
    </SafeAreaView>
  );
}

export default ReservationReport;

const styles = StyleSheet.create({
  reportBox: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    borderColor: "#0A4A9B",
    borderBottomWidth: 1,
    marginBottom: 1,
    paddingLeft: 10,
  },
  reportInput: {
    fontSize: 18,
    padding: 0,
  },
  reserveButton: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 30,
    marginVertical: 30,
    // marginBottom: 20,
    borderRadius: 10,
    backgroundColor: "#0A4A9B"
  },
  reserveButtonText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
  },
})