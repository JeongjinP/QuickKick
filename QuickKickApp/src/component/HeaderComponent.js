import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const HeaderComponent = () =>{

  return (
    <View style={styles.header}>
      <Text style={styles.directory}>홈</Text>
      <Text style={styles.directory}>알림</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "white",
  }, 
  header: {
    flex:1.2,
    backgroundColor: "#0A4A9B",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop:20,
  },
  directory: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom:-10,
  }});

export default HeaderComponent;