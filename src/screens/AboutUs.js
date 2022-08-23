import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import HeaderBack from '../components/header/HeaderBack'
import colors from '../constants/Colors'
import SubHead from '../components/SubHead'
import about_us from '../document/About'

export default function AboutUs({navigation}) {
  return (
    <View style={styles.container}>
        {/* <HeaderBack title={'About Us'} onPress={()=>navigation.navigate('Profile')}/> */}
        <View style={styles.gapping}></View>
        <SubHead/>
        <View style={styles.text_box}>
        <Text style={styles.about_text}>{about_us}</Text>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.white,
    },
    gapping:{
        height:30
    },
    text_box:{
        padding:20
    },
    about_text:{
        fontSize:16,
        fontFamily:'OpenSans-Light',
        textAlign:'justify',
        color:colors.black
    }
});