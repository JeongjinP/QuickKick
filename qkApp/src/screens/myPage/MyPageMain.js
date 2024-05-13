import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import GeneralHeader from "../../component/GeneralHeader";
import { useStdData } from "../../component/StdLoginContext";

function MyPageMain() {
  const { stdName, teamName } = useStdData();

  return (
    <SafeAreaView style={GeneralHeader.container}>
      <View style={GeneralHeader.header}>
        <Text style={GeneralHeader.title}>내정보</Text>
      </View>

      <View>
        <Text>이름: {stdName}</Text>
        <Text>팀: {teamName} </Text>
      </View>
    </SafeAreaView>
  );
}

export default MyPageMain;