import React from "react";
import {defaultScreenOptions, Stack} from "./NavigationStack";
import Reservation from "../screens/Reservation";

function ReservationStack() {
  return (
    <Stack.Navigator screenOptions={defaultScreenOptions}>
      <Stack.Screen name={"ReservationPage"} component={Reservation} />
    </Stack.Navigator>
  )
}

export default ReservationStack;