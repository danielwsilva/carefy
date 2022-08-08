import * as WebBrowser from 'expo-web-browser';
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from './auth';

export type PatientDTO = {
  id: string;
  name: string;
  document: string;
  birth: string;
  phone: string;
  email: string;
};

type PatientStorage = {
  [key: string]: PatientDTO[];
};

type PatientContextData = {
  patient: PatientDTO[];
  register: (values: PatientDTO) => void;
  remove: (values: PatientDTO) => void;
  update: (values: PatientDTO) => void;
};

type PropsProvider = {
  children: ReactNode;
};

export const patientStorageKey = '@carefy:patients';

WebBrowser.maybeCompleteAuthSession();

const PatientContext = createContext<PatientContextData>({} as PatientContextData);

export function PatientProvider({ children }: PropsProvider) {
  const [patient, setPatient] = useState<PatientDTO[]>([]);

  const { user } = useAuth();

  useEffect(() => {
    loadStorageData();
  }, [user]);

  const loadStorageData = async () => {
    const patientStoraged = await AsyncStorage.getItem(patientStorageKey);

    if (patientStoraged) {
      const storage = JSON.parse(patientStoraged) as PatientStorage;

      if (storage[user.login]) {
        setPatient(storage[user.login]);
      } else {
        setPatient([]);
      }
    }
  };

  const saveStorage = async (patient: PatientDTO[]) => {
    const storage = {
      [user.login]: patient
    };

    await AsyncStorage.setItem(patientStorageKey, JSON.stringify(storage));
  };

  const register = async (values: PatientDTO) => {
    const newArray = [...patient, values];
    setPatient((prevState) => [...prevState, values]);
    saveStorage(newArray);
  };

  const remove = async (values: PatientDTO) => {
    const newArray = patient.filter((p: PatientDTO) => p.id !== values.id);
    setPatient(newArray);
    saveStorage(newArray);
  };

  const update = async (values: PatientDTO) => {
    await AsyncStorage.removeItem(patientStorageKey);
    const filter = patient.filter((p: PatientDTO) => p.id !== values.id);
    const newArray = [...filter, values];
    setPatient(newArray);
    saveStorage(newArray);
  };

  return <PatientContext.Provider value={{ patient, register, remove, update }}>{children}</PatientContext.Provider>;
}

export function usePatient() {
  const context = useContext(PatientContext);
  return context;
}
