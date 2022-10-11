import React, { useEffect } from "react";
import "react-native-gesture-handler";
import { Provider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { theme } from "./src/core/theme";
import {
  Splash,
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
  CoreCapability,
  CoreIndustry,
  CompleteProfile,
  HomeScreen,
  Comment,
  Profile,
  TermCondition,
  AboutUs,
  ChangePassword,
  ApplicantsDetails,
  MessageScreen,
  Messages,
} from "./src/screens";
import PostBox from "./src/components/PostBox";
import SplashScreen from "react-native-splash-screen";
import { Community, Home, Chats } from "./src/bottombar";
const Stack = createStackNavigator();
export default function App() {
  // useEffect(() => {
  //   SplashScreen.hide();
  // }, []);
  return (
    <Provider theme={theme}>
      <NavigationContainer independent={true}>
        <Stack.Navigator
          initialRouteName="HomeScreen"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Community" component={Community} />
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen
            name="Complete Profile"
            component={Profile}
            options={{
              headerBackTitleVisible: false,
              headerTitleStyle: { textAlign: "center" },
              headerTitleAlign: "center",
              headerShown: true,
            }}
          />
          {/* <Stack.Screen name="Messages" component={Messages} /> */}
          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
          <Stack.Screen name="CompleteProfile" component={CompleteProfile} />
          <Stack.Screen name="CoreCapability" component={CoreCapability} />
          <Stack.Screen name="CoreIndustry" component={CoreIndustry} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="PostBox" component={PostBox} />
          <Stack.Screen name="Comment" component={Comment} />
          <Stack.Screen name="TermCondition" component={TermCondition} />
          <Stack.Screen name="AboutUs" component={AboutUs} />
          <Stack.Screen
            name="Applicants Details"
            component={ApplicantsDetails}
          />
          <Stack.Screen name="ChangePassword" component={ChangePassword} />
          <Stack.Screen name="MessageScreen" component={MessageScreen} />
          <Stack.Screen name="Messages" component={Messages} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
