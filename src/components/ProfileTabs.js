import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../constants/Colors";

export default function ProfileTabs({title,img,onPress,...props}) {
  return (
    <TouchableOpacity style={styles.touchable_box} onPress={onPress}>
    <View style={styles.container}>
      <View style={styles.box}>
        <Image
          style={styles.img_icon}
          source={img}
        />
        <Text style={[styles.title,{...props}]}>{title}</Text>
       
        <Image style={styles.forward_arrow} source={require('../assets/complete_profile/forward.png')}/>
        
      </View>
    </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor:colors.gray,
    marginBottom:20
  },
  img_icon: {
    height: 30,
    width:30

  },
  box: {
    flexDirection: "row",
    paddingVertical:10
  },
  forward_arrow:{
    height:30,
    width:30,
    position:'absolute',
    right:0,
    marginVertical:12
   
  },
  title:{
    marginLeft:10,
    fontSize:16,
    fontFamily:'OpenSans-SemiBold',
    color:colors.gray,
    marginTop:5
  },
});
