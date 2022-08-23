import React, { useState } from "react";
import { Avatar, Input, Icon } from "react-native-elements";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

// import { Picker } from "@react-native-picker/picker";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import HeaderBack from "../components/header/HeaderBack";

import { nameValidator } from "../helpers/nameValidator";
import CountryDropdown from "../components/dropdown/CountryDropdown";
import CityDropdown from "../components/dropdown/CityDropdown";

export default function CompleteProfile({ navigation }) {
  const [city, setCity] = useState();
  const [country, setCountry] = useState();
  const [selectedValue, setSelectedValue] = useState("java");
  const [name, setName] = useState({ value: "", error: "" });

  const onSignUpPressed = () => {
    const nameError = nameValidator(name.value);
    if (nameError) {
      setName({ ...name, error: nameError });
      return alert("Name can't be Empty.");
    }
    navigation.reset({
      index: 0,
      routes: [{ name: "CoreCapability" }],
    });
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <HeaderBack
          title={"Complete Profile"}
          onPress={() => navigation.replace("RegisterScreen")}
        />
        <StatusBar backgroundColor="#fff" barStyle={"dark-content"} />
        <View style={styles.backg}>
          <View style={styles.complete_profile}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                marginBottom: 100,
              }}
            >
              <Avatar
                size={130}
                rounded
                source={require("../assets/ProfilePicture.png")}
                title="dp"
                containerStyle={{ backgroundColor: "grey" }}
              >
                {/* <Avatar.Accessory size={22} /> */}
              </Avatar>
            </View>
            <View style={styles.data}>
              <TextInput
                label="Full Name"
                returnKeyType="next"
                value={name.value}
                onChangeText={(text) => setName({ value: text, error: "" })}
                error={!!name.error}
                errorText={name.error}
              />
              <View>
                <CountryDropdown
                  label={"Country "}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
                  }}
                />
                <CityDropdown
                  label={"City "}
                  onSelect={(selectedItem, index) => {
                    setCity(selectedItem);
                    console.log(selectedItem, index);
                  }}
                />
              </View>
              {/* <View style={{height:'10%'}}></View> */}
            </View>
          </View>
          <View
            style={{
              height: "20%",
              justifyContent: "center",
              paddingBottom: 15,
            }}
          >
            <Button
              style={{
                width: "60%",
                alignSelf: "center",
                justifyContent: "center",
              }}
              mode="contained"
              onPress={onSignUpPressed}
            >
              Continue
            </Button>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#fff",
            alignItems: "center",
            paddingBottom: 5,
          }}
        ></View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  complete_profile: {
    position: "relative",
    width: "100%",
  },
  input_field: {
    borderBottomColor: "#DADADA",
    borderBottomWidth: 3,
    backgroundColor: "#fff",
    marginTop: 20,
  },

  up: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#fff",
  },

  line: {
    height: 20,
    width: "100%",
    marginBottom: "10%",
    borderBottomWidth: 2,
    backgroundColor: "#fff",
    borderBottomColor: "#E7E7E7",
  },
  backg: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
    padding: 10,
    alignSelf: "center",
  },
  data: {
    width: "95%",
    alignSelf: "center",
    backgroundColor: "#fff",
  },
  input: {
    backgroundColor: "#fff",
    fontSize: 18,
  },
});
