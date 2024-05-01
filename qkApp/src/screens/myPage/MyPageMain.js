import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import GeneralHeader from "../../component/GeneralHeader";
import { useStdName } from "../../component/StdLoginContext";

function MyPageMain() {
  const { stdName } = useStdName();

  return (
    <SafeAreaView style={GeneralHeader.container}>
      <View style={GeneralHeader.header}>
        <Text style={GeneralHeader.title}>내정보</Text>
      </View>

      <View>
        <Text>이름: {stdName}</Text>
        <Text>팀: </Text>
      </View>
    </SafeAreaView>
  );
}

export default MyPageMain;