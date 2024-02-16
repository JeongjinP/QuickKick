import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import ReserveHeader from "./ReserveHeader";

// 신청자명, 건물명, 전화번호, 운동장, 이메일, 신청일자, 소속(단과대), 사용인원, 예약시간,
// 사용목적(입력), 사용내용(입력), 계획서첨부(?)

function ReservationReport () {
  return (
    <SafeAreaView style={ReserveHeader.container}>
      <View style={ReserveHeader.header}>
        <Text style={ReserveHeader.title}>예약 서류 작성</Text>
      </View>
    </SafeAreaView>
  );
}

export default ReservationReport;

const styles = StyleSheet.create({

})