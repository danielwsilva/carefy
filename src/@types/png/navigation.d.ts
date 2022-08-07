export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      signin: undefined;
      home: undefined;
      register: { 
        type: 'register' | 'update',
        patient?: PatientDTO;
      };
    }
  }
}