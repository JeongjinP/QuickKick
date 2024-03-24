import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import GeneralHeader from "../../component/GeneralHeader";
import axios from "axios";


function TeamMain () {
  return(
  <SafeAreaView style={GeneralHeader.container}>
    <View style={GeneralHeader.header}>
      <Text style={GeneralHeader.title}>팀</Text>
    </View>
  </SafeAreaView>
  )
}

export default TeamMain;