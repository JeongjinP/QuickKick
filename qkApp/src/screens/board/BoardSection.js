import React from "react";
import { View, Text, StyleSheet } from "react-native";
import moment from "moment";
require('moment/locale/ko');


function BoardSection({ title, content, writer, time, tag }) {

  // 게시글 작성 시간을 현재 시간과 비교하여 몇 분 전에 작성되었는지 표시
  const timeDifference = moment(time).fromNow();

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={[styles.title, {width:280}]} numberOfLines={1}>{title}</Text>
        <Text style={styles.tag}>[{tag}]</Text>
      </View>
      <View style={styles.contentZone}>
      <Text style={styles.content} numberOfLines={1}>{content}</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.info}>{writer} |</Text>
        <Text style={styles.info}>{timeDifference}</Text>
        
      </View>
    </View>
  )
}

export default BoardSection;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
      padding: 20,
      margin: 8,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: "lightgray",
    },
    title: {
      color: "#0A4A9B",
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 10,
    },
    contentZone: {
      marginBottom: 10,
    },
    content: {
      color: "black",
      fontSize: 16,
    },
    tag: {
      color: "dimgray",
      fontSize: 16,
    },
    footer: {
      flexDirection: "row",
      alignItems: "end",
    },
    info: {
      color: "dimgray",
      fontSize: 16,
      marginRight: 5,
    }

})