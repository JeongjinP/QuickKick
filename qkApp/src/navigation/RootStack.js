import React from "react";
import { Stack, defaultScreenOptions } from "./DefaultStackOptions";
import Login from "../screens/Login";
import TabNavigator from "./TabNavigator";

// 스택 네비게이션 RootStack 안에 Login 이라는 화면과
// 하단바 네비게이션인 TabNavigator 추가해서 로그인 화면과 메인화면 간의 화면이동 구현
// 네비게이션의 기본 스크린 옵션을 따로 분리해서 defaultScreenOptions 만들어 불러와 사용함
// 스택 네비게이션에서 불러와야할 Stack 도 위 파일에서 불러와서 사용함
function RootStack() {
  return (
    <Stack.Navigator screenOptions={defaultScreenOptions}>
      <Stack.Screen name={"Login"} component={Login}/>
      <Stack.Screen name={"Root"} component={TabNavigator}/>
    </Stack.Navigator>
  )
}

export default RootStack;