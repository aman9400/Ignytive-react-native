import React, { useState } from "react";
import {
   View,
   Image,
   StyleSheet, 
   Text,
   SafeAreaView,
   TextInput,
   StatusBar,
   TouchableOpacity,
   Dimensions,
   TouchableWithoutFeedback,
  } from "react-native";
import { Searchbar } from "react-native-paper";
const {width, height} = Dimensions.get('window');

export default function Dashboard() {
  return (
    <>
     <SafeAreaView style={styles.container}>
     <StatusBar
       backgroundColor='#fff'
       barStyle={'dark-content'}
       />
       
       <View style={{backgroundColor:'#fff'}}>
       <View style={styles.header}>
        <Image source={require('../assets/profile1.jpg')} style={styles.profile}/>
        <Searchbar
            style={styles.search_tag}
            placeholder="Search ....."
            // onChangeText={onChangeSearch}
            // value={searchQuery}
          />
          <Image source={require('../assets/chat.png')} style={styles.chat}/>
        </View>
     <View style={{margin:10, backgroundColor:'#fff', borderRadius:12, elevation:2,}}>
       <TouchableOpacity>
     <Image source={require('../assets/fakepost.png')} style={styles.fakepostimage}/>
     </TouchableOpacity>
     </View>
     </View>
    <View style={{width:'100%',height:'7%'}}></View>
    <View style={styles.post}>
<View style={{padding:16,flexDirection:'row'}}>
  <TouchableOpacity>
  <Image source={require('../assets/profile2.jpg')} style={styles.profile2}/>
  </TouchableOpacity>
  <Text style={{alignItems:'center',margin:13,fontSize:20,fontWeight:'bold'}}>John Marker</Text>
 <Image source={require('../assets/dotted.png')} style={styles.dott}/>
</View>
<Text style={{padding:15, alignSelf:'center', justifyContent:'center'}}>“Never say there is nothing beautiful in the world anymore. There is always something to make you wonder in the shape of a tree, the trembling of a leaf.”</Text>
        <View style={{height:'90%'}}>
          
        <Image source={require('../assets/Tree.jpg')} style={styles.tree}/>
        <View style={{width:'94%',alignSelf:'center'}}>
        <Image source={require('../assets/fakebar.png')} style={styles.like}/>
        </View>
        </View>
    </View>

    <View style={{height:50, width:'100%',marginTop:5}}>
    </View>
     </SafeAreaView>
        <View style={{height:1, borderBottomColor:'#e8e8e8',borderBottomWidth:2, backgroundColor:'#fff',}}></View>
    <Image source={require('../assets/Nav.png')} style={styles.fakepostimage}/>
</>

)
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    
  },
  profile:{
    height:55,
    width:55,
    borderRadius:12,
    alignSelf:'center',
  },
  header:{
    display:'flex',
    flexDirection:'row',
    justifyContent: 'space-between',
    padding:16,
    height:75,
    width:'100%',
  },
  search_tag:{
    width:'60%',
    borderRadius:12,    
  },
  chat:{
    height:44,
    width:40.06,
  },
  fakepostimage:{
    width:width-20,
    borderRadius:10,
    height:48,
    alignSelf:'center',

  },
  post:{
    borderRadius:12,
    marginBottom:5,
    width:'94%',
    height:'71%',
    alignSelf:'center',
    backgroundColor:'#fff',
    elevation:4
  },
profile2:{
  height:54,
  width:57,
  borderRadius:13,
},
dott:{
  marginLeft:'33%',
  marginTop:22,
},
tree:{
  width:width-70,
  height:'65%',
  alignSelf:'center',
  borderRadius:12,
},
like:{
  marginTop:10,
  height:21,
  width:width-70,
  alignSelf:'center',
  justifyContent:'center',
  marginBottom:10,
}
});