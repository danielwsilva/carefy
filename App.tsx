import 'react-native-reanimated';
import React from 'react';
import { StatusBar, View } from 'react-native';
import { useFonts, Manrope_400Regular, Manrope_600SemiBold, Manrope_700Bold } from '@expo-google-fonts/manrope';

import { AuthProvider } from './src/hooks/auth';
import { PatientProvider } from './src/hooks/patient';
import { Routes } from './src/routes';
import theme from './src/styles/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    Manrope_400Regular,
    Manrope_600SemiBold,
    Manrope_700Bold
  });

  const { colors } = theme;

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} >
      <AuthProvider>
        <PatientProvider>
          <StatusBar barStyle="light-content" backgroundColor={colors.none} translucent />
          <Routes />
        </PatientProvider>
      </AuthProvider>
    </View>
  );
}
