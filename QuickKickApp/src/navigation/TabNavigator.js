import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./HomeStack";
import ReservationStack from "./ReservationStack";
import BoardStack from "./BoardStack";
import TeamStack from "./TeamStack";
import MyPageStack from "./MyPageStack";
import Home from "../screens/Home";

const Tab = createBottomTabNavigator();
function TabNavigator() {
  return(
    <Tab.Navigator initialRouteName={"홈"}>
      <Tab.Screen name={"홈"} component={HomeStack} />
      <Tab.Screen name={"예약"} component={ReservationStack} options={{headerShown:false}}/>
      <Tab.Screen name={"게시판"} component={BoardStack} />
      <Tab.Screen name={"팀"} component={TeamStack} />
      <Tab.Screen name={"내정보"} component={MyPageStack} />
    </Tab.Navigator>
  );
}

export default TabNavigator;