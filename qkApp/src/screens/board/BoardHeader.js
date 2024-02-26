// 게시판 용 헤더
// 파일로 분리해야 할지 고민중
// 스크롤뷰, 플랫뷰 기능에서 헤더를 추가하는건지 공부 필요

import {Text, StyleSheet, View} from "react-native";
import GeneralHeader from "../../component/GeneralHeader";

function BoardHeader() {
  return (
    <View style={GeneralHeader.header}>
      <Text style={GeneralHeader.title}>게시판</Text>
    </View>
  )
}

export default BoardHeader;

