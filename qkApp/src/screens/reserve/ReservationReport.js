import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import ReserveHeader from "./ReserveHeader";


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