import {Platform, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import DropdownComponent from "../../component/DropdownComponent";
import CalendarComponent from "../../component/CalendarComponent";
import ReservationStatusViewer from "../../component/ReservationStatusViewer";
import ReserveHeader from "./ReserveHeader";

const data = [
  { label: '구장 1', value: '1' },
  { label: '구장 2', value: '2' },
  { label: '구장 3', value: '3' },
];
function ReservationSelect() {
  return (
    <SafeAreaView style={ReserveHeader.container}>
      <View style={ReserveHeader.header}>
        <Text style={ReserveHeader.title}>예약</Text>
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
  selectTime: {
    flex: 1,
    marginHorizontal: 30,
    marginVertical: 20,
    borderTopWidth: 2,
    borderColor: "#0A4A9B",
  }

});