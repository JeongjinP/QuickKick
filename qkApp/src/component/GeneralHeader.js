import { StyleSheet, Platform } from "react-native";

const GeneralHeader = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // 안드로이드 기기에선 SafeAreaView 가 작동하지 않아서
    // Platform.OS를 사용하여 헤더 모양 만들어줬음
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "lightgray",
    paddingVertical: 10,
  },
  title: {
    textAlign: "left",
    marginHorizontal: 30,
    // marginTop: 5,
    // marginBottom: 10,
    color: "#0A4A9B",
    fontSize: 18,
    fontWeight: '600',
  },
});

export default GeneralHeader;