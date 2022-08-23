import { View, Text, TextInput,StyleSheet} from 'react-native'
import React from 'react'
import {Ionicons} from 'react-native-vector-icons'
import colors from '../constants/Colors'

export default function PasswordInput({label, error, onFocus = () => {},...props}) {
    const[isfocused,setIsfococused]=React.useState(false)
  return (
    <View style={[styles.pass_input,{borderBottomWidth:2,borderColor:isfocused?colors.dark_orange:colors.gray}]}>
      <Ionicons name={'key-outline'} size={30} color={colors.dark_orange}/>
        <TextInput style={[styles.input_text,{borderColor:isfocused?colors.orange:colors.gray,}]}
      autoCorrect={false}
      placeholderTextColor={colors.gray}
      onFocus = {() => {
        onFocus();
        setIsfococused(true);
      }}
      onBlur = {() => {
        setIsfococused(false);
      }}
      {...props}/>
    </View>
  )
}
const styles = StyleSheet.create({
    pass_input:{
        flexDirection:'row',
        paddingVertical:10,
        marginVertical:10
    },
    input_text:{
        width:'80%',
        paddingLeft:20,
        fontSize:18
    }
});