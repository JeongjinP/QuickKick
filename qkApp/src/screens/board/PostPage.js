import React  from "react";
import {View, Text, StyleSheet, ScrollView, SafeAreaView, Pressable} from "react-native";
import GeneralHeader from "../../component/GeneralHeader";
import BoardHeader from "./BoardHeader";

// 페이지 디자인 할 예정
function PostPage({ navigation, route }) {
  return (
    <SafeAreaView style={GeneralHeader.container}>
      {/*게시판 이라는 헤더 보여줄지 말지 회의해서 결정하기*/}
      <View>
        <Pressable
          style={({ pressed }) => [
            {opacity: pressed ? 0.3 : 1},
            styles.backButton]}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>back</Text>
        </Pressable>

      </View>
      <ScrollView
        overScrollMode={'always'}>
        {/*// style={styles.container}>*/}
        <View style={styles.titleBox}>
          <Text style={styles.title}>{route.params.title}</Text>
          <View style={{justifyContent: 'flex-end'}}>
            <Text style={styles.tag}>[{route.params.tag}]</Text>
          </View>
        </View>
        <Text style={styles.content}>{route.params.content}</Text>
      </ScrollView>
    </SafeAreaView>
  )
}

export default PostPage;

const styles = StyleSheet.create({
    backButton: {
      justifyContent: "center",
      alignItems: "flex-start",
      marginHorizontal: 20,
      marginVertical:0,
    },
    backButtonText: {
      color: "black",
      fontSize: 16,
      fontWeight: "bold",
    },
    titleBox: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 20,
      marginHorizontal: 10,
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
      marginVertical: 20,
    }

})
