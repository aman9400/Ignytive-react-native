import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
const { height, width } = Dimensions.get("window");

export default function ChatBox({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>navigation.navigate("ChatScreen")}>
      <View style={styles.profilebox}>
        <Image
          style={styles.profilepicture}
          source={require("../assets/profile2.jpg")}
        />
        <View style={styles.profiletext}>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
            }}
          >
            <Text style={styles.profilename}>Vanessa Hudgens</Text>
            <View style={styles.timebox}>
              <Text style={styles.time}>2:48 PM</Text>
            </View>
            <View style={styles.gapbetween}></View>
            <View style={styles.message_count_circle}>
              <Text style={styles.message_number}>1</Text>
            </View>
          </View>
          <Text style={styles.status}>Recent messege will be appear here.</Text>
        </View>
      </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FBFCFE',
  },
  profilebox: {
    padding:10,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#AFB5C6",
    width: "100%",
    alignSelf: "center",
    borderLeftWidth: 8,
    flexDirection: "row",
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor:'#fff'
    

  },
  profilepicture: {
    height: 45,
    width: 45,
    borderRadius: 45,
    alignSelf: "center",
  },
  profiletext: {
    width: "88%",
    alignSelf: "center",
    marginLeft: 20,
  },
  profilename: {
    color: "#B0B0B0",
    fontSize: 18,
    fontFamily: "OpenSans-Bold",
  },
  time: {
    color: "#B0B0B0",
    fontSize: 14,
    fontFamily: "OpenSans-Bold",
  },
  timebox: {
    marginLeft: width / 7,
    width: width / 3,
  },
  status: {
    color: "#A5A7AD",
    height: 20,
    fontSize: 14,
    width: width / 1.7,
  },
  gapbetween: {
    height: 35,
  },
  message_count_circle: {
    height: 25,
    backgroundColor: "#FE4C00",
    width: 25,
    position: "absolute",
    top: 25,
    right: 30,
    borderRadius: 15,
    justifyContent: "center",
  },
  message_number: {
    alignSelf: "center",
    fontFamily:'OpenSans-SemiBold',
    color:'#fff',
    fontSize:14
  },
});
