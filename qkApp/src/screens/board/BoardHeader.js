// 게시판 용 헤더
// 파일로 분리해야 할지 고민중
// 스크롤뷰, 플랫뷰 기능에서 헤더를 추가하는건지 공부 필요

import {Text, StyleSheet, View, Pressable} from "react-native";
import GeneralHeader from "../../component/GeneralHeader";
import { Colors } from "react-native/Libraries/NewAppScreen";

function BoardHeader() {
  return (
    <View style={GeneralHeader.header}>
      <Text style={GeneralHeader.title}>게시판</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  writeButton: {
    flex:1,
    alignSelf: 'flex-start',
    justifyContent: 'start',
    alignItems: 'start',
    backgroundColor: '#0a4a9b',
    padding: 10,
    borderRadius: 10,
  }
})

export default BoardHeader;

