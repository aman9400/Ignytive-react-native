import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import React from "react";
const { height, width } = Dimensions.get("window");
export default function NotificationBox() {
  return (
    <View>
      <View style={styles.notibox}>
        <Image
          style={styles.avatar}
          source={require("../assets/profile2.jpg")}
        />
        <View style={styles.notification}>
          <View>
            <Text style={styles.name}>Vanessa Hudgens</Text>
            <Text style={styles.description}>Hey user! You have a new notification</Text>
            <Text style={styles.time}>1 h Ago</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  notibox: {
    display:'flex',
    flexDirection: "row",
    width: "100%",
    height: height / 9.5,
    marginBottom:10,
  },
  avatar: {
    height: 25,
    width: 25,
    borderRadius: 50,
    marginRight: 10,
  },
  notification: {
    borderBottomWidth: 1,
    borderColor: "#DADADA",
    width: "90%",
    height:'85%',
    backgroundColor:'#fff'
  },
  name: {
    color: "#808CA4",
    fontSize: 16,
    // marginTop: 3,
  },
  description:{
    color:'#BFBFBF',
    fontSize:13
  },
  time:{
    color:'#D7D8DA',
    fontSize:13
  }
});
