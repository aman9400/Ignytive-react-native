import React from "react";
import { View, Text, StyleSheet,Image, TouchableOpacity } from "react-native";

export default function HeaderBack({onPress,title}) {
  return (
    <View style={styles.header_box}>
        <TouchableOpacity style={styles.back_box} onPress={onPress}>
          
            <Image style={styles.back_arrow} source={require('../../assets/back.png')}/>
        </TouchableOpacity>
        
      <Text style={styles.header_text}>{title}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  header_box: {
    borderBottomColor: "#E7E7E7",
    borderBottomWidth: 2,
    padding: 10,
    alignItems: "center",
    flexDirection:'row',
    width:'100%',
    justifyContent: 'center',
  },
  header_text: {
    paddingVertical:5,
    fontSize:20,
  fontWeight:'bold',
  alignSelf:'center',
  backgroundColor:'#fff',
    // fontFamily: "Roboto-Medium",
  },
  back_arrow:{
    height:20,
    resizeMode:'contain',
    // marginTop:2,
    
  },
  back_box:{
    width:'20%',
    height:20,
    position:'absolute',
    left:10,

  }
 
});
