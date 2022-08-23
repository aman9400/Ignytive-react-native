import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { Text } from "react-native-paper";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import Backbround from "../components/Backbround";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import BackButton from "../components/BackButton";
import { theme } from "../core/theme";
import { emailValidator } from "../helpers/emailValidator";
import { passwordValidator } from "../helpers/passwordValidator";
import { nameValidator } from "../helpers/nameValidator";
import { ScrollView } from "react-native-gesture-handler";
import AppButton from "../components/Buttons/AppButton";
const { height, width } = Dimensions.get("window");
export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState({ value: "", error: "" });
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });

  const onSignUpPressed = () => {
    const nameError = nameValidator(name.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    if (emailError || passwordError || nameError) {
      setName({ ...name, error: nameError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    const kp = "" + name.value;
    const nameArray = kp.split(" ");
    const roleName = "active";
    const first_name = "test12";
    const last_name = "admin12";
    const roleValue = "3";

    fetch("https://api.ignytive.com/ignytive/users", {
      method: "POST",
      body: JSON.stringify({
        email: email.value,
        password: password.value,
        first_name: nameArray[0],
        last_name: nameArray[1],
        status: "active",
        role: "3",
      }),
      headers: {
        Authorization: "Bearer dYO9d7ORerhCEzUySHKSg7Ag",
        "content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //Hide Loader
        console.log(responseJson);
        if (responseJson.data == null) {
          alert("Invalid entry, please use full name in name column");
        } else {
          navigation.reset({
            index: 0,
            routes: [{ name: "CompleteProfile" }],
          });
        }
      })
      .catch((error) => {
        //Hide Loader
        alert("Already registered");
        console.error(error);
      });
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <SafeAreaView style={{ height: height - 30 }}>
          <Backbround>
            <StatusBar backgroundColor="#fff" barStyle={"dark-content"} />
            <View style={styles.css}>
              <Logo />
              <Text style={styles.tag_line}>
                Community For Exprienced Profesionals empowered by Technology.
              </Text>
            </View>
            {/* <BackButton goBack={navigation.goBack} /> */}
            <Header style={styles.head}>Sign Up</Header>
            <TextInput
              style={styles.textinputs}
              label="Username"
              returnKeyType="next"
              value={name.value}
              onChangeText={(text) => setName({ value: text, error: "" })}
              error={!!name.error}
              errorText={name.error}
            />
            <TextInput
              style={styles.textinputs}
              label="Email"
              returnKeyType="next"
              value={email.value}
              onChangeText={(text) => setEmail({ value: text, error: "" })}
              error={!!email.error}
              errorText={email.error}
              autoCapitalize="none"
              autoCompleteType="email"
              textContentType="emailAddress"
              keyboardType="email-address"
            />
            <TextInput
              style={styles.textinputs}
              label="Password"
              returnKeyType="done"
              value={password.value}
              onChangeText={(text) => setPassword({ value: text, error: "" })}
              error={!!password.error}
              errorText={password.error}
              secureTextEntry
            />

            <AppButton title={"Sign Up"} onPress={onSignUpPressed} />
            <View style={styles.row}>
              <Text style={styles.account}>Already have an account? </Text>
              <TouchableOpacity
                onPress={() => navigation.replace("LoginScreen")}
              >
                <Text style={styles.link}>Log in</Text>
              </TouchableOpacity>
            </View>
          </Backbround>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  link: {
    fontSize: 16,
    color: "#FE5600",
  },
  tag_line: {
    fontSize: 16,
    marginBottom: 60,
    color: theme.colors.primary,
    textAlign: "center",
  },
  css: {
    marginLeft: 20,
    marginRight: 20,
    alignItems: "center",
  },
  head: {
    fontSize: 20,
    marginBottom: 20,

    color: "#FE6618",
  },
  textinputs: {
    width: "90%",
    alignSelf: "center",
  },
  account: {
    fontSize: 16,
  },
});
