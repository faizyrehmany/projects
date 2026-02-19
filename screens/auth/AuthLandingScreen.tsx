import { StyleSheet, View } from "react-native";
import FinWiseLogo from "../../assets/images/logo.svg";
import AppButton from "../../components/AppButton";
import ForgotPassword from "../../components/ForgotPassword";
import LogoTitle from "../../components/LogoTitle";
import { colors } from "../../constants/constants";


type Props = {
    navigation: any;
};

const AuthLandingScreen = ({ navigation }: Props) => {
    return (
        <View style={styles.container}>
            <LogoTitle
                logo={FinWiseLogo}
                variant="auth"
            />

            <View style={styles.buttonContainer}>
                <AppButton
                    title="Log In"
                    variant="primary"
                    onPress={() => { }}
                />

                <AppButton
                    title="Sign Up"
                    variant="secondary"
                    onPress={() => navigation.navigate("OnBoardingScreen")}
                />

                <ForgotPassword
                    onPress={() => navigation.navigate("ForgotPassword")}
                />

            </View>

        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.textColor,
    },

    buttonContainer: {
        marginTop: 42
    }
});

export default AuthLandingScreen;
