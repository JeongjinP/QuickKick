import React from "react";
import {defaultScreenOptions, Stack} from "./NavigationStack";
import MyPage from "../screens/MyPage";

function MyPageStack() {
  return (
    <Stack.Navigator screenOptions={defaultScreenOptions}>
      <Stack.Screen name={"MyPageScreen"} component={MyPage} />
    </Stack.Navigator>
  )
}
export default MyPageStack;