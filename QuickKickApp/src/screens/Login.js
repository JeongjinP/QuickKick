import React from "react";
import {Button, StyleSheet, Text, View} from 'react-native';


function Login ({ navigation }) {
  return (
    <View>
      <Text>Login Page</Text>
      <Button title='Login'
              onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

export default Login

const styles = StyleSheet.create({

})