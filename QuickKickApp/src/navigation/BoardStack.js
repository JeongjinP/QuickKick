import React from "react";
import {defaultScreenOptions, Stack} from "./DefaultStackOptions";
import Board from "../screens/Board";

function BoardStack() {
  return (
    <Stack.Navigator screenOptions={defaultScreenOptions}>
      <Stack.Screen name={"BoardScreen"} component={Board} />
    </Stack.Navigator>
  )
}

export default BoardStack;
