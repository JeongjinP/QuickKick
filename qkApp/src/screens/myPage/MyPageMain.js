import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import GeneralHeader from "../../component/GeneralHeader";

function MyPageMain() {
  return (
    <SafeAreaView style={GeneralHeader.container}>
      <View style={GeneralHeader.header}>
        <Text style={GeneralHeader.title}>내정보</Text>
      </View>
    </SafeAreaView>
  );
}

export default MyPageMain;