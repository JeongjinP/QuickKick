import React from "react";
import { FlatList, Pressable } from "react-native";
import BoardSection from "./BoardSection";
function BoardMain({ navigation }) {
  // 게시글 더미 데이터
  const data = [
    { title: 'hello world', content: 'Hello, world! ', tag: '구인/구직' },
    { title: 'Lorem ipsum', content: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit"', tag: '잡담' },
    { title: '제목 3', content: 'Quick Kick', tag: '잡담' },
    { title: '제목 4', content: '내용', tag: '잡담' },
    { title: '제목 5', content: '내용', tag: '잡담' },
    { title: '제목 6', content: '내용', tag: '매칭' },
    { title: '제목 7', content: '내용', tag: '구인/구직' },
    { title: '제목 8', content: '내용', tag: '구인/구직' },
    { title: '제목 9', content: '내용', tag: '매칭' },
  ]
  
  // 아래로 스크롤시 헤더 사라지는 기능 추가해야 함
  // 더미 데이터로 글 리스트 보여주기, 글 눌러서 페이지로 이동하기 구현
  // 2 번째 게시글 같은 경우 줄바꿈 일어날 정도로 내용이 길어서 박스 크기가 길어지는데 어떻게 할 지,
  // 글 리스트 보여줄 때 어떤식으로 보여줄지 정하고 기능 추가해야 함
  return (
      <FlatList
        data={data}
        keyExtractor={(_) => _.title}
        renderItem={({ item }) => {
          const { title, content, tag } = item;
          return (
            <Pressable
              onPress={() => navigation.navigate('PostPage',
                {title: item.title, content: item.content, tag: item.tag})}>
              <BoardSection title={title} content={content} tag={tag} />
            </Pressable>
        )
      }}
      />
  )
}

export default BoardMain;