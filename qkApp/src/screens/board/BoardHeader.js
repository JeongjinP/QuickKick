import {Text, StyleSheet, View, Pressable } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useNavigation } from "@react-navigation/native";

function BoardHeader({ selectedTag ,setSelectedTag }) {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <View style={{flex:1, flexDirection:'row'}}>
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
          onPress={() => navigation.navigate('WritePage', {Tag: selectedTag})}>
          <MaterialCommunityIcons name="pencil" size={22} color="#0A4A9B" style={{marginRight:15}} />
        </Pressable>
      </View>
      </View>
      <View style={styles.buttonBox}>

        <Pressable 
          style={({ pressed }) => [
            {opacity: pressed ? 0.6 : 1},
            styles.tagButton,
            {backgroundColor: selectedTag === '잡담' ? '#0A4A9B' : 'white'},
          ]}
          onPress={() => {
            if (selectedTag === '잡담') {
              setSelectedTag('');
              console.log('태그 초기화');
            } else {
              setSelectedTag('잡담');
              console.log('잡담 선택');
            }
          }}>      
          <Text style={
            {color: selectedTag === '잡담' ? 'white' : 'dimgrey',
            fontWeight: selectedTag === '잡담' ? 'bold' : 'normal'
            }}>잡담</Text>        
          </Pressable>
        <Pressable 
          style={({ pressed }) => [
            {opacity: pressed ? 0.6 : 1},
            styles.tagButton,
            {backgroundColor: selectedTag === '인원모집' ? '#0A4A9B' : 'white'},
        ]} 
          onPress={() => {
            if (selectedTag === '인원모집') {
            setSelectedTag('');
            console.log('태그 초기화');
          } else {
            setSelectedTag('인원모집');
            console.log('인원모집 선택');
          }
          }}>      
          <Text style={
            {color: selectedTag === '인원모집' ? 'white' : 'dimgrey',
            fontWeight: selectedTag === '인원모집' ? 'bold' : 'normal'
            }}>인원모집</Text>
        </Pressable>       
        <Pressable 
          style={({ pressed }) => [
            {opacity: pressed ? 0.6 : 1},
            styles.tagButton,
            {backgroundColor: selectedTag === '매칭' ? '#0A4A9B' : 'white'},

          ]} 
          onPress={() => {
            if (selectedTag === '매칭') {
              setSelectedTag('');
              console.log('태그 초기화');
            } else {
              setSelectedTag('매칭');
              console.log('매칭 선택');
            }
          }}>     
          <Text style={
            {color: selectedTag === '매칭' ? 'white' : 'dimgrey',
            fontWeight: selectedTag === '매칭' ? 'bold' : 'normal'
            }}>매칭</Text>        
          </Pressable>
        <Pressable 
          style={({ pressed }) => [
            {opacity: pressed ? 0.6 : 1},
            styles.tagButton,
            {backgroundColor: selectedTag === '공지' ? '#0A4A9B' : 'white'},

          ]}  
          onPress={() => {
            if (selectedTag === '공지') {
              setSelectedTag('');
              console.log('태그 초기화');
            } else {
              setSelectedTag('공지');
              console.log('공지 선택');
            }
          }}>     
          <Text style={
            {color: selectedTag === '공지' ? 'white' : 'dimgrey',
            fontWeight: selectedTag === '공지' ? 'bold' : 'normal'
            }}>공지</Text>        
          </Pressable>
      </View>
    </View>

  )
}

export default BoardHeader;


const styles = StyleSheet.create({
  header: {
    flex:1,
    flexDirection: "column",
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
  },
  buttonBox:{
    flex:1, 
    flexDirection:'row', 
    justifyContent: 'space-around',
    marginTop: 20,
  },
  tagButton: {
    flex:1,
    // paddingRight: 10,
    alignItems: 'center',
    borderWidth:1,
    borderColor: 'dimgrey',
    marginHorizontal: 3,
    paddingVertical: 5,
    borderRadius: 13,
  },
  tagButtonText: {

  },
})


