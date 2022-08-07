import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Image, ImageBackground, TouchableOpacity, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

import img from '../../assets/background.png';
import logo from '../../assets/logo.png';
import { Text } from '../../components/Text';
import { useAuth } from '../../hooks/auth';
import theme from '../../styles/theme';

import { styles } from './styles';

export const SignIn = () => {
  const { loading, signInGithub } = useAuth();

  const { colors } = theme;

  return (
    <ImageBackground resizeMode="cover" style={styles.container} source={img}>
      <LinearGradient
        start={{ x: 0.0, y: 0.1 }}
        end={{ x: 0.5, y: 1.0 }}
        colors={[colors.gradientSecondary, colors.gradientPrimary, colors.gradientPrimary]}
        style={styles.gradient}
      >
        <Image source={logo} resizeMode="cover" style={styles.logo} />

        <Text color={colors.white} fontWeight="normal" fontSize={18} style={{ marginBottom: RFValue(14) }}>
          Auditoria em Saúde com eficiência
        </Text>

        <Text
          color={colors.white}
          fontWeight="normal"
          fontSize={12}
          style={{ width: '80%', textAlign: 'center', marginBottom: RFValue(124) }}
        >
          Descubra como você pode otimizar o seu processo de auditoria hospitalar para potencializar os resultados da
          operação, com software de gestão de internados ideal para a sua instituição.
        </Text>

        <View style={styles.footer}>
          <TouchableOpacity disabled={loading} style={styles.button} activeOpacity={0.7} onPress={signInGithub}>
            <FontAwesome5 name="github" size={28} color={colors.white} />
            <Text color={colors.white} style={{ marginLeft: RFValue(8) }}>
              Entrar com o Github
            </Text>
          </TouchableOpacity>

          <Text
            fontWeight="normal"
            fontSize={12}
            color={colors.textLight}
            style={{ marginVertical: RFValue(20), textAlign: 'center' }}
          >
            Desafio técnico Cafery
          </Text>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};
