import { StyleSheet, View } from "react-native";
import { colors } from "../constants/constants";

type Props = {
    children: React.ReactNode;
};

const AppLayout = ({ children }: Props) => {
    return (
        <View style={styles.container}>
            {/* White content container */}
            <View style={styles.content}>
                {children}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background, // green background
        justifyContent: "flex-end",
    },
    content: {
        backgroundColor: colors.whiteCon,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        width: "100%",
        padding: 20, // important so content doesn’t stick to edges
    }

});

export default AppLayout;
