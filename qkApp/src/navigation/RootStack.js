import React from "react";
import Login from "../screens/Login";
import TabNavigator from "./TabNavigator";
import { Stack, defaultScreenOptions } from "./DefaultStackOptions";

function RootStack() {
  return (
    <Stack.Navigator screenOptions={defaultScreenOptions}>
      <Stack.Screen name={"Login"} component={Login}/>
      <Stack.Screen name={"Root"} component={TabNavigator}/>
    </Stack.Navigator>
  )
}

export default RootStack;