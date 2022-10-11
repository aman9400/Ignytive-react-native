import React, { useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Alert,
  StatusBar,
  SafeAreaView,
} from "react-native";
import AppButton from "../components/Buttons/AppButton";
import { Text } from "react-native-paper";
import Backbround from "../components/Backbround";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import BackButton from "../components/BackButton";
import { theme } from "../core/theme";
// import SyncStorage from 'sync-storage';
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { emailValidator } from "../helpers/emailValidator";
import { passwordValidator } from "../helpers/passwordValidator";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errortext, setErrortext] = useState("");

  const onLoginPressed = () => {
    setErrortext("");
    if (!email) {
      alert("Please enter your email.");
      return;
    }
    if (!password) {
      alert("Please enter your password.");
      return;
    }

    let dataToSend = { email: email, password: password };
    // navigation.reset({
    //   index: 0,
    //   routes: [{ name: "HomeScreen" }],
    // });

    fetch("https://api.ignytive.com/auth/login?fields=*.*", {
      method: "POST",
      body: JSON.stringify(dataToSend),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        "content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {

        console.log(responseJson.data != null)
        console.log(responseJson)
        if (responseJson.data.access_token != null) {

          // save the user_token for further use
          // SyncStorage.set("access_token", responseJson.data.access_token)
          
          alert("Logged in Successfully! :       ");
          navigation.reset({
            index: 0,
            routes: [{ name: "HomeScreen" }],
          });
        } else {
          alert(responseJson.errors[0].message );
        
        }
      })
      .catch((error) => {
        alert("Please check your email or password. " + error);
      });
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <Backbround>
          <StatusBar backgroundColor="#fff" barStyle={"dark-content"} />
          <View style={styles.css}>
            <Logo />
            <Text style={styles.tag_line}>
              Community For Exprienced Profesionals empowered by Technology.
            </Text>
          </View>
          <Header style={styles.head}>Login</Header>
          <TextInput
            style={styles.textinputs}
            label="Email"
            returnKeyType="next"
            onChangeText={(email) => setEmail(email)}
            error={!!email.error}
            errorText={email.error}
            autoCapitalize="none"
            autoCompleteType="email"
            textContentType="emailAddress"
            keyboardType="email-address"
            blurOnSubmit={true}
          />
          <TextInput
            style={styles.textinputs}
            label="Password"
            returnKeyType="done"
            onChangeText={(password) => setPassword(password)}
            error={!!password.error}
            errorText={password.error}
            keyboardType="default"
            blurOnSubmit={true}
            secureTextEntry={true}
            underlineColorAndroid="#f000"
          />
          <View style={styles.forgotPassword}>
            <TouchableOpacity
              onPress={() => navigation.navigate("ResetPasswordScreen")}
            >
              <Text style={styles.forgot}>Forgot password?</Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: "100%", paddingHorizontal: 15 }}>
            <AppButton title={"Login"} onPress={onLoginPressed} />
          </View>
          <View style={styles.row}>
            <Text style={styles.account}>Don’t have an account? </Text>
            <TouchableOpacity
              onPress={() => navigation.replace("RegisterScreen")}
            >
              <Text style={styles.link}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </Backbround>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: "90%",
    alignItems: "flex-end",
    marginBottom: 24,
  },
  row: {
    flexDirection: "row",
    marginTop: 30,
  },
  forgot: {
    fontSize: 16,
    marginBottom: 20,
    color: "#FE6618",
    fontFamily: "OpenSans-SemiBold",
  },
  link: {
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    color: "#FE5600",
  },
  tag_line: {
    fontSize: 16,
    marginBottom: 80,
    color: theme.colors.primary,
    textAlign: "center",
    fontFamily: "OpenSans-Light",
  },
  head: {
    fontSize: 20,
    marginBottom: 20,
    fontFamily: "OpenSans-ExtraBold",
    color: "#FE6618",
  },
  css: {
    marginLeft: 20,
    marginRight: 20,
    alignItems: "center",
  },
  textinputs: {
    // backgroundColor:'#EFF0F2',
    height: 55,
    width: "90%",
    alignSelf: "center",
  },
  account: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
});
