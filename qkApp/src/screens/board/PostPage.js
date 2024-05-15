import React  from "react";
import {View, Text, StyleSheet, ScrollView, SafeAreaView, Pressable, FlatList} from "react-native";
import GeneralHeader from "../../component/GeneralHeader";
import PostHeader from "./PostHeader";

// 페이지 디자인 할 예정
function PostPage({ navigation, route }) {
  const { id, title, content, writer, tag, time } = route.params;
  const date = new Date(time);
  const formattedTime = `${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${date.getMinutes() < 10 ? '0' : ''}${date.getMinutes()}`;
  console.log("PostPage: ", id, title, content, writer, tag, formattedTime);
  const data = [{id, title, content, writer, tag, formattedTime}]
  return (
    <SafeAreaView style={GeneralHeader.container}>
      <FlatList
        ListHeaderComponent={PostHeader}
        data={data}
        renderItem={({ item }) => (
          <View>
            <View style={styles.titleBox}>
              <View style={{flexDirection:"column"}}>
                <Text style={styles.writerName}>작성자: {item.writer}</Text>
                
                <Text style={styles.writerName}>{item.formattedTime}</Text>
              </View>
              <Text style={styles.tag}>[{item.tag}]</Text>
            </View>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.content}>{item.content}</Text>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  )
}

export default PostPage;

const styles = StyleSheet.create({
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
    writerName: {
      marginHorizontal: 20,
      marginBottom: 5,
      color: "gray",
      fontSize: 16,
    },
    content: {
      color: "black",
      fontSize: 18,
      marginHorizontal: 30,
      marginVertical: 20,
    },

})
