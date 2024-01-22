import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.directory}>홈</Text>
        <Text style={styles.directory}>알림</Text>
      </View>

      <View style={styles.body}>
        <View style={styles.userinfo}>
          <Text style={styles.info}>조성현</Text>
          <Text></Text>
          <Text style={styles.info}>소속팀: 사상 최강의 팀</Text>
          <Text style={styles.info}>10승 1패</Text>
        </View>
        <View style={styles.board}>
          <Text style={styles.boardDescription}>게시판</Text>
        </View>  
      </View>
      <View style={styles.footer}>
        <View style={styles.menu}><Text style={styles.menuText}>홈</Text></View>
        <View style={styles.menu}><Text style={styles.menuText}>예약</Text></View>
        <View style={styles.menu}><Text style={styles.menuText}>팀</Text></View>
        <View style={styles.menu}><Text style={styles.menuText}>내정보</Text></View>

      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "white",
  }, 
  header: {
    flex:1.2,
    backgroundColor: "#0A4A9B",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop:20,
  },
  directory: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom:-10,
  },
  body: {
    flex: 8,
    backgroundColor: "white",
  },
  userinfo:{
    flex: 1,
    backgroundColor: "#0A4A9B",
    margin: 30,
    borderRadius: 10,
    alignItems: "left",
  },
  info: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginLeft: 15,
    marginTop: 14,
  },
  board: {
    flex:3,
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
  footer:{
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#0A4A9B",
  },
  menu: {
    flex: 1,
    // borderColor: "white",
    // borderWidth:1,
    justifyContent: "center",
    alignItems: "center",
    margin: -1,
  },
  menuText: {
    marginBottom: 10,
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  

});
