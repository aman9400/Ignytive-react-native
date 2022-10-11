import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  Dimensions,
  TextInput,
  StatusBar,
  TouchableNativeFeedback,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { set } from "react-native-reanimated";
import Post from "../components/PostBox";
import SearchBarr from "../components/SearchBarr";
const { width, height } = Dimensions.get("window");

export default function Home({navigation}) {

  const[postData, setPostData] = useState([]);

  const callPostApi = () =>{
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer 4WUeDVNacln2DRv-paLbDShuOnNcQEy2");
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    fetch("https://api.ignytive.com/items/posts", requestOptions)
      .then(response => response.json())
      .then(result =>{

        console.log(result)

        setPostData(result.data)

      })
      .catch(error => console.log('error', error));
  }

  useEffect(()=>{
    callPostApi()
  },[]);

  return (
    <SafeAreaView style={styles.container}>
          <StatusBar backgroundColor="#ffffff"
          barStyle={'dark-content'} />
      <View style={styles.header}>
        <TouchableNativeFeedback onPress={()=>navigation.navigate('Complete Profile')}>
        <Image
          source={require("../assets/profile1.jpg")}
          style={styles.profile1}
        />
        </TouchableNativeFeedback>
        <SearchBarr />
        <TouchableOpacity>
        <View>
            <Image source={require("../assets/chat.png")} style={styles.chat} />
            </View>
            </TouchableOpacity>
      </View>
        <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.scrollcontainer}>
          <View style={styles.createpostbox}>
            <View style={styles.createedit}>
              <Image
                style={styles.createpost}
                source={require("../assets/createposticon.png")}
              />
            </View>
            <TextInput
              style={styles.textinputstyle}
              placeholder="Create a post"
              placeholderTextColor={"#D2D7DE"}
              underlineColorAndroid="transparent"
            />
            <TouchableNativeFeedback>
              <View style={styles.createall}>
                <Image
                  style={{ height: 14.5, width: 23 }}
                  source={require("../assets/video.png")}
                />
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback>
            <View style={styles.createall}>
              <Image
                style={{ height: 16, width: 20.3 }}
                source={require("../assets/camera.png")}
              />
            </View>
            </TouchableNativeFeedback>
          </View>


          {/* {
            postData.map((dataSingle, index) => {
              <Post  />
            })
          } */}
          <Post />        
         
      {/* <View style={{height:height/(8*3)}}></View> */}
      </View>
        </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBFCFE",
  },
  profile1: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 82,
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 15,
    borderBottomWidth: 2,
    borderBottomColor: "#D2D7DE",
    backgroundColor:'#fff'
  },
  chat: {
    height: 38.9,
    width: 35.2,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollcontainer: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  createpostbox: {
    borderColor: "#D2D7DE",
    borderWidth: 2,
    height: 50,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  createpost: {
    height: 17.7,
    width: 18,
  },
  textinputstyle: {
    backgroundColor: "#fff",
    height: 44,
    borderRadius: 12,
    width: "55%",
    fontFamily: "OpenSans-SemiBold",
    fontSize: 16,
    color: "gray",
    paddingHorizontal: 5,
  },
  createedit: {
    height: "100%",
    width: "15%",
    alignItems: "center",
    justifyContent: "center",
  },
  createall: {
    height: "100%",
    width: "15%",
    borderColor: "#D2D7DE",
    borderLeftWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  video: {
    width: 23,
    height: undefined,
    aspectRatio: 135 / 99,
  },
});
