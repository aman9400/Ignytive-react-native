import { View, Text, StyleSheet, ScrollView, StatusBar,Image, Dimensions,TouchableNativeFeedback, TouchableNativeFeedbackComponent, TouchableNativeFeedbackBase } from "react-native";
import React from "react";
import ApplicantBox from "../components/ApplicantBox";
import SearchBarr from "../components/communitypage/SearchBarr";
import { TouchableOpacity } from "react-native-gesture-handler";

const{height,width}=Dimensions.get('window')
export default function Community({navigation}) {
  return (
    
    <View style={styles.container}>
      <StatusBar backgroundColor="#ffffff"
      barStyle={'dark-content'} />
      <View style={styles.head}>
        <TouchableOpacity style ={{alignSelf:"center",justifyContent: 'center',}}>
        <Image
          style={styles.profile}
          source={require("../assets/profile1.jpg")}
        />
        </TouchableOpacity>
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
        <View style={{marginTop:10,paddingHorizontal:15}}>
        <SearchBarr/>
        </View>
        <View style={{ height: 20 }}></View>
      <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.applicationflat}>
        <ApplicantBox onPress={()=>navigation.navigate('ApplicantsDetails')}/>
        <ApplicantBox onPress={()=>navigation.navigate('ApplicantsDetails')}/>
        <ApplicantBox onPress={()=>navigation.navigate('ApplicantsDetails')}/>
        <ApplicantBox onPress={()=>navigation.navigate('ApplicantsDetails')}/>
        <ApplicantBox onPress={()=>navigation.navigate('ApplicantsDetails')}/>
        <ApplicantBox onPress={()=>navigation.navigate('ApplicantsDetails')}/>
      <View style={{height:height/10}}></View>
      </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  head: {
    height: 80,
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingHorizontal: 15,
    alignItems:'center'
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
  applicationflat:{
    paddingHorizontal: 15,
    
  }
});
