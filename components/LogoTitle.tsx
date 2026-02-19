import { StyleSheet, Text, View } from "react-native";
import { SvgProps } from "react-native-svg";
import { colors, fonts } from "../constants/constants";
import { shadowStyle } from "../helper/shadow";

type Props = {
    logo: React.FC<SvgProps>;
    title?: string;
    variant?: "splash" | "auth";
    containerStyle?: object;
    logoStyle?: object;
    textStyle?: object;
    descriptionStyle?: object;
};

const LogoTitle = ({
    logo: Logo,
    title = "FinWise",
    variant = "auth",
    containerStyle,
    logoStyle,
    textStyle,
    descriptionStyle,
}: Props) => {
    // Default styles per variant
    const variants = {
        splash: {
            textColor: colors.textColor,
            logoColor: colors.bar,
            shadowColor: "rgba(0,0,0,0.25)",
            marginTop: 12,
        },
        auth: {
            textColor: colors.background,
            logoColor: colors.background,
            shadowColor: null,
            marginTop: 12,
        },
    };

    const { textColor, logoColor, shadowColor, marginTop } = variants[variant];

    return (
        <View style={[styles.wrapper, containerStyle]}>
            <Logo
                width={109}
                height={114}
                color={logoColor}
                style={logoStyle}
            />
            <Text
                style={[
                    styles.text,
                    { color: textColor, marginTop },
                    shadowColor ? shadowStyle.text : null,
                    textStyle,
                ]}
            >
                {title}
            </Text>

            {/* Only show description for auth variant */}
            {variant === "auth" && (
                <Text
                    style={[
                        styles.description,
                    ]}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                </Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        alignItems: "center",
    },
    text: {
        fontSize: 52.14,
        lineHeight: 57,
        fontFamily: fonts.semiBold,
    },
    description: {
        fontSize: 14,
        lineHeight: 20,
        fontFamily: fonts.semiBold,
        color: colors.letterIcon,
        textAlign: "center",
        marginTop: 3,
    },
});

export default LogoTitle;
