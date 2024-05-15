import React from "react";
import { defaultScreenOptions, Stack } from "./DefaultStackOptions";
import BoardMain from "../screens/board/BoardMain";
import PostPage from "../screens/board/PostPage";
import WritePage from "../screens/board/WritePage";
import BoardHeader from "../screens/board/BoardHeader";

function BoardStack() {
  return (
    <Stack.Navigator screenOptions={defaultScreenOptions}>
      <Stack.Screen name={"BoardMain"} component={BoardMain} />
      <Stack.Screen name={"PostPage"} component={PostPage} />
      <Stack.Screen name={"WritePage"} component={WritePage} />
    </Stack.Navigator>
  )
}

export default BoardStack;

