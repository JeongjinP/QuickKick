import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./HomeStack";
import ReservationStack from "./ReservationStack";
import BoardStack from "./BoardStack";
import TeamStack from "./TeamStack";
import MyPageStack from "./MyPageStack";

const Tab = createBottomTabNavigator();
function TabNavigator() {
  return(
    <Tab.Navigator initialRouteName={"Home"}>
      <Tab.Screen name={"Home"} component={HomeStack} />
      <Tab.Screen name={"Reservation"} component={ReservationStack} />
      <Tab.Screen name={"Board"} component={BoardStack} />
      <Tab.Screen name={"Team"} component={TeamStack} />
      <Tab.Screen name={"MyPage"} component={MyPageStack} />
    </Tab.Navigator>
  );
}

export default TabNavigator;