import React  from "react";
import { View, Text, StyleSheet } from "react-native";

// 페이지 디자인 할 예정
function PostPage({ navigation, route }) {
  return (
    <View style={styles.container}>
      <Text>{route.params.title}</Text>
      <Text>{route.params.header}</Text>
      <Text>{route.params.content}</Text>
    </View>
  )
}

export default PostPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
