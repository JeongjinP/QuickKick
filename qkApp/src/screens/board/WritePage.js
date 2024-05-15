import React, { useState, useEffect, useRef } from 'react';
import { useStdData } from '../../component/StdLoginContext';
import GeneralHeader from "../../component/GeneralHeader";
import { View, Text, SafeAreaView, Alert, StyleSheet, TextInput, Pressable } from 'react-native';
import PostHeader from './PostHeader';
import DropdownComponent from '../../component/DropdownComponent';
import axios from 'axios';



function WritePage({ navigation, route }) {
    const { Tag } = route.params;
    const [ tag,setTag ] = useState(Tag || "");
    const [ title, setTitle ] = useState('');
    const [ content, setContent ] = useState('');
    const { stdName } = useStdData();

    const tagSelect = [
        { label: '잡담', value: '잡담' },
        { label: '인원모집', value: '인원모집' },
        { label: '매칭', value: '매칭' },
        { label: '공지', value: '공지' },
      ];

    const SERVER_URL = "http://localhost:8070/post";
    const SendPost = async () => {
      const url = `${SERVER_URL}?writer=${stdName}&title=${title}&content=${content}&category=${tag}`;
      
      try {
        const response = await axios.post(url);
        if (response.status !== 200) {
          throw new Error('HTTP error ' + response.status);
        }
        console.log('게시글 작성 완료');
      } catch (error) {
        console.error('오류가 발생했습니다', error);
      }
    };

    
    // console.log("WritePage: ", stdName);
    return(
      <SafeAreaView style={GeneralHeader.container}>
        <PostHeader />
          <View style={{flex:1}}>
            <DropdownComponent
              label={"태그"}
              holder={"태그를 선택해주세요"}
              data={tagSelect}
              defaultValue={tag}
              onValueChange={(value) => {
              setTag(value);
              console.log("selected tag: ", value);
              }} 
            />

            <View style={styles.titleBox}>
              <TextInput
                style={styles.title}
                placeholder={"제목"}
                onChangeText={(text) => setTitle(text)}
              />
            </View>
            
            <View style={styles.contentBox}>
              <TextInput
                style={styles.content}
                multiline={true}
                debounceTimeout={400}
                placeholder={"내용"}
                onChangeText={(text) => setContent(text)}
              />
            </View>
          </View>

        <Pressable
          style={({ pressed }) => [
            {opacity: pressed ? 0.3: 1},
            styles.button]}
          onPress = {async () => {
            if (tag === '') {
              Alert.alert('',"태그를 선택해주세요.", [{ text: '알겠습니다' }]);
              return;
            }
            await SendPost(tag, title, content);
            navigation.navigate("BoardMain");
          }}
        >
          <Text style={styles.buttonText}>작성완료</Text> 
        </Pressable>
      </SafeAreaView>
    );

}

export default WritePage;

const styles = StyleSheet.create({
    titleBox: {
      flexDirection: 'row',
      // justifyContent: 'space-between',
      // marginVertical: 0,
      marginHorizontal: 10,
      borderBottomWidth: 1,
      padding: 10,
      borderColor: "lightgray",
    },
    title: {
      color: "#0A4A9B",
      fontSize: 20,
      fontWeight: "bold",
    },
    contentBox: {
      marginHorizontal: 10,
      marginVertical: 15,
      padding: 10,

    },
    content: {
      color: "black",
      fontSize: 18, 
 
    }, 
    button: {
    alignItems: "center",
    backgroundColor: "#0A4A9B",
    padding: 16,
    marginHorizontal: 10,
    marginVertical: 20,
    // borderRadius: 5,
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18,
    },
})