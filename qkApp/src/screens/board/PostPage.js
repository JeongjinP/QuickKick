import React  from "react";
import {View, Text, StyleSheet, ScrollView} from "react-native";

// 페이지 디자인 할 예정
function PostPage({ navigation, route }) {
  return (
    <ScrollView
      overScrollMode={'always'}
      style={styles.container}>
      <View style={styles.titleBox}>
        <Text style={styles.title}>{route.params.title}</Text>
        <View style={{justifyContent: 'flex-end'}}>
          <Text style={styles.tag}>[{route.params.tag}]</Text>
        </View>
      </View>
      <Text style={styles.content}>{route.params.content}</Text>
    </ScrollView>
  )
}

export default PostPage;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
    },
    titleBox: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin: 5,
      borderBottomWidth: 1,
      borderColor: "lightgray",
    },
    title: {
      marginHorizontal: 20,
      marginBottom: 10,
      color: "#0A4A9B",
      fontSize: 24,
      fontWeight: "bold",
    },
    tag: {
      marginHorizontal: 15,
      marginBottom: 10,
      color: "gray",
      fontSize: 16,
    },
    content: {
      color: "black",
      fontSize: 18,
      marginHorizontal: 30,
      marginVertical: 10,
    }

})
