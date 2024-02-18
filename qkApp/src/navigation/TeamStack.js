import React from "react";
import {defaultScreenOptions, Stack} from "./DefaultStackOptions";
import TeamMain from "../screens/team/TeamMain";

function TeamStack() {
  return (
    <Stack.Navigator screenOptions={defaultScreenOptions}>
      <Stack.Screen name={"TeamPageScreen"} component={TeamMain} />
    </Stack.Navigator>
  )
}
export default TeamStack;
