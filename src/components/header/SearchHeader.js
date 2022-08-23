import { View, Text, Image,StyleSheet} from 'react-native'
import React from 'react'
import SearchBarr from '../SearchBarr'
import colors from '../../constants/Colors'
const profile=require('../../assets/profile1.jpg')
export default function SearchHeader() {
  return (
    <View style={styles.header_box}>
     <Image source={profile} style={{height:50, width:50, borderRadius:25}}/>
     <SearchBarr/>
    </View>
  )
}
const styles = StyleSheet.create({
    header_box:{
        height:80,
        alignItems: 'center',
        flexDirection:'row',
        paddingHorizontal:20,
        backgroundColor:'#fff',
        borderBottomWidth:1,
        borderColor:colors.gray
        
    }
});