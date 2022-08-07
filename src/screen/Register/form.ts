import * as Yup from 'yup';

import { customValidations } from '../../utils/validations';

export type PatientForm = {
  name: string;
  document: string;
  birth: string;
  phone: string;
  email: string;
}

export const getInitialValues = (listItem: PatientForm) => {
  return {
    name: listItem?.name || '',
    document: listItem?.document || '',
    birth: listItem?.birth || '',
    phone: listItem?.phone || '',
    email: listItem?.email || ''
  };
};

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .test('name', 'Nome completo como no documento.', customValidations.isValidFullName)
    .max(50, 'Insira um nome menor.'),
  document: Yup.string().test('document', 'CPF inválido.', customValidations.isValidCpf),
  birth: Yup.string().length(10, 'Data de nascimento inválido.'),
  phone: Yup.string()
    .test('phone', 'O número de celular deve ser DDD + 90000-0000.', customValidations.isValidNinthDigit)
    .length(15, 'DDD + 9 números, exemplo (00) 90000-0000.'),
  email: Yup.string().email('E-mail inválido.')
});
