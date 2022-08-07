import React from 'react';
import { Keyboard, StatusBar, TouchableWithoutFeedback, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Masks } from 'react-native-mask-input';
import uuid from 'react-native-uuid';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RFValue } from 'react-native-responsive-fontsize';
import { Formik } from 'formik';

import Input from '../../components/Input';
import { Text } from '../../components/Text';
import { usePatient } from '../../hooks/patient';
import { RouteProps } from '../../routes/app.routes';
import theme from '../../styles/theme';

import { validationSchema, PatientForm, getInitialValues } from './form';
import { styles } from './styles';

type RouteParam = NativeStackScreenProps<RouteProps, 'register'>;

export const Register = ({ route: { params } }: RouteParam) => {
  const { register, update } = usePatient();
  const { navigate, goBack } = useNavigation();
  const { type, patient } = params;

  const { colors } = theme;

  const onSubmit = (values: PatientForm) => {
    if (type === 'register') {
      const data = { id: String(uuid.v4()), ...values };
      register(data);
    } else {
      const data = { id: patient!.id, ...values };
      update(data);
    }

    navigate('home');
  };

  const disabled = (values: PatientForm) => {
    return (
      !values.name || 
      !values.document ||
      !values.birth ||
      !values.phone ||
      !values.email
    );
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.header}>
          <TouchableOpacity onPress={goBack}>
            <MaterialCommunityIcons name="arrow-left" size={RFValue(18)} color={colors.text} />
          </TouchableOpacity>
          <Text fontSize={14} fontWeight="semiBold">
            {type === 'register' ? 'Cadastrar' : 'Editar'}
          </Text>
          <View style={{ width: RFValue(18) }} />
        </View>

        <Formik
          initialValues={getInitialValues(patient!)}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          validateOnChange={false}
          validateOnBlur={false}
        >
          {({ handleChange, handleSubmit, values, errors, setErrors, setValues }) => (
            <View style={{ flex: 1 }}>
              <Input
                placeholder="Nome"
                valid={errors.name === '' || !errors.name}
                errorText={errors.name}
                onChangeText={handleChange('name')}
                onChange={() => setErrors({ ...errors, name: '' })}
                value={values.name}
              />
              <Input
                placeholder="Documento"
                valid={errors.document === '' || !errors.document}
                errorText={errors.document}
                onChangeText={handleChange('document')}
                onChange={() => setErrors({ ...errors, document: '' })}
                value={values.document}
                mask={Masks.BRL_CPF}
                keyboardType="numeric"
              />
              <Input
                placeholder="Data de nascimento"
                valid={errors.birth === '' || !errors.birth}
                errorText={errors.birth}
                onChangeText={handleChange('birth')}
                onChange={() => setErrors({ ...errors, birth: '' })}
                value={values.birth}
                mask={Masks.DATE_DDMMYYYY}
                keyboardType="numeric"
              />
              <Input
                placeholder="Telefone"
                valid={errors.phone === '' || !errors.phone}
                errorText={errors.phone}
                onChangeText={handleChange('phone')}
                onChange={() => setErrors({ ...errors, phone: '' })}
                value={values.phone}
                mask={Masks.BRL_PHONE}
                keyboardType="numeric"
              />
              <Input
                placeholder="E-mail"
                valid={errors.email === '' || !errors.email}
                errorText={errors.email}
                onChangeText={handleChange('email')}
                onChange={() => setErrors({ ...errors, email: '' })}
                value={values.email}
              />

              <View style={styles.containerButton}>
                <TouchableOpacity
                  disabled={disabled(values)}
                  style={[ styles.button, { backgroundColor: disabled(values) ? colors.textLight : colors.primary }]} 
                  activeOpacity={0.7}
                  onPress={() => handleSubmit()}
                >
                  <Text color={colors.white}>Confirmar</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </TouchableWithoutFeedback>
  );
};
