import React from "react";
import {defaultScreenOptions, Stack} from "./NavigationStack";
import Team from "../screens/Team";

function TeamStack() {
  return (
    <Stack.Navigator screenOptions={defaultScreenOptions}>
      <Stack.Screen name={"TeamPageScreen"} component={Team} />
    </Stack.Navigator>
  )
}
export default TeamStack;
