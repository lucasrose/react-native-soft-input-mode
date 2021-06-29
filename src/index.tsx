import { NativeModules, Platform } from 'react-native';
import type { SoftInputModeType } from './types';
import * as SoftInputModeHook from './use-soft-input-mode';
import * as SoftInputModeHOC from './with-soft-input-mode';

const SoftInputModeIOS: SoftInputModeType = {
  set: () => {},
  reset: () => {},
  ADJUST_NOTHING: 0,
  ADJUST_PAN: 0,
  ADJUST_RESIZE: 0,
  ADJUST_UNSPECIFIED: 0,
};

const { SoftInputMode } =
  Platform.OS === 'android'
    ? NativeModules
    : { SoftInputMode: SoftInputModeIOS };

export const { useSoftInputMode } = SoftInputModeHook;
export const { withSoftInputMode } = SoftInputModeHOC;

export default SoftInputMode as SoftInputModeType;
