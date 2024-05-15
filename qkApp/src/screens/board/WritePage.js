import React, { useState } from 'react';
import { useStdData } from '../../component/StdLoginContext';
import GeneralHeader from "../../component/GeneralHeader";
import { View, Text, SafeAreaView, FlatList, StyleSheet, TextInput, Pressable } from 'react-native';
import PostHeader from './PostHeader';
import DropdownComponent from '../../component/DropdownComponent';
import axios from 'axios';



function WritePage({ navigation }) {
    const [ tag,setTag ] = useState('');
    const [ title, setTitle ] = useState('');
    const [ content, setContent ] = useState('');
    const { stdName } = useStdData();
    const data = ' ';

    const tagSelect = [
        { label: '잡담', value: 'talk' },
        { label: '모집', value: 'find' },
        { label: '매칭', value: 'match' },
      ];

    const SERVER_URL = "http://localhost:8070/post";
    const SendPost = async () => {
      const url = `${SERVER_URL}?writer=${stdName}&title=${title}&content=${content}`;
  
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
        <FlatList
          ListHeaderComponent={PostHeader}
          data={data}
          renderItem={() => (
            <View>
              <DropdownComponent
                label={"태그"}
                holder={"태그를 선택해주세요."}
                data={tagSelect}
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

                  placeholder={"내용"}
                  onChangeText={(text) => setContent(text)}
                  />
              </View>
            </View>
          )}
        />
        <Pressable
          style={({ pressed }) => [
            {opacity: pressed ? 0.3: 1},
            styles.button]}
          onPress = {async () => {
            await SendPost(tag, title, content);
            navigation.navigate("BoardMain");
          }}
        >
          <Text style={styles.buttonText}>작성완료!</Text> 
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
      // padding: 10,
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