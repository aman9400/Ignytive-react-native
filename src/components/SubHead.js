import { View, Text,Image,StyleSheet } from 'react-native'
import React from 'react'
import colors from '../constants/Colors';
import Logo from './Logo';

export default function SubHead() {
  return (
    <View style={styles.css}>
            <Logo />
            <Text style={styles.tag_line}>
              Community For Exprienced Profesionals empowered by Technology.
            </Text>
          </View>
  )
}
const styles = StyleSheet.create({
  tag_line: {
    fontSize: 16,
    marginBottom: 60,
    color: colors.black,
    textAlign: 'center',
    fontFamily:'OpenSans-Light'
  },
  css: {
    marginLeft: 20,
    marginRight: 20,
    alignItems: "center",
  },
});