import React from "react";
import { View, Text, StyleSheet, SafeAreaView, TextInput, Pressable } from "react-native";
import GeneralHeader from "../../component/GeneralHeader";

// 신청자명, 건물명, 전화번호, 운동장, 이메일, 신청일자, 소속(단과대), 사용인원, 예약시간,
// 사용목적(입력), 사용내용(입력), 계획서첨부(???)

// 현재 상황에서는 버튼을 눌렀을 때 홈으로 이동하면 홈 화면 내 정보에 표시할 userName 파라미터가 없어서
// 오류 발생해 예약 메인화면으로 이동하게 해 둠

function ReservationReport ({ navigation }) {
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
          value={"이근찬"}
        />
      </View>

      <View style={styles.reportBox}>
        <Text>소속: </Text>
        <TextInput
          placeholder={"소속"}
          style={styles.reportInput}
          value={"글로벌정경대학 무역학부 (야)"}
        />

      </View>
      <View style={styles.reportBox}>
        <Text>선택구장: </Text>
        <TextInput
          placeholder={"선택구장"}
          style={styles.reportInput}
          value={"제1구장"}
        />
      </View>
      <View style={styles.reportBox}>
        <Text>전화번호: </Text>
        <TextInput
          placeholder={"전화번호"}
          style={styles.reportInput}
          value={"010-9345-9395"}
        />
      </View>
      <View style={styles.reportBox}>
        <Text>신청일자: </Text>
        <TextInput
          placeholder={"신청일자"}
          style={styles.reportInput}
          value={"2024-02-20"}
        />
      </View>

      <View style={styles.reportBox}>
        <Text>예약시간: </Text>
        <TextInput
          placeholder={"예약시간"}
          style={styles.reportInput}
          value={"09:00 ~ 12:00"}
        />
      </View>
      <View style={styles.reportBox}>
        <Text>사용인원: </Text>
        <TextInput
          placeholder={"사용인원"}
          style={styles.reportInput}
        />
      </View>
      <View style={styles.reportBox}>
        <Text>사용목적: </Text>
        <TextInput
          style={styles.reportInput}
        />
      </View>
      <View style={styles.reportBox}>
        <Text>사용내용: </Text>
        <TextInput
          style={styles.reportInput}
        />
      </View>

      {/*이거 뭐지?*/}
      <View style={styles.reportBox}>
        <Text>계획서첨부: </Text>
        <TextInput
          placeholder={"계획서첨부"}
          style={styles.reportInput}
        />
      </View>
      <Pressable
        style={({ pressed }) => [
          {opacity: pressed ? 0.3 : 1},
          styles.reserveButton]}
        onPress={() => navigation.navigate('ReservationMain')}
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