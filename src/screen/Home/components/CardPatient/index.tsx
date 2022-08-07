import React from 'react';
import { View } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { Ionicons } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import { Text } from '../../../../components/Text';
import { PatientDTO, usePatient } from '../../../../hooks/patient';
import theme from '../../../../styles/theme';

import { ButtonSwipe } from '../ButtonSwipe';
import { styles } from './styles';

type CardPatientProps = {
  item: PatientDTO;
};

export const CardPatient = ({ item }: CardPatientProps) => {
  const { navigate } = useNavigation();
  const { remove } = usePatient();

  const { colors } = theme;

  const rightSwipe = () => (
    <View style={{ flexDirection: 'row' }}>
      <ButtonSwipe
        title="Editar"
        color={colors.swipeEdit}
        icon="edit"
        colorIcon={colors.secondary}
        onPress={() => navigate('register', { type: 'update', patient: item })}
      />
      <ButtonSwipe
        title="Excluir"
        color={colors.swipeDelete}
        icon="delete"
        colorIcon={colors.primary}
        onPress={() => remove(item)}
      />
    </View>
  );

  return (
    <Swipeable overshootRight={false} renderRightActions={rightSwipe}>
      <View style={styles.container}>
        <Ionicons name="medical-outline" size={50} color={colors.primary} />
        <View style={styles.wrapper}>
          <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
            <Text color={colors.text} fontWeight="semiBold" fontSize={12}>
              {'Paciente: '}
            </Text>
            <Text color={colors.textLight} fontWeight="normal" fontSize={14}>
              {item.name}
            </Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
            <Text color={colors.text} fontWeight="semiBold" fontSize={12}>
              {'Documento: '}
            </Text>
            <Text color={colors.textLight} fontWeight="normal" fontSize={14}>
              {item.document}
            </Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
            <Text color={colors.text} fontWeight="semiBold" fontSize={12}>
              {'Telefone: '}
            </Text>
            <Text color={colors.textLight} fontWeight="normal" fontSize={14}>
              {item.phone}
            </Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
            <Text color={colors.text} fontWeight="semiBold" fontSize={12}>
              {'E-mail: '}
            </Text>
            <Text color={colors.textLight} fontWeight="normal" fontSize={14}>
              {item.email}
            </Text>
          </View>
        </View>
      </View>
    </Swipeable>
  );
};
