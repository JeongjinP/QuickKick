import React from "react";
import { Stack, defaultScreenOptions } from "./DefaultStackOptions";
import ReservationMain from "../screens/reserve/ReservationMain";
import SelectSport from "../screens/reserve/SelectSport";
import ReservationSelect from "../screens/reserve/ReservationSelect";

function ReservationStack() {
  return (
    <Stack.Navigator screenOptions={defaultScreenOptions}>
      <Stack.Screen name={"ReservationMain"} component={ReservationMain} />
      <Stack.Screen name={"SelectSport"} component={SelectSport} />
      <Stack.Screen name={"ReservationSelect"} component={ReservationSelect} />
    </Stack.Navigator>
  )
}

export default ReservationStack;