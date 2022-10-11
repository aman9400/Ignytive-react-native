import React, { Component } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

import { SliderBox } from "react-native-image-slider-box";
const { width, height } = Dimensions.get("window");

export default function ImageSlider({postImage}) {
  const images= [
    // "https://source.unsplash.com/1024x768/?water",
    // "https://source.unsplash.com/1024x768/?girl",
    // "https://source.unsplash.com/1024x768/?tree",
   postImage,
  
  ]
    return (
      
      <View style={styles.container}>
        <SliderBox
          images={images}
          onCurrentImagePressed={(index) =>
            console.warn(`image ${index} pressed`)
          }
          parentWidth={width - 83}
          sliderBoxHeight={height/3.6}
          ImageComponentStyle={styles.sliderimage}
          dotColor="#FE5600"
          inactiveDotColor="#FFEAE0"
          imageLoadingColor="#2196F3"
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 15,
            marginHorizontal: -10,
            padding: 0,
            position:'relative',
            top:35
          }}
        />
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sliderimage: {
    borderRadius: 12,
    marginTop: height/(8*5),
    
  },
});
