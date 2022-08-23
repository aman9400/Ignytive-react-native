import React from "react";
import { View, Text, StyleSheet, Dimensions, Image,TouchableOpacity } from "react-native";
const { width, height } = Dimensions.get("window");
export default function ApplicantBox({...props}) {
  return (
    <TouchableOpacity {...props}>
    <View style={{flex:1}}>
      <View style={styles.box}>
        <View style={styles.header}>
          <Image
            source={require("../assets/profile2.jpg")}
            style={styles.profile1}
          />
          <View
            style={{
              justifyContent: "center",
              paddingHorizontal: 15,
            }}
          >
            <Text style={styles.heading}>Vanessa Hudgens</Text>
            <Text style={styles.address}>4443islingtonAve, Toronto,</Text>
          </View>
        </View>
        <View style={styles.skillbox}>
          <Text style={styles.skills}>Skills : </Text>
          <View style={styles.boxes}>
            <Text style={styles.skilltext}>HTML</Text>
            <Image style={styles.cross} source={require('../assets/cross.png')}/>
          </View>
          <View style={styles.boxes}>
            <Text style={styles.skilltext}>Java</Text>
            <Image style={styles.cross} source={require('../assets/cross.png')}/>
          </View>
          <View style={styles.boxes}>
            <Text style={styles.skilltext}>Photoshop</Text>
            <Image style={styles.cross} source={require('../assets/cross.png')}/>
          </View>
          <View style={styles.boxes}>
            <Text style={styles.skilltext}>Illustrator</Text>
            <Image style={styles.cross} source={require('../assets/cross.png')}/>
          </View>
          <View style={styles.boxes}>
            <Text style={styles.skilltext}>Maya 3D</Text>
            <Image style={styles.cross} source={require('../assets/cross.png')}/>
          </View>
        </View>
      <View style={{height:10}}></View>
      </View>
    </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  box: {
    flex:1,
    borderRadius:12,
    paddingHorizontal:20,
    marginTop:20,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  header: {
    flexDirection: "row",
    height: height / 9,
  },
  profile1: {
    height: 50,
    width: 50,
    borderRadius: 50,
    alignSelf: "center",
  },
  heading: {
    color: "#FE5600",
    fontFamily:'OpenSans-Bold',
    fontSize: 16,
  },
  address: {
    color: "#A5A7AD",
    fontSize: 12,
    fontFamily:'OpenSans-Regular'
  },
  skillbox: {
    alignItems: "center",
    flexDirection: "row",
    flexWrap:'wrap',
    
  },
  skills: {
    color: "#6D707B",
    fontFamily:'OpenSans-SemiBold',
    fontSize:12
  },
  boxes: {
    marginTop:5,
    backgroundColor: "#FFF1EA",
    marginLeft: 5,
    paddingVertical: 8,
    paddingHorizontal: 10,
    flexDirection:'row',
    borderRadius:2.75,
    elevation:.5
  },
  skilltext: {
    fontSize: 12,
    color:'#FE6618',
    fontFamily:'OpenSans-SemiBold'
  },
  cross:{
    width:10,
    height:10,
    alignSelf:'center',
    marginHorizontal:5,
    marginTop:1
  }
});
