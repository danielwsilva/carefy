import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { FlatList, Image, TouchableOpacity, View } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Text } from '../../components/Text';
import { useAuth } from '../../hooks/auth';
import { PatientDTO, usePatient } from '../../hooks/patient';
import theme from '../../styles/theme';

import { CardPatient } from './components/CardPatient';
import { styles } from './styles';

export const Home = () => {
  const { user, signOut } = useAuth();
  const { navigate } = useNavigation();
  const { patient } = usePatient();

  const { colors } = theme;

  const compare = (patients: PatientDTO[]) => {
    patients.sort(function (a, b) {
      return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
    });

    return patients;
  };

  const emptyComponent = () => (
    <Text fontWeight="normal" fontSize={13} style={{ textAlign: 'center', marginTop: 40, paddingHorizontal: 20 }}>
      {`Nenhum paciente encontrado :(\n\nAdicione pacientes clicando no botão “+” na tela principal do aplicativo.`}
    </Text>
  );

  return (
    <View style={styles.container}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={[colors.gradientSecondary, colors.gradientPrimary]}
        style={styles.header}
      >
        <Image source={{ uri: user.avatar_url }} resizeMode="cover" style={styles.image} />
        <View>
          <Text color={colors.white} fontWeight="semiBold">
            Olá,
          </Text>
          <Text color={colors.white} fontWeight="normal">
            {user.login}
          </Text>
        </View>
        <View style={{ flex: 1, alignItems: 'flex-end' }}>
          <TouchableOpacity onPress={signOut}>
            <AntDesign name="logout" size={24} color={colors.white} />
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <View style={styles.containerCount}>
        <View style={styles.wrapperCount}>
          <Text color={colors.text} fontWeight="bold" fontSize={14}>
            Total de paciente
          </Text>
          <Text color={colors.text} fontWeight="bold" fontSize={14}>
            {patient.length}
          </Text>
        </View>
      </View>

      <FlatList
        data={compare(patient)}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 100 }}
        ListEmptyComponent={emptyComponent}
        renderItem={({ item }) => <CardPatient item={item} />}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        showsVerticalScrollIndicator={false}
      />

      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={[colors.gradientPrimary, colors.gradientSecondary]}
        style={styles.gradientButton}
      >
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={() => navigate('register', { type: 'register' })}
        >
          <Ionicons name="add-sharp" size={28} color={colors.white} />
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};
