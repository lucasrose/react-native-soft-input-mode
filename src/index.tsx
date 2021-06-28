import { NativeModules } from 'react-native';

type SoftInputModeType = {
  multiply(a: number, b: number): Promise<number>;
};

const { SoftInputMode } = NativeModules;

export default SoftInputMode as SoftInputModeType;
