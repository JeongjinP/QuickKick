import {Text, StyleSheet, View, Pressable } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';

function PostHeader() {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <View style={{flex:1}}>
        <Pressable         
          style={({ pressed }) => (
          {opacity: pressed ? 0.3 : 1})}
          onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={24} color="#0a4a9b" style={{marginLeft:15}}/>       
        </Pressable>
      </View>
      <View style={{flex:1, alignItems:'center'}}>
       <Text style={styles.title}>게시판</Text>
      </View>
      <View style={{flex:1}}>
        <Text style={{flex:1}}></Text>
      </View>
    </View>
  )
}

export default PostHeader;

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


