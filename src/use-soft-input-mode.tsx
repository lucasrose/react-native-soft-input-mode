import { useEffect } from 'react';

import SoftInputMode from 'react-native-soft-input-mode';

export const useSoftInputMode = (mode: number) => {
  useEffect(() => {
    SoftInputMode.set(mode);

    return () => {
      SoftInputMode.set(SoftInputMode.ADJUST_PAN);
    };
  });
};
