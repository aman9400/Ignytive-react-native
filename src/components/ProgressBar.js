import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import colors from '../constants/Colors'
import {FontAwesome5} from 'react-native-vector-icons'


export default function ProgressBar() {
  return (
    <View style={styles.container}>

     <View style={styles.check_outline}>
        <FontAwesome5 name={'check'} color={colors.dark_orange} size={10}/>
     </View>
     <View style={[styles.check_outline,{position:'absolute',left:'40%',backgroundColor:colors.white,zIndex:1}]}>
        <FontAwesome5 name={'check'} color={colors.dark_orange} size={10}/>
     </View>
     <View style={styles.bars1}></View>
     <View style={styles.bars2}></View>
     <View style={styles.bars3}></View>
     <View style={styles.bars4}></View>
     <View style={styles.bars5}></View>
     <View style={styles.bars6}></View>
     <View style={styles.bars7}></View>
     <View style={styles.check_outline}>
     <FontAwesome5 name={'star'} color={colors.dark_orange} size={10}/>
     </View>
    </View>
  )}
  const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        alignSelf:'center'
    },
    check_outline:{
        borderRadius:50,
        borderWidth:3,
        borderColor:colors.dark_orange,
        padding:3
    },
    bars1:{
        backgroundColor:'#FE6409',
        height:10,
        width:'12%',
       alignSelf:'center',
       marginRight:2
    },
    bars2:{
        backgroundColor:'#FE7515',
        height:10,
        width:'12%',
       alignSelf:'center',
       marginRight:2
    },
    bars3:{
        backgroundColor:'#FE8D20',
        height:10,
        width:'12%',
       alignSelf:'center',
       marginRight:2
    },
    bars4:{
        backgroundColor:'#FFA72E',
        height:10,
        width:'12%',
       alignSelf:'center',
       marginRight:2
    },
    bars5:{
        backgroundColor:'#D2BA39',
        height:10,
        width:'12%',
       alignSelf:'center',
       marginRight:2
    },
    bars6:{
        backgroundColor:'#9AC23A',
        height:10,
        width:'12%',
       alignSelf:'center',
       marginRight:2
    },
    bars7:{
        backgroundColor:'#8AC400',
        height:10,
        width:'12%',
       alignSelf:'center',
    }
  })
