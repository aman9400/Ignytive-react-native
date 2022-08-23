import { View, Text, StyleSheet, TouchableOpacity,Image, ScrollView } from "react-native";
import React from "react";
import HeaderBack from "../components/header/HeaderBack";
import colors from "../constants/Colors";
import ProfileTabs from "../components/ProfileTabs";
const img1=require('../assets/complete_profile/bookmark.png')
const img2=require('../assets/complete_profile/edit_profile.png')
const img3=require('../assets/complete_profile/password.png')
const img4=require('../assets/complete_profile/information.png')
const img5=require('../assets/complete_profile/policy.png')
const img6=require('../assets/complete_profile/term.png')
const img7=require('../assets/complete_profile/logout.png')
const img8=require('../assets/complete_profile/profile.png')
const img9=require('../assets/profile1.jpg')

export default function Profile({navigation}) {
  return (
    <View style={styles.container}>
      {/* <HeaderBack title ={'Complete Profile'} onPress={() => navigation.replace("HomeScreen")} /> */}
      <ScrollView>
      <View>
        <Image style={styles.profile_img} source={img9}/>
        <Text style={styles.text}>Salena</Text>
      </View>
      <View style={styles.tab_holder}>
      <ProfileTabs img={img1} title={'My Saved Posts'}/>
      <ProfileTabs img={img2} title={'Edit Profile'}/>
      <ProfileTabs img={img3} title={'Change Password'} onPress={()=>navigation.navigate('ChangePassword')}/>
      
      <ProfileTabs img={img4} title={'About Us'} onPress={()=>navigation.navigate('AboutUs')}/>
     
      <ProfileTabs img={img5} title={'Privacy Policy'} />
      <ProfileTabs img={img6} title={'Terms & Conditions'} onPress={()=>navigation.navigate('TermCondition')}/>
      <ProfileTabs img={img7} title={'Log Out'} color={colors.dark_orange}/>
      </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  tab_holder:{
    width:'85%',
    alignSelf:'center'
  },
  profile_img:{
    width:100,
    height:100,
    alignSelf:'center',
    marginTop:30,
    borderRadius:50
  },
  text:{
    fontSize:20,
    color:colors.dark_orange,
    alignSelf:'center',
    marginVertical:20,
    fontFamily:'OpenSans-Bold'
  }
});
