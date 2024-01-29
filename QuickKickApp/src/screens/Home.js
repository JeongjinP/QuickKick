import React from "react";
import {Text, View, StyleSheet} from "react-native";

function Home () {
  return ( <View style={styles.body}>
    <View style={styles.userinfo}>
      <Text style={styles.info}>로그인해주세요</Text>


    </View>
    <View style={styles.board}>
      <Text style={styles.boardDescription}>예약이 없습니다.</Text>
    </View>
    <View style={styles.board}>
      <Text style={styles.boardDescription}>용병 급구</Text>
    </View>
  </View>);
}

export default Home;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "white",
},
  userinfo:{
    flex: 1,
    backgroundColor: '#0A4A9B',
    margin: 30,
    borderRadius: 10,
    justifyContent:"center",
    alignItems: "center"

},
  info: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
},
  board: {
    flex:2,
    backgroundColor: "white",
    margin: 30,
    marginTop: 0,
    borderColor: "#0A4A9B",
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
},
  boardDescription: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#0A4A9B",
},
  }
)