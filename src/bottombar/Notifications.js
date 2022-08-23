import { View, Text,StyleSheet,Image, Dimensions,ScrollView,StatusBar} from "react-native";
import React from "react";
import NotificationBox from "../components/NotificationBox";
const {height,width}=Dimensions.get('window')
export default function Notifications() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#ffffff"
      barStyle={'dark-content'} />
            <View style={styles.head}>
        <Image
          style={styles.profile}
          source={require("../assets/profile1.jpg")}
        />
        <View
          style={{
            alignSelf: "center",
            justifyContent: "center",
            height: 80,
            width: "73%",
          }}
        >
          <Image style={styles.logo} source={require("../assets/logo.png")} />
        </View>
      </View>
      <ScrollView>
      <View style={styles.notifications}>
          <NotificationBox/>
          <NotificationBox/>
          <NotificationBox/>
          <NotificationBox/>
          <NotificationBox/>
          <NotificationBox/>
          <NotificationBox/>
          <NotificationBox/>
          <NotificationBox/>
          <NotificationBox/>
          <NotificationBox/>
      </View>
      <View style={{width:'100%',height:80}}></View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBFCFE",
    // paddingHorizontal: 20,
  }, 
  head: {
    height: 82,
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    backgroundColor:'#fff',
    paddingHorizontal:15,
    borderBottomColor:'#ddd',
    borderBottomWidth:2
  },
  profile: {
    height: 50,
    width: 50,
    borderRadius: 50,
    alignSelf: "center",
  },
  logo: {
    height: 34,
    width: 140,
    alignSelf: "center",
  },
  notifications:{
    display:'flex',
    width:'90%',
    alignSelf:'center',
    paddingHorizontal:10,
    paddingTop:40,
    paddingBottom:20,
    borderRadius:12,
    borderWidth: 2,
    borderColor: '#ddd',
    backgroundColor:'#fff',
    marginTop:30
  }
});
