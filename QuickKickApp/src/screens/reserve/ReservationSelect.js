import {Platform, SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import DropdownComponent from "../../component/DropdownComponent";
import CalendarComponent from "../../component/CalendarComponent";
import ReservationStatusViewer from "../../component/ReservationStatusViewer";

const data = [
  { label: '구장 1', value: '1' },
  { label: '구장 2', value: '2' },
  { label: '구장 3', value: '3' },
];
function ReservationSelect() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>예약</Text>
      </View>
      <View>
        <DropdownComponent
          label={"구장"}
          holder={"구장을 선택해주세요."}
          data = {data}
        />
      </View>
      <View>
        <CalendarComponent/>
      </View>
      <View style={styles.selectTime}>
          <ReservationStatusViewer/>
      </View>
    </SafeAreaView>
  );
}


export default ReservationSelect;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // 안드로이드 기기에선 SafeAreaView가 작동하지 않기 때문에 Platform을 사용하여 헤더 모양 만듬
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  title: {
    textAlign: "left",
    marginHorizontal: 30,
    marginVertical: 20,
    color: "#0A4A9B",
    fontSize: 30,
    fontWeight: "bold",
  },
  header: {
    borderBottomWidth: 2,
    borderColor: "#0A4A9B",
  },
  selectTime: {
    flex: 1,
    marginHorizontal: 30,
    marginVertical: 20,
    borderTopWidth: 2,
    borderColor: "#0A4A9B",
  }

});