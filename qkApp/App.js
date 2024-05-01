import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from  '@react-navigation/native';
import RootStack from './src/navigation/RootStack';
import { StdLoginProvider } from './src/component/StdLoginContext';

export default function App() {
  return (
    // 화면 이동을 위한 최상위 네비게이션 RootStack
    <StdLoginProvider>
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
    </StdLoginProvider>
  )
}