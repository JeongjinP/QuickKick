import React, { useState } from "react";
import {View, FlatList, Pressable, SafeAreaView, Text} from "react-native";
import GeneralHeader from "../../component/GeneralHeader";
import BoardSection from "./BoardSection";
import BoardHeader from "./BoardHeader";
import { StyleSheet } from "react-native";

function BoardMain({ navigation }) {

  const ITEMS_PER_PAGE = 4;
  const [page, setPage] = useState(1);
  // 게시글 더미 데이터
  const data = [
    {no: 1, title: 'Hello, world!', content: 'Hello, world! ', tag: '구인/구직'},
    {no: 2, title: 'Lorem ipsum', content: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit"', tag: '잡담'},
    {no: 3, title: '퀵 킥', content: 'Quick Kick', tag: '잡담'},
    {no: 4, title: '안녕하세요', content: '반갑습니다', tag: '잡담'},
    {no: 5, title: '어제 홀란드 봄?', content: '', tag: '잡담'},
    {no: 6, title: '저녁 6시에 풋살 하실 분', content: '5명 있습니다', tag: '매칭'},
    {no: 7, title: '제목 7', content: '내용', tag: '구인/구직'},
    {no: 8, title: '제목 8', content: '내용', tag: '구인/구직'},
    {no: 9, title: '제목 9', content: '내용', tag: '매칭'},
  ]

  const sortedData = data.sort((a, b) => b.no - a.no);

  const currentPageData = sortedData.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);


  // 더미 데이터로 글 리스트 보여주기, 글 눌러서 페이지로 이동하기 구현
  // 2 번째 게시글 같은 경우 줄바꿈 일어날 정도로 내용이 길어서 박스 크기가 길어지는데 어떻게 할 지,
  // 글 리스트 보여줄 때 어떤식으로 보여줄지 정하고 기능 추가해야 함

  // ScrollView 는 리스트가 길어질 때 모든 리스트를 렌더링해서 성능저하가 발생하므로
  // FlatList 를 사용해서 글 목록 보여주기


  return (
    <SafeAreaView style={[GeneralHeader.container]}>
    <FlatList
      ListHeaderComponent={BoardHeader}
      ListFooterComponent={
        <View style={styles.pageButtonContainer}>
          {/* 1페이지 일 경우 이전 페이지 표시 안함 */}
          {page > 1 && (
            <View style={styles.pageButton}>
              <Pressable onPress={() => setPage(Math.max(1, page -1))}>
                <Text style={styles.pageButtonText}>이전 페이지</Text>
              </Pressable>
            </View>
          )}
          {/* 페이지가 마지막일 땐 다음 페이지 표시 안함 */}
          {currentPageData.length === ITEMS_PER_PAGE && (
            <View style={styles.pageButton}>
              <Pressable onPress={() => setPage(page + 1)}>
                <Text style={styles.pageButtonText}>다음 페이지</Text>
              </Pressable>
            </View>
          )}
        </View>
      }
      data={currentPageData}
      keyExtractor={(item) => item.no.toString()}
      renderItem={({item}) => {
        const {no, title, content, tag} = item;
        return (
          <Pressable
            onPress={() => navigation.navigate('PostPage',
              {no: item.no, title: item.title, content: item.content, tag: item.tag})}>
            <BoardSection title={title} content={content} tag={tag}/>
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