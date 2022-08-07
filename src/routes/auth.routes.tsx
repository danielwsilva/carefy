import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignIn } from '../screen/SignIn';

const { Navigator, Screen } = createNativeStackNavigator();

export const AuthRoutes = () => {
  return (
    <Navigator initialRouteName="signin" screenOptions={{ headerShown: false }}>
      <Screen name='signin' component={SignIn} />
    </Navigator>
  );
}