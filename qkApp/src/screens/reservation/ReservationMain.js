import React from "react";
import { View, Text, StyleSheet, Pressable, SafeAreaView } from "react-native";
import GeneralHeader from "../../component/GeneralHeader";

function ReservationMain({ navigation }){
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
        <Text style={styles.boardText}>예약 상세 정보 표시</Text>
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
    alignItems: "center",
    marginHorizontal: 20,
    marginVertical: 20,
    backgroundColor: "white",
    borderColor: "#0A4A9B",
    borderWidth: 1,
    // borderRadius: 30,
  },
  boardText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#0A4A9B",
  },
})