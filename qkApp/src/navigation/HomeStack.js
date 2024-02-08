import React from "react";
import {defaultScreenOptions, Stack} from "./DefaultStackOptions";
import Home from "../screens/Home";

function HomeStack () {
  return (
    <Stack.Navigator screenOptions={defaultScreenOptions}>
      <Stack.Screen name={"HomeScreen"} component={Home} />
    </Stack.Navigator>
  )
}

export default HomeStack;