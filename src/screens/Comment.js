import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import HeaderBack from '../components/header/HeaderBack'
import colors from '../constants/Colors'
import CommentInput from '../components/comment/CommentInput'
import CommentText from '../components/comment/CommentText'

export default function Comment() {
  return (
    <View style={styles.container}>
      <HeaderBack title={'Comments'}/>
      <View>
        <CommentText/>
      </View>
      <View style={{position:'absolute',bottom:0,width:'100%'}}>
      <CommentInput/>
      </View>
    </View>
  )
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:colors.white
  }
})