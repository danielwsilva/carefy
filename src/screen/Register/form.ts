import * as Yup from 'yup';

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
  name: Yup.string().required('Campo obrigatório.'),
  document: Yup.string().required('Campo obrigatório.'),
  birth: Yup.string().required('Campo obrigatório.'),
  phone: Yup.string().required('Campo obrigatório.'),
  email: Yup.string().required('Campo obrigatório.'),
});
