import React from "react";
import {defaultScreenOptions, Stack} from "./DefaultStackOptions";
import SelectSport from "../screens/reserve/SelectSport";
import SelectFootballGround from "../screens/reserve/SelectFootballGround";
import SelectFutsalGround from "../screens/reserve/SelectFutsalGround";

function ReservationStack() {
  return (
    <Stack.Navigator screenOptions={defaultScreenOptions}>
      <Stack.Screen name={"ReservationPage"} component={SelectSport} />
      <Stack.Screen name={"FootballGround"} component={SelectFootballGround} />
      <Stack.Screen name={"FutsalGround"} component={SelectFutsalGround} />
    </Stack.Navigator>
  )
}

export default ReservationStack;

