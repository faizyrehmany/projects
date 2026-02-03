import { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { colors, fonts, images } from "../constants/constants";

type Props = {
    navigation: any;
};

const SplashScreen = ({ navigation }: Props) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            // navigation.replace("Home");
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <View style={styles.container}>
            <Image
                source={images.logo}
                style={styles.logo}
                resizeMode="contain"
            />
            <Text style={styles.text}>FinWise</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.background,
    },
    text: {
        color: "#fff",
        fontSize: 52.14,
        lineHeight: 57,
        fontFamily: fonts.semiBold,
        marginTop: 12,
        textShadowColor: "rgba(0,0,0,0.25)", // black with 25% opacity
        textShadowOffset: { width: 0, height: 4 }, // move shadow down
        textShadowRadius: 4, // blur radius

    },

    logo: {
        width: 109,
        height: 114,
        marginLeft: 7,

    },
});

export default SplashScreen;
