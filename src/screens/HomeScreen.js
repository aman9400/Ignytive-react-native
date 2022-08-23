import React from "react";
import {
  Animated,
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
} from "react-native";
import ApplicantsDetails from "./ApplicantsDetails";
import Profile from "./Profile";
import Dashboard from "../screens/Dashboard";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Home,
  Community,
  Post,
  Notifications,
  Chats,
  PostPage,
} from "../bottombar";

// Plus...
import plus from "../assets/plus.png";
import MessageScreen from "./MessageScreen";
import Messages from "./Messages";

// Font Awesome Icons...
import { FontAwesome5 } from "react-native-vector-icons";
import { FontAwesome } from "react-native-vector-icons";
import { Entypo } from "react-native-vector-icons";
import { Ionicons } from "react-native-vector-icons";
import { useRef } from "react";
import TermCondition from "./TermCondition";
import AboutUs from "./AboutUs";
import ChangePassword from "./ChangePassword";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const ChatStack = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen
      options={{ headerShown: false }}
      name="MessageScreen"
      component={MessageScreen}
    />
    <Stack.Screen
      name="Messages"
      component={Messages}
      options={({ route }) => ({
        // headerBackTitleVisible: false,
        headerTitleStyle: { textAlign: "center" },
        headerTitleAlign: "center",
        title:route.params.userName,
        headerTitleStyle:{
          fontFamily:"Roboto-Medium",
          fontSize:20
        }
      })}
    />
  </Stack.Navigator>
);

const HomeStack = ({ navigation }) => (
  <Stack.Navigator independent={true}>
    <Stack.Screen
      options={{ headerShown: false }}
      name="Homes"
      component={Home}
    />
    <Stack.Screen
      name="Complete Profile"
      component={Profile}
      options={{
        headerBackTitleVisible: false,
        headerTitleStyle: { textAlign: "center" },
        headerTitleAlign: "center",
      }}
    />
     <Stack.Screen
      name="TermCondition"
      component={TermCondition}
      options={{
        headerBackTitleVisible: false,
        headerTitleStyle: { textAlign: "center" },
        headerTitleAlign: "center",
      }}
    />
     <Stack.Screen
      name="AboutUs"
      component={AboutUs}
      options={{
        headerBackTitleVisible: false,
        headerTitleStyle: { textAlign: "center" },
        headerTitleAlign: "center",
      }}
    />
     <Stack.Screen
      name="ChangePassword"
      component={ChangePassword}
      options={{
        headerBackTitleVisible: false,
        headerTitleStyle: { textAlign: "center" },
        headerTitleAlign: "center",
      }}
    />
  </Stack.Navigator>
);

const CommunityStack = ({ navigation }) => (
  <Stack.Navigator independent={true}>
    <Stack.Screen
      options={{ headerShown: false }}
      name="Community"
      component={Community}
    />
    <Stack.Screen
      name="ApplicantsDetails"
      component={ApplicantsDetails}
      options={{
        headerBackTitleVisible: false,
        headerTitleStyle: { textAlign: "center" },
        headerTitleAlign: "center",
        title: "Applicant Details",
      }}
    />
    <Stack.Screen
      name="Complete Profile"
      component={Profile}
      options={{
        headerBackTitleVisible: false,
        headerTitleStyle: { textAlign: "center" },
        headerTitleAlign: "center",
      }}
    />
  </Stack.Navigator>
);

// const Chattest = ({ navigation }) => (
//   <Tab.Navigator >
//     <Tab.Screen name="Chats" component={Chats} />
//     <Tab.Screen name="ChatScreen" component={ChatScreen}
//      />
//   </Tab.Navigator>
// );
// Hiding Tab Names...

const getRouteName = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route);
  // console.log(route);
  if (
    routeName?.includes("Messages") ||
    routeName?.includes("Complete Profile") ||
    routeName?.includes("ApplicantsDetails") ||
    routeName?.includes('TermCondition')||
    routeName?.includes('AboutUs') ||
    routeName?.includes('ChangePassword')
  ) {
    return "none";
  }
  return "flex";
};

export default function App() {
  // Animated Tab Indicator...
  // const getTabBarVisibility = (route) => {
  //   const routeName = route.state
  //     ? route.state.routes[route.state.index].name
  //     : " ";
  //   if (routeName === "Messages") {
  //     return false;
  //   }
  //   return true;
  // };
  const tabOffsetValue = useRef(new Animated.Value(0)).current;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <StatusBar backgroundColor="#fff" barStyle={"dark-content"} />
      <NavigationContainer independent={true}>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: "#FE5600",
            tabBarInactiveTintColor: "#B1B1B0",
            // Floating Tab Bar...
            tabBarLabelStyle: {
              position: "absolute",
              top: 35,
            },
            tabBarStyle: {
              backgroundColor: "#fff",
              position: "absolute",
              height: 53,
            },
          }}
        >
          {
            // Tab Screens....
            // Tab ICons....
          }
          <Tab.Screen
            name={"Home"}
            component={HomeStack}
            options={({ route }) => ({
              tabBarStyle: { display: getRouteName(route) },
              tabBarIcon: ({ focused }) => (
                <View
                  style={{
                    // centering Tab Button...
                    position: "absolute",
                    top: 10,
                  }}
                >
                  <FontAwesome5
                    name="home"
                    size={20}
                    color={focused ? "#FE5600" : "#B1B1B0"}
                  ></FontAwesome5>
                </View>
              ),
            })}
            listeners={({ navigation, route }) => ({
              // Onpress Update....
              tabPress: (e) => {
                Animated.spring(tabOffsetValue, {
                  toValue: 0,
                  useNativeDriver: true,
                }).start();
              },
            })}
          ></Tab.Screen>

          <Tab.Screen
            name={"Communitys"}
            component={CommunityStack}
            options={({ route }) => ({
              tabBarStyle: { display: getRouteName(route) },
              tabBarIcon: ({ focused }) => (
                <View
                  style={{
                    // centring Tab Button...
                    position: "absolute",
                    top: 10,
                  }}
                >
                  <FontAwesome
                    name="group"
                    size={20}
                    color={focused ? "#FE5600" : "#B1B1B0"}
                  ></FontAwesome>
                </View>
              ),
            })}
            listeners={({ navigation, route }) => ({
              // Onpress Update....
              tabPress: (e) => {
                Animated.spring(tabOffsetValue, {
                  toValue: getWidth(),
                  useNativeDriver: true,
                }).start();
              },
            })}
          ></Tab.Screen>

          {
            // Extra Tab Screen For Action Button..
          }

          <Tab.Screen
            name={"Post"}
            component={EmptyScreen}
            options={{
              tabBarIcon: ({ focused }) => (
                <View
                  style={{
                    width: 23,
                    height: 23,
                    backgroundColor: "#fff",
                    borderWidth: 2,
                    borderColor: "#B1B1B0",
                    borderRadius: 30,
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: -12,
                  }}
                >
                  {/* <TouchableOpacity> */}
                  <Image
                    source={plus}
                    style={{
                      width: 15,
                      height: 15,
                      tintColor: "#B1B1B0",
                    }}
                  ></Image>
                  {/* </TouchableOpacity> */}
                </View>
              ),
            }}
          ></Tab.Screen>

          <Tab.Screen
            name={"Notifications"}
            component={NotificationScreen}
            options={{
              tabBarIcon: ({ focused }) => (
                <View
                  style={{
                    // centring Tab Button...
                    position: "absolute",
                    top: 10,
                  }}
                >
                  <Ionicons
                    name="notifications"
                    size={22}
                    color={focused ? "#FE5600" : "#B1B1B0"}
                  ></Ionicons>
                </View>
              ),
            }}
            listeners={({ navigation, route }) => ({
              // Onpress Update....
              tabPress: (e) => {
                Animated.spring(tabOffsetValue, {
                  toValue: getWidth() * 3,
                  useNativeDriver: true,
                }).start();
              },
            })}
          ></Tab.Screen>

          <Tab.Screen
            name={"Chat"}
            component={ChatStack}
            options={({ route }) => ({
              tabBarStyle: { display: getRouteName(route) },
              tabBarIcon: ({ focused }) => (
                <View
                  style={{
                    // centring Tab Button...
                    position: "absolute",
                    top: 10,
                  }}
                >
                  <Entypo
                    name="chat"
                    size={20}
                    color={focused ? "#FE5600" : "#B1B1B0"}
                  ></Entypo>
                </View>
              ),
            })}
            listeners={({ navigation, route }) => ({
              // Onpress Update....
              tabPress: (e) => {
                Animated.spring(tabOffsetValue, {
                  toValue: getWidth() * 4,
                  useNativeDriver: true,
                }).start();
              },
            })}
          ></Tab.Screen>
        </Tab.Navigator>

        <Animated.View
          style={
            {
              // width: getWidth() - 15,
              // height: 3,
              // backgroundColor: "#FE5600",
              // bottom: Platform.OS == "android" ? 0 : 35,
              // left: 8,
              // borderRadius: 2,
              // transform: [{ translateX: tabOffsetValue }],
            }
          }
        ></Animated.View>
      </NavigationContainer>
    </SafeAreaView>
  );
}

function getWidth() {
  let width = Dimensions.get("window").width;

  // Horizontal Padding = 20...
  width = width - 0;

  // Total five Tabs...
  return width / 5;
}

function EmptyScreen() {
  return <PostPage />;
}

function ChatScreen() {
  return <Chats />;
}

function Homes() {
  return <Home />;
}

function NotificationScreen() {
  return <Notifications />;
}

function CommunityScreen() {
  return <Community />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
