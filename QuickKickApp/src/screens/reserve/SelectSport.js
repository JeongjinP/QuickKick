import React from "react";
import {View, Text, StyleSheet, Pressable, SafeAreaView} from "react-native";

function SelectSport ({navigation} ) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>종목선택</Text>
      <Pressable
        style={({pressed}) => [
          {backgroundColor: pressed ? '#33b249' : '#0A4A9B'},
          {borderColor: pressed ? 'white' : 'black'}, styles.board]}
        onPress={() => {navigation.navigate('FootballGround')}}
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
            {borderColor: pressed ? 'white' : 'black'}, styles.board]}
        onPress={() => {navigation.navigate('FutsalGround')}}
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
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#0A4A9B",
    margin: 30,
  },
  board: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 30,
    // marginTop: 0,
    marginBottom: 30,
    // backgroundColor: "#0A4A9B",
    // borderColor: "black",
    borderWidth: 1,
    borderRadius: 8,

  },
  Text: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
    },
});