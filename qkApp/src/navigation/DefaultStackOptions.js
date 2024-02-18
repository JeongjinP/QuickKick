// 스택 네비게이션 만들기 위해 Stack 선언해서 내보내줌
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

// 스택 네비게이터의 기본 옵션
const defaultScreenOptions = {
  headerShown: false, // 네비게이터 헤더 가리기
};

export { Stack, defaultScreenOptions };
