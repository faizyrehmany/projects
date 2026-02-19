import { StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from "react-native";
import { colors, fonts } from "../constants/constants";

type Props = {
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
};

const ForgotPassword = ({ onPress, style, textStyle }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <Text style={[styles.text, textStyle]}>
        Forgot Password?
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    justifyContent: "center",
    alignItems: "center", // spacing from buttons
  },
  text: {
    fontSize: 14,
    fontFamily: fonts.semiBold,
    color: colors.bar,
  },
});

export default ForgotPassword;
