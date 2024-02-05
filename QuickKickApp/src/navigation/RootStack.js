import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";
import TabNavigator from "./TabNavigator";
import {defaultScreenOptions} from "./DefaultStackOptions";
import SelectFootballGround from "../screens/reserve/SelectFootballGround";

const Stack = createStackNavigator();
function RootStack() {
  return (
    <Stack.Navigator screenOptions={defaultScreenOptions}>
      <Stack.Screen name={"Login"} component={Login}/>
      <Stack.Screen name={"Root"} component={TabNavigator}/>
    </Stack.Navigator>
  )
}

export default RootStack;