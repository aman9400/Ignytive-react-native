import { View, Text,StyleSheet, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import colors from '../constants/Colors'
import HeaderBack from '../components/header/HeaderBack'
import PasswordInput from '../components/PasswordInput'
import AppButton from '../components/Buttons/AppButton'
const{height}=Dimensions.get('window')
export default function ChangePassword({navigation}) {
  return (
    <View style={styles.container}>
      {/* <HeaderBack title={'Change Password'} onPress={()=>navigation.navigate('Profile')}/> */}
      <View style={{flex:1,justifyContent: 'center',}}>
      <View style={styles.css}>
        <Text style={styles.tag_line}>Please choose a new Password to finish change password</Text>
      </View>
      <View style={styles.input_boxes}>
      <PasswordInput placeholder={'Old Password'}/>
      <PasswordInput placeholder={'New Password'}/>
      <PasswordInput placeholder={'Confirm Password'}/>
      </View>
      <View style={styles.gap}></View>
      <View style={{width:'80%',alignSelf:'center'}}>
      <AppButton title={'Save'}/>

      </View>
      
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.white,
    },
    tag_line: {
        fontSize: 18,
        color: colors.gray,
        textAlign: 'center',
        fontFamily:'OpenSans-Regular',
        marginBottom:height/(3*5)
      },
      css: {
        alignItems: "center",
        paddingHorizontal:60
      },
      input_boxes:{
        paddingHorizontal:40
      },
      gap:{
        height:height/(3*5)
      }
});