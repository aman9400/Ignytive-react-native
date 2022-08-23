import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../../constants/Colors';


export default function AppButton({onPress,title}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        backgroundColor:colors.dark_orange,
        borderRadius:30,
        alignItems:'center'
    },
    title:{
        padding:15,
        fontSize:20,
        fontFamily:'Roboto-Regular',
        color:colors.white,
        // textTransform:'uppercase'


    }
});