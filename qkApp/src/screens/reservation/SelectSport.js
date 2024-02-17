import React from "react";
import { View, Text, StyleSheet, Pressable, SafeAreaView } from "react-native";
import ReserveHeader from "./ReserveHeader";

function SelectSport ({ navigation }) {
  return (
    <SafeAreaView style={ReserveHeader.container}>
      <View style={ReserveHeader.header}>
        <Text style={ReserveHeader.title}>종목선택</Text>
      </View>
      <Pressable
        style={({ pressed }) => [
          {opacity: pressed ? 0.3 : 1},
          styles.board]}
        onPress={() => {navigation.navigate('ReservationSelect')}}
      >
        <Text style={styles.Text}>축구</Text>
      </Pressable>
      <Pressable
        style={({ pressed }) => [
          {opacity: pressed ? 0.3 : 1},
          styles.board, {marginTop: 0}]}

        onPress={() => {navigation.navigate('ReservationSelect')}}
      >
        <Text style={styles.Text}>풋살</Text>
      </Pressable>
    </SafeAreaView>
  )
}

export default SelectSport;

const styles = StyleSheet.create({
  board: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 30,
    marginVertical: 30,
    // backgroundColor: "#0A4A9B",
    // borderColor: "black",
    // borderWidth: 1,
    borderRadius: 30,
    backgroundColor: "#0a4a9b",
  },
  Text: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
    },
});