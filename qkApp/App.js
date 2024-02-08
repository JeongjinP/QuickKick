import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from  '@react-navigation/native';
import RootStack from './src/navigation/RootStack';

export default function App() {
  return (
    // 화면 이동을 위한 최상위 네비게이션 RootStack
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  )
}