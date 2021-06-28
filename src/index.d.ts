import React from 'react';

declare module 'react-native-soft-input-mode' {
  const types: {
    useMode: (mode: number) => void;
    withMode: (
      WrappedComponent: React.ComponentClass<any>,
      mode: number
    ) => React.Component;
    set: (value: number) => void;
    reset: () => void;
    ADJUST_NOTHING: number;
    ADJUST_PAN: number;
    ADJUST_RESIZE: number;
    ADJUST_UNSPECIFIED: number;
  };

  export default types;
}
