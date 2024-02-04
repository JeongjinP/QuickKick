import React from "react";
import {defaultScreenOptions, Stack} from "./NavigationStack";
import Home from "../screens/Home";
import Login from "../screens/Login";


function HomeStack () {
  return (
    <Stack.Navigator screenOptions={defaultScreenOptions}>
      <Stack.Screen name={"HomePage"} component={Home} />
    </Stack.Navigator>
  )
}

export default HomeStack;