import React from "react";
import { Stack, defaultScreenOptions } from "./DefaultStackOptions";
import ReservationMain from "../screens/reservation/ReservationMain";
import SelectSport from "../screens/reservation/SelectSport";
import ReservationSelect from "../screens/reservation/ReservationSelect";
import ReservationReport from "../screens/reservation/ReservationReport";

function ReservationStack() {
  return (
    <Stack.Navigator screenOptions={defaultScreenOptions}>
      <Stack.Screen name={"ReservationMain"} component={ReservationMain} />
      <Stack.Screen name={"SelectSport"} component={SelectSport} />
      <Stack.Screen name={"ReservationSelect"} component={ReservationSelect} />
      <Stack.Screen name={"ReservationReport"} component={ReservationReport} />
    </Stack.Navigator>
  )
}

export default ReservationStack;