import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";
import TabNavigator from "./TabNavigator";
import {defaultScreenOptions} from "./NavigationStack";

const Stack = createStackNavigator();
function RootStack() {
  return (
    <Stack.Navigator screenOptions={defaultScreenOptions}>
      <Stack.Screen name={"intro"} component={Login}/>
      <Stack.Screen name={"Main"} component={TabNavigator}/>
    </Stack.Navigator>
  )
}

export default RootStack;