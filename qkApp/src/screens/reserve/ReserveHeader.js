import {Platform, StyleSheet} from "react-native";

const ReserveHeader = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // 안드로이드 기기에선 SafeAreaView 가 작동하지 않기 때문에 Platform 을 사용하여 헤더 모양 만듬
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  header: {
    borderBottomWidth: 2,
    borderColor: "#0A4A9B",
  },
  title: {
    textAlign: "left",
    marginHorizontal: 30,
    marginVertical: 20,
    color: "#0A4A9B",
    fontSize: 28,
    fontWeight: "bold",
  },
});

export default ReserveHeader;