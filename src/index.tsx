import { NativeModules } from 'react-native';
import * as SoftInputModeHook from './use-soft-input-mode';
import * as SoftInputModeHOC from './with-soft-input-mode';

type SoftInputModeType = {
  set: (value: number) => void;
  reset: () => void;
  ADJUST_NOTHING: number;
  ADJUST_PAN: number;
  ADJUST_RESIZE: number;
  ADJUST_UNSPECIFIED: number;
};

const { SoftInputMode } = NativeModules;

export const { useSoftInputMode } = SoftInputModeHook;
export const { withSoftInputMode } = SoftInputModeHOC;

export default SoftInputMode as SoftInputModeType;
