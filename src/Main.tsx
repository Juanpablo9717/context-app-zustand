import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {BottomTabNavigator} from './presentation/navigators/BottomTabNavigator';

const Main = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};

export default Main;
