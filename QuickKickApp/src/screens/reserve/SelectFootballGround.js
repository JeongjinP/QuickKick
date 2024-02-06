import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import DropdownComponent from "../../component/DropdownComponent";
import CalendarComponent from "../../component/CalendarComponent";

const data = [
  { label: '구장 1', value: '1' },
  { label: '구장 2', value: '2' },
  { label: '구장 3', value: '3' },
];
function SelectFootballGround() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>예약</Text>
      <View style={styles.dropdownbox}>
        <DropdownComponent
          label={"구장"}
          holder={"구장을 선택해주세요."}
          data = {data}
        />
      </View>
      <View>
        <CalendarComponent/>
      </View>
    </SafeAreaView>
  );
}


export default SelectFootballGround;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  title: {
    textAlign: "left",
    marginHorizontal: 30,
    marginVertical: 20,
    color: "#0A4A9B",
    fontSize: 30,
    fontWeight: "bold",

  },
  dropdownbox: {
    borderTopWidth: 1,
    borderColor: "#0A4A9B",
  },

});