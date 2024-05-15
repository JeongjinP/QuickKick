import {Text, StyleSheet, View, Pressable } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useNavigation } from "@react-navigation/native";

function BoardHeader() {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <View style={{flex:1}}>
        <Text style={{flex:1}}></Text>
      </View>
      <View style={{flex:1, alignItems:'center'}}>
       <Text style={styles.title}>게시판</Text>
      </View>
      <View style={styles.writeButton}>
        <Pressable         
          style={({ pressed }) => (
          {opacity: pressed ? 0.3 : 1})}
          onPress={() => navigation.navigate('WritePage')}>
          <MaterialCommunityIcons name="pencil" size={22} color="#0A4A9B" style={{marginRight:15}} />
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flex:1,
    flexDirection: "row",
    // justifyContent: "center",
    // alignItems: "center",
    // borderBottomWidth: 1,
    borderColor: "lightgray",
    paddingVertical: 10,
  },
  title: {
    flex:1,
    // marginHorizontal: 30,
    // marginTop: 5,
    // marginBottom: 10,
    color: "#0A4A9B",
    fontSize: 18,
    fontWeight: '600',
  },
  writeButton: {
    flex:1,
    // paddingRight: 10,
    alignItems: 'space-between',
    justifyContent: 'top',
  }
})

export default BoardHeader;

