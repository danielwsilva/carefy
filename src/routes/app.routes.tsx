import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screen/Home';
import { Register } from '../screen/Register';
import { PatientDTO } from '../hooks/patient';

export type RouteProps = {
  home: undefined;
  register: { 
    type: 'register' | 'update',
    patient?: PatientDTO;
  };
};

const { Navigator, Screen } = createNativeStackNavigator<RouteProps>();

export const AppRoutes = () => {
  return (
    <Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
      <Screen name='home' component={Home} />
      <Screen name='register' component={Register} />
    </Navigator>
  );
}