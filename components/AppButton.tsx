import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { colors, fonts } from "../constants/constants";

type Props = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  variant?: "primary" | "secondary";
  style?: ViewStyle;
  textStyle?: TextStyle;
};

const AppButton = ({
  title,
  onPress,
  disabled = false,
  variant = "primary",
  style,
  textStyle,
}: Props) => {
  const variants = {
    primary: {
      backgroundColor: colors.background,
      textColor: colors.letterIcon,
    },
    secondary: {
      backgroundColor: colors.lightGreen,
      textColor: colors.bar,
    },
  };

  const { backgroundColor, textColor, ...rest } = variants[variant];

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.button,
        { backgroundColor },
        rest,
        disabled && styles.disabled,
        style,
      ]}
    >
      <Text
        style={[
          styles.text,
          { color: textColor },
          textStyle,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 207,
    height: 45,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12,
  },
  text: {
    fontSize: 19,
    fontFamily: fonts.semiBold,
  },
  disabled: {
    opacity: 0.5,
  },
});

export default AppButton;
