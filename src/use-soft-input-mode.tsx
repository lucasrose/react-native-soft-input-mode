import { useEffect } from 'react';
import { Platform } from 'react-native';

import SoftInputMode from './index';

const useSoftInputModeAndroid = (mode: number) => {
  useEffect(() => {
    SoftInputMode.set(mode);

    return () => {
      SoftInputMode.set(SoftInputMode.ADJUST_PAN);
    };
  });
};

export const useSoftInputMode =
  Platform.OS === 'android' ? useSoftInputModeAndroid : () => {};
