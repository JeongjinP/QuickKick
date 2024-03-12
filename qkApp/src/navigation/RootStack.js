import React, {useCallback, useEffect} from "react";
import { Stack } from "./DefaultStackOptions";
import { BackHandler } from "react-native";
import Login from "../screens/Login";
import TabNavigator from "./TabNavigator";
import {useFocusEffect} from "@react-navigation/native";

// 스택 네비게이션 RootStack 안에 Login 이라는 화면과
// 하단바 네비게이션인 TabNavigator 추가해서 로그인 화면과 메인화면 간의 화면이동 구현
// 네비게이션의 기본 스크린 옵션을 따로 분리해서 defaultScreenOptions 만들어 불러와 사용함
// 스택 네비게이션에서 불러와야할 Stack 도 위 파일에서 불러와서 사용함


// 홈, 로그인 화면에서는 루트 스텍 네비게이터의 헤더가 보일 필요가 없고,
// 좌우 화면이동 제스쳐로 뒤로가기 등의 기능이 동작하면 안되기 때문에 이에 맞게 네비게이터 옵션 설정
function RootStack() {
  // 안드로이드 뒤로가기 버튼 작동 방지 코드
  useFocusEffect(
    useCallback(() => {
      const backAction = () => {
        return true;
      };
      const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        backAction,
      );
      return () => {
        backHandler.remove();
      };
    }, []))

  return (

    <Stack.Navigator screenOptions={{headerShown: false, gestureEnabled: false}}>
      <Stack.Screen name={"Login"} component={Login}/>
      <Stack.Screen name={"Root"} component={TabNavigator}/>
    </Stack.Navigator>
  )
}

export default RootStack;