import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from  '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from "./src/screens/Home";
import Login from "./src/screens/Login";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      {/*<HeaderComponent/>*/}
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerStyle: {backgroundColor: '#0a4a9b'},
            headerTitleStyle:{color: '#ffffff'}, headerTintColor: '#ffffff'}}>
          <Stack.Screen name={'Home'} component={Home} />
        </Stack.Navigator>
      </NavigationContainer>


      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "white",
  },

  

});
