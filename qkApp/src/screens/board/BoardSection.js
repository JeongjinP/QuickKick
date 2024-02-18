import React from "react";
import { View, Text, StyleSheet } from "react-native";

function BoardSection({ title, content, header }) {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.header}>[{header}]</Text>
      </View>
      <Text style={styles.content}>{content}</Text>
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
    content: {
      color: "black",
      fontSize: 16,
    },
    header: {
      color: "dimgray",
      fontSize: 16,
    }

})