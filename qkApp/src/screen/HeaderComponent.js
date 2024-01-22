// HeaderComponent.js
import React from 'react';
import { View, Text } from 'react-native';

const HeaderComponent = ({ title }) => {
  return (
    <View style={{ height: 50, backgroundColor: 'lightblue', justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{title}</Text>
    </View>
  );
};

export default HeaderComponent;
