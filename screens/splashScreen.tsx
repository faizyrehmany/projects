import { useEffect, useRef } from "react";
import { Animated, Easing, StyleSheet, View } from "react-native";
import FinWiseLogo from "../assets/images/logo.svg";
import LogoTitle from "../components/LogoTitle";
import { colors } from "../constants/constants";


type Props = {
  navigation: any;
};


const SplashScreen = ({ navigation }: Props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // opacity
  const scaleAnim = useRef(new Animated.Value(0.8)).current; // scale

  useEffect(() => {
    // Parallel animation: fade-in + scale
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1200,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
      
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 5,
        useNativeDriver: true,
      }),
    ]).start();

    const timer = setTimeout(() => {
      navigation.replace("App"); // navigate after animation
    }, 2000);

    return () => clearTimeout(timer);
  }, []);


  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          opacity: fadeAnim,
          transform: [{ scale: scaleAnim }],
        }}
      >
        <LogoTitle
          logo={FinWiseLogo}
          variant="splash"
        />
      </Animated.View>
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
});

export default SplashScreen;
