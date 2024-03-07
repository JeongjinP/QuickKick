import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import ReservationStack from "./ReservationStack";
import BoardStack from "./BoardStack";
import TeamStack from "./TeamStack";
import MyPageStack from "./MyPageStack";
import {defaultScreenOptions} from "./DefaultStackOptions";


// 하단바 5개를 가지는 화면이동 네비게이터 TabNavigator
// 각 하단바에 단일 페이지를 넣는게 아닌 각 메뉴별 스택 네비게이터를 넣음
// 스택 네비게이터와 탭 네비게이터의 헤더가 별도인데 탭 네비게이터의 헤더를 보이고 싶지 않을 땐 여기서 설정
const Tab = createBottomTabNavigator();
function TabNavigator() {
  return(
    <Tab.Navigator initialRouteName={"홈"} screenOptions={defaultScreenOptions}>
      <Tab.Screen name={"홈"} component={Home} options={{headerShown:true}}/>
      <Tab.Screen name={"예약"} component={ReservationStack} />
      <Tab.Screen name={"게시판"} component={BoardStack} />
      <Tab.Screen name={"팀"} component={TeamStack} options={{headerShown:false}}/>
      <Tab.Screen name={"내정보"} component={MyPageStack} options={{headerShown:false}}/>
    </Tab.Navigator>
  );
}

export default TabNavigator;