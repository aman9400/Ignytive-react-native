import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function Logo2() {
  return <Image source={require('../assets/whiteLogo.png')} style={styles.image} />
}

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 110,
    marginBottom: 8,
    resizeMode: "contain",
  },
})