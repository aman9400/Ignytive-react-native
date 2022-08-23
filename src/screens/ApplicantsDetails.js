import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import HeaderBack from "../components/header/HeaderBack";
import colors from "../constants/Colors";
import Box from "../components/Buttons/Box";
import ProgressBar from "../components/ProgressBar";
const chat = require("../assets/complete_profile/chats.png");
const profile = require("../assets/profile2.jpg");

export default function ApplicantsDetails({navigation}) {
  return (
    <View style={styles.container}>
      {/* <HeaderBack title={"Applicants Details"} onPress={()=>navigation.navigate('HomeScreen')} /> */}
      <ScrollView>
      <View style={styles.main}>
     
      <View style={styles.profile_holder}>
        <Image style={styles.profile_img} source={profile} />
        <Text style={styles.name}>Vanessa Hudgens</Text>
        <Text style={styles.address}>4443islingtonAve, Toronto,</Text>
      </View>
      <Text style={styles.head}>Skills</Text>
      <View style={styles.skill}>
        <Box text={"HTML"} />
        <Box text={"Java"} />
        <Box text={"PHP"} />
        <Box text={"Photoshop"} />



      </View>
      <Text style={styles.head}>Industry</Text>
      <View style={styles.skill}>
        <Box text={"IT Industry"} />
        <Box text={"IT Industry"} />
      </View>
        <Text style={styles.head}>
          Profile Strength : <Text style={styles.status}>Intermediate</Text>
        </Text>
        <View style={styles.progress}>
          <ProgressBar/>
        </View>
        </View>
        </ScrollView>
        <TouchableOpacity style={styles.chat_container}>
        <Image style={styles.chat_img} source={chat} />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  chat_img: {
    height: 90,
    width: 90,
  },
  chat_container: {
    position: "absolute",
    bottom: 0,
    right: 0,
    // paddingHorizontal: 20,
  },
  profile_img: {
    height: 100,
    width: 100,
    alignSelf: "center",
    marginTop: 40,
    borderWidth: 4,
    borderColor: colors.dark_orange,
    borderRadius: 50,
  },
  name: {
    fontSize: 20,
    color: colors.dark_orange,
    alignSelf: "center",
    marginVertical: 10,
    fontFamily: "OpenSans-Bold",
  },
  address: {
    color: colors.gray,
    alignSelf: "center",
  },
  skill: {
    flexDirection: "row",
    flexWrap:'wrap'
  },
  head: {
    fontFamily: "OpenSans-SemiBold",
    fontSize: 16,
    color: colors.gray,
    marginTop: 30,
  },
  status:{
    color:colors.black
  },
  main:{
    flex:1,
    paddingHorizontal:10
  },
  progress:{
    marginVertical:20,
    marginBottom:100
  }
});
