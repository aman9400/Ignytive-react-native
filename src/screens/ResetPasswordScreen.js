import React, { useState } from "react";
import {
  Keyboard,
  TouchableWithoutFeedback,
  SafeAreaView,
  View,
} from "react-native";
import Backbround from "../components/Backbround";
import BackButton from "../components/BackButton";
import Logo from "../components/Logo";
import Header from "../components/Header";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import { emailValidator } from "../helpers/emailValidator";
import HeaderBack from "../components/header/HeaderBack";
import AppButton from "../components/Buttons/AppButton";

export default function ResetPasswordScreen({ navigation }) {
  const [email, setEmail] = useState({ value: "", error: "" });

  const sendResetPasswordEmail = () => {
    const emailError = emailValidator(email.value);
    if (emailError) {
      setEmail({ ...email, error: emailError });
      return;
    }
    navigation.navigate("LoginScreen");
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <HeaderBack
          title={"Forget Password"}
          onPress={() => navigation.replace("LoginScreen")}
        />
        <View style={{justifyContent: 'center',flex:1,padding:30}}>
          {/* <BackButton goBack={navigation.goBack} /> */}
          <View style={{ alignSelf: "center", alignItems: "center" }}>
            <Logo />
            <Header>Restore Password</Header>
          </View>
          <View style={{ width: "95%", alignSelf: "center" }}>
            <TextInput
              label="E-mail address"
              returnKeyType="done"
              value={email.value}
              onChangeText={(text) => setEmail({ value: text, error: "" })}
              error={!!email.error}
              errorText={email.error}
              autoCapitalize="none"
              autoCompleteType="email"
              textContentType="emailAddress"
              keyboardType="email-address"
              description="You will receive email with password reset link."
            />
            {/* <Button
              mode="contained"
              onPress={sendResetPasswordEmail}
              style={{ marginTop: 16, justifyContent: "center" }}
            >
              Reset Password
            </Button> */}
            <AppButton title={'Forget Password'} onPress={sendResetPasswordEmail}/>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
