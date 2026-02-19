import { StyleSheet } from "react-native";

export const shadowStyle = StyleSheet.create({
    text: {
        textShadowColor: "rgba(0,0,0,0.25)",
        textShadowOffset: { width: 0, height: 4 },
        textShadowRadius: 4,
    },
});