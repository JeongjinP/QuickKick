import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import DropdownComponent from "../../component/DropdownComponent";

const data = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
];
function SelectFootballGround() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>구장선택</Text>
      <View>
        <DropdownComponent
          label={"구장"}
          holder={"구장을 선택해주세요."}
          data = {data}
        />
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
    fontSize: 30,
    fontWeight: "bold",
    color: "#0A4A9B",
    margin: 30,
  },

});