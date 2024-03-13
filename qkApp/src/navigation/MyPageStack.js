import React from "react";
import { defaultScreenOptions, Stack } from "./DefaultStackOptions";
import MyPageMain from "../screens/myPage/MyPageMain";

function MyPageStack() {
  return (
    <Stack.Navigator screenOptions={defaultScreenOptions}>
      <Stack.Screen name={"MyPageMain"} component={MyPageMain} />
    </Stack.Navigator>
  )
}
export default MyPageStack;