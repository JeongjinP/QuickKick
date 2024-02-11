import React from "react";
import { View, Text, StyleSheet, Pressable, Platform, SafeAreaView } from "react-native";
import ReserveHeader from "./ReserveHeader";

function SelectSport ({navigation} ) {
  return (
    <SafeAreaView style={ReserveHeader.container}>
      <View style={ReserveHeader.header}>
        <Text style={ReserveHeader.title}>종목선택</Text>
      </View>
      <Pressable
        style={({pressed}) => [
          {backgroundColor: pressed ? '#33b249' : '#0A4A9B'},
          {borderColor: pressed ? 'white' : 'black'}, styles.board]}
        onPress={() => {navigation.navigate('ReservationSelect')}}
      >
        {({ pressed }) => (
            <Text style={styles.Text}>
                {pressed ? 'Play!' : '축구'}
            </Text>
        )}
      </Pressable>
      <Pressable
        style={({pressed}) => [
            {backgroundColor: pressed ? '#33b249' : '#0A4A9B'},
            {borderColor: pressed ? 'white' : 'black'}, styles.board, {marginTop: 0}]}
        onPress={() => {navigation.navigate('ReservationSelect')}}
      >
        {({ pressed }) => (
            <Text style={styles.Text}>
                {pressed ? 'Play!' : '풋살'}
            </Text>
        )}
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
    marginVertical: 20,
    // backgroundColor: "#0A4A9B",
    // borderColor: "black",
    // borderWidth: 1,
    borderRadius: 45,
  },
  Text: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
    },
});