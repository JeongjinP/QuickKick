import React, { useState, useEffect } from "react";
import { View, FlatList, Pressable, SafeAreaView, Text, StyleSheet } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import GeneralHeader from "../../component/GeneralHeader";
import BoardSection from "./BoardSection";
import BoardHeader from "./BoardHeader";
import axios from "axios";

async function getBoardList() {
  try {
    const response = await axios.get("http://localhost:8070/boardlist");
    console.log("게시글 조회 결과:", response.data);
    const sortedData = response.data.sort((a, b) => new Date(b.createDate) - new Date(a.createDate));
    console.log("sortedData: ", sortedData);

    return sortedData;
  } catch (error) {
    console.error("게시글 조회 에러:", error);  } 
}

function BoardMain({ navigation }) {
  const isFocused = useIsFocused();
  const [boardList, setBoardList] = useState([]);

  useEffect(() => {
    if (isFocused) {
      getBoardList().then((data) => setBoardList(data));
    }
  }, [isFocused])


  return (
    <SafeAreaView style={[GeneralHeader.container]}>
    <FlatList
      ListHeaderComponent={BoardHeader}
      data={boardList}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({item}) => {
        const {id, writer, title, content, tag, createDate} = item;
        return (
          <Pressable
            onPress={() => navigation.navigate('PostPage',
              {id: id, title: title, content: content, writer: writer, tag: tag, time: createDate})}>
            <BoardSection title={title} content={content} writer={writer} time={createDate} tag={tag}/>
          </Pressable>
        )
      }}
    />
    </SafeAreaView>
  )
}

export default BoardMain;

const styles = StyleSheet.create({
  pageButtonContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  pageButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
    borderRadius: 5,
    backgroundColor: "#0A4A9B"
  },
  pageButtonText: {
    fontSize: 26,
    fontWeight: "semibold",
    color: "white",
  },
});