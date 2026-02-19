import { useEffect, useEffectEvent, useState } from "react";
import { BackHandler, Dimensions, Image, Pressable, StyleSheet, Text, View } from "react-native";
import AppLayout from "../../components/AppLayout";
import { colors, fonts, onboardingData } from "../../constants/constants";

const { height, width } = Dimensions.get("window");

const OnBoardingScreen = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const current = onboardingData[currentIndex];

    // Handle Next button
    const handleNext = () => {
        if (currentIndex < onboardingData.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            console.log("Finished onboarding");
            // You can navigate to home screen here
        }
    };

    // Back button handler using useEffectEvent (prevents stale closures)
    const handleBackPress = useEffectEvent(() => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1); // go back one step
            return true; // prevent default back behavior (app exit)
        }
        return false; // allow app to exit if on first step
    });

    useEffect(() => {
        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            handleBackPress
        );

        return () => backHandler.remove(); // cleanup
    }, []);

    return (
        <View style={styles.wrapper}>
            {/* Top green text */}
            <View style={styles.header}>
                <Text style={styles.title}>{current.title}</Text>
            </View>

            <AppLayout>
                <View style={styles.contentWrapper}>
                    <Image
                        source={current.image}
                        style={styles.image}
                        resizeMode="contain"
                    />

                    {/* Next Button */}
                    <Pressable style={styles.button} onPress={handleNext}>
                        <Text style={styles.buttonText}>Next</Text>
                    </Pressable>

                    {/* Radio Dots */}
                    <View style={styles.dotsContainer}>
                        {onboardingData.map((_, index) => (
                            <View
                                key={index}
                                style={[styles.dot, index === currentIndex && styles.activeDot]}
                            />
                        ))}
                    </View>
                </View>
            </AppLayout>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: colors.background,
    },
    header: {
        height: height * 0.38, // 38% of screen height
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: Math.round(width * 0.08),
        lineHeight: Math.round(width * 0.104),
        fontFamily: fonts.semiBold,
        textAlign: "center",
    },
    contentWrapper: {
        padding: 24,
        alignItems: "center",
    },
    image: {
        width: "70%",
        aspectRatio: 0.9,
        alignSelf: "center",
    },
    button: {
        width: "100%",
        borderRadius: 14,
        alignItems: "center",
    },
    buttonText: {
        color: colors.bar,
        fontSize: 30,
        fontFamily: fonts.semiBold,
    },
    dotsContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 14,
    },
    dot: {
        width: 13,
        height: 13,
        borderRadius: 10,
        borderWidth: 1.5,
        borderColor: colors.bar,
        backgroundColor: "transparent",
        marginHorizontal: 5,
    },
    activeDot: {
        backgroundColor: colors.background,
        borderWidth: 0,
    },
});

export default OnBoardingScreen;
