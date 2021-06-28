import SoftInputMode from 'react-native-soft-input-mode';

export const ModeMap: { [key: string]: number } = {
  adjustNothing: SoftInputMode.ADJUST_NOTHING,
  adjustPan: SoftInputMode.ADJUST_PAN,
  adjustResize: SoftInputMode.ADJUST_RESIZE,
  adjustUnspecified: SoftInputMode.ADJUST_UNSPECIFIED,
};
