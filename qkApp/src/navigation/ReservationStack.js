import React from "react";
import { Stack, defaultScreenOptions } from "./DefaultStackOptions";
import SelectSport from "../screens/reserve/SelectSport";
import ReservationSelect from "../screens/reserve/ReservationSelect";

function ReservationStack() {
  return (
    <Stack.Navigator screenOptions={defaultScreenOptions}>
      <Stack.Screen name={"ReservationPage"} component={SelectSport} />
      <Stack.Screen name={"ReservationSelect"} component={ReservationSelect} />
    </Stack.Navigator>
  )
}

export default ReservationStack;