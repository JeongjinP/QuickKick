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


// 게시판 메인 화면
function BoardMain({ navigation }) {
  const isFocused = useIsFocused();
  const [boardList, setBoardList] = useState([]);
  const [filteredBoardList, setFilteredBoardList] = useState([]); // 필터링된 게시글 목록을 저장하기 위한 state
  const [selectedTag, setSelectedTag] = useState(''); // BoardHeader에서 선택한 태그를 저장하기 위한 state

  useEffect(() => {
    if (isFocused) {
      getBoardList().then((data) => setBoardList(data));
    }
  }, [isFocused])

  useEffect(() => {
    if (selectedTag === '') {
      setFilteredBoardList(boardList); // 선택된 태그가 없으면 모든 게시글을 보여줌
    } else {
      setFilteredBoardList(boardList.filter(item => item.category === selectedTag)); // 선택된 태그와 일치하는 게시글만 필터링
    }
  }, [selectedTag, boardList]) // selectedTag 또는 boardList가 변경될 때마다 필터링 수행


  return (
    <SafeAreaView style={[GeneralHeader.container]}>
    <FlatList
      ListHeaderComponent={<BoardHeader selectedTag={selectedTag} setSelectedTag={setSelectedTag}/>}
      data={filteredBoardList}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({item}) => {
        const {id, writer, title, content, category, createDate} = item;
        return (
          <Pressable
            onPress={() => navigation.navigate('PostPage',
              {id: id, title: title, content: content, writer: writer, tag: category, time: createDate})}>
            <BoardSection title={title} content={content} writer={writer} time={createDate} tag={category}/>
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