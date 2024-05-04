import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import DropdownComponent from "../../component/DropdownComponent";
import CalendarComponent from "../../component/CalendarComponent";
import ReservationStatusViewer from "../../component/ReservationStatusViewer";
import GeneralHeader from "../../component/GeneralHeader";
import { useState } from 'react';

const useground = [
  { label: '동쪽구장', value: 'east' },
  { label: '서쪽구장', value: 'west' },
];

function ReservationSelect({ navigation }) {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedGround, setSelectedGround] = useState("");

  return (
    <SafeAreaView style={GeneralHeader.container}>
      <View style={GeneralHeader.header}>
        <Text style={GeneralHeader.title}>예약선택</Text>
      </View>
      <View>
        <DropdownComponent
          label={"구장"}
          holder={"구장을 선택해주세요."}
          data={useground}
          onValueChange={(value) => {
            setSelectedGround(value);
            console.log("selected ground", value);
          }} />
      </View>
      
      <View>
        <CalendarComponent onDateSelected={setSelectedDate}/>
      </View>
      <View style={styles.selectTime}>
          
          <ReservationStatusViewer/>
      </View>
      <View style={{flex: 1}}>
        <Pressable
          style={({ pressed }) => [
            {opacity: pressed ? 0.3 : 1},
            styles.reserveButton]}
          onPress={() => navigation.navigate('ReservationReport', {selectedDate, selectedGround})}
        >
          <Text style={styles.reserveButtonText}>신청서 작성</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}


export default ReservationSelect;

const styles = StyleSheet.create({
  selectTime: {
    flex: 2,
    marginHorizontal: 30,
    marginVertical: 20,
    borderTopWidth: 2,
    borderColor: "#0A4A9B",
  },
  reserveButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 30,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: "#0A4A9B"
  },
  reserveButtonText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
  },

});