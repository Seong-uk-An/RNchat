import { color } from "react-native-reanimated";

const colors = {
  white: "#fff",
  black: "#000",
  gray_0: "#d5d5d5",
  gray_1: "#a6a6a6",
  red: "#e84118",
  blue: "#3679fe",
};

export const theme = {
  background: colors.white,
  text: colors.black,
  errorText: colors.red,
  imageBackground: colors.gray_0,
  imageButtonBackground: colors.gray_1,
  imageButtonIcon: colors.white,
  label: colors.gray_1,
  inputPlaceholder: colors.gray_1,
  inputBorder: colors.gray_1,
  inputDisabledBackground: colors.gray_0,
  buttonBackground: colors.blue,
  buttonTitle: colors.white,
  buttonUnfilledTitle: colors.blue,
  buttonLogout: colors.red,
  headerTintColor: colors.black,
  tabActiveColor: colors.blue,
  tabInactiveColor: colors.gray_1,
  spinnerBackground: colors.black,
  spinnerIndicator: colors.white,
};
