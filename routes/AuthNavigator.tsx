import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthLandingScreen from "../screens/auth/AuthLandingScreen";
import OnBoardingScreen from "../screens/auth/OnBoardingScreen";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AuthLanding" component={AuthLandingScreen} />
      <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
