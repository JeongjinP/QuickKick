import React from "react";
import { Pressable, SafeAreaView, View, Text, StyleSheet } from "react-native";
import ReserveHeader from "./ReserveHeader";

function ReservationMain({navigation}){
  return (
    <SafeAreaView style={ReserveHeader.container}>
      <View style={ReserveHeader.header}>
        <Text style={ReserveHeader.title}>예약</Text>
      </View>
      <Pressable
        style={({pressed}) => [
          {backgroundColor: pressed ? '#33b249' : '#0A4A9B'},
          {borderColor: pressed ? 'white' : 'black'}, styles.reserveButton]}
        onPress={() => navigation.navigate('SelectSport')}
      >
        <Text style={styles.reserveButtonText}>예약하기</Text>
      </Pressable>
      <View style={styles.board}>
        <Text style={styles.boardText}>예약 상세 정보 창</Text>
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