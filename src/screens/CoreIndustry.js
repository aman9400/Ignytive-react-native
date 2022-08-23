import React, { useState } from "react";
import Backbround from "../components/Backbround";
import BackButton from "../components/BackButton";
import Selectindustry from "../components/Selectindustry"
import { View, StyleSheet, Text, StatusBar, SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";
import Button from "../components/Button";

export default function CoreCapability({ navigation, title, subTitle }) {
  const [searchQuery, setSearchQuery] = React.useState("");
  const RegSuccess=()=>{
    navigation.reset({
      index: 0,
      routes: [{ name: 'HomeScreen' }],
    })
    alert("Registration Successfull !")
  }

  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <>
    <SafeAreaView style={{flex:1}}>
    <StatusBar
       backgroundColor='#fff'
       barStyle={'dark-content'}
       />
      <View style={styles.backg}>
      <View ><Text style={styles.up}>Choose Industry</Text></View>
      <View style={styles.line}></View>
      <View style={styles.complete_profile}>
        <View>
          <Selectindustry/>
        </View>
        
      </View>
      
    </View>
    <View style={{width:'100%'}}>
    <View style={styles.switch_button}>
            <Button
            style={styles.btns}
              mode="outlined"
              onPress={RegSuccess}              
            >
              Skip
            </Button>
            <Button
            style={styles.buttons}
              mode="contained"
              onPress={RegSuccess}
            >
              Continue
            </Button>
            </View>
          </View>
        </SafeAreaView>
    </>
  );
  
}
const styles = StyleSheet.create({
  complete_profile: {
    padding: 20,
    height: '100%',
    // backgroundColor: "#fff",
  },
  search_tag: {
    backgroundColor: "#ffffff",
    width:'100%',
    borderRadius: 12,
  },
  switch_button: {
    display: 'flex',
    flexDirection: 'row',
    width:'100%',
    alignSelf:'center',
    backgroundColor:'#fff',
    textAlign: 'center',
  },
  buttons:{
    width: '40%',
    marginLeft:26,
    marginBottom:20,
    height: 49,
    
  },
  up:{
  fontSize:20,
  fontWeight:'bold',
  textAlign:'center',
  backgroundColor:'#fff',
  },

line:{
  height:20,
  width:'100%',
  borderBottomWidth:2,
  backgroundColor:'#fff',
  borderBottomColor:'#E7E7E7',
},
backg:{
  flex:1,
  backgroundColor:'#fff',
  width:'100%',
  padding:10,
  alignSelf:'center'
},
btns:{
  width: '40%',
  marginLeft:26,
  borderWidth:1,
  marginBottom:20,
  height: 49,
},

});