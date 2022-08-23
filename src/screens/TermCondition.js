import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import HeaderBack from '../components/header/HeaderBack'
import colors from '../constants/Colors'
import SubHead from '../components/SubHead'
import term from '../document/Term'

export default function TermCondition({navigation}) {
  return (
    <View style={styles.container}>
        {/* <HeaderBack title={'Terms and Conditions'} onPress={()=>navigation.navigate('Profile')}/> */}
        <View style={styles.gapping}></View>
        <SubHead/>
        <View style={styles.text_box}>
        <Text style={styles.about_text}>{term}</Text>
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