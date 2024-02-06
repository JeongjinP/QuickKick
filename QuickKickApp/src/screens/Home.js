import React from "react";
import {Text, View, StyleSheet, SafeAreaView, TouchableOpacity} from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';



function Home ({ navigation, route }) {

  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.userinfo}>
        <Text style={styles.infoText}>{route.params.user}님 안녕하세요</Text>
        <TouchableOpacity
          onPress={() => navigation.reset({
          index: 0,
          routes: [{name: "Login"}]})} style={styles.outButton}
        >
          <AntDesign name="logout" size={30} color="white" />
          {/*<Text style={styles.outButtonText}>로그아웃</Text>*/}
        </TouchableOpacity>
      </View>

      <View style={styles.board}>
        <Text style={styles.boardDescription}>예약이 없습니다.</Text>
      </View>

      <View style={styles.board}>
        <Text style={styles.boardDescription}>용병 구인</Text>
      </View>
    </SafeAreaView>);
}

export default Home;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "white",
},
  userinfo:{
    flex: 1,
    flexDirection: "row",
    backgroundColor: '#0A4A9B',
    margin: 30,
    borderRadius: 10,
    paddingHorizontal: 20,
    justifyContent:"space-around",
    alignItems: "center"
},
  outButton: {
    backgroundColor: "#ffbd03",
    borderRadius: 10,
    padding: 10,
  },
  // outButtonText: {
  //   fontSize: 20,
  //   fontWeight: "bold",
  //   color: "white",
// },
  infoText: {
    margin: 10,
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