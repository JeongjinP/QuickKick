import React from "react";
import {Text, View, StyleSheet, SafeAreaView, TouchableOpacity} from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';



function Home ({ navigation, route }) {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfo}>
        <View>
          <Text style={styles.userInfoText}>{route.params.userName}님 안녕하세요</Text>
          <Text style={[styles.userInfoText,{fontSize: 18}]}>현재 소속팀이 없습니다</Text>
        </View>
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
        <Text style={styles.boardText}>예약이 없습니다.</Text>
      </View>

      <View style={styles.board}>
        <Text style={styles.boardText}>용병 구인</Text>
      </View>
    </SafeAreaView>);
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
},
  userInfo:{
    flex: 1,
    flexDirection: "row",
    backgroundColor: '#0A4A9B',
    margin: 20,
    borderRadius: 10,
    paddingHorizontal: 10,
    justifyContent:"space-around",
    alignItems: "center"
},
    userInfoText: {
      margin: 5,
      fontSize: 20,
      fontWeight: "bold",
      color: "white",
    },
    outButton: {
      backgroundColor: "#ffa600",
      borderRadius: 10,
      padding: 10,
    },
  board: {
    flex:2,
    backgroundColor: "white",
    margin: 20,
    marginTop: 0,
    borderColor: "#0A4A9B",
    borderWidth: 1,
    // borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
},
  boardText: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#0A4A9B",
},
  }
)