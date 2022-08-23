import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import colors from "../../constants/Colors";
const profile=require('../../assets/complete_profile/profile.png')
export default function CommentInput() {
  return (
    <View style={styles.container}>
      <View style={styles.outerbox}>
            <Image style={styles.profile} source={profile}/>
        <View style={styles.main}>
          <TextInput style={styles.comment_input} 
          placeholder={'Add a comment'}/>
          <TouchableOpacity>
            <Text style={styles.post_text}>Post</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  comment_input: {
    // borderWidth: 1,
    // borderColor: "red",
    width: "70%",
    height: "100%",
    fontFamily:'OpenSans-Bold',
    color:colors.black,

  },
  main: {
    height: "80%",
    borderWidth: 1,
    borderColor: "#F5F5F5",
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 50,
    justifyContent: "center",
    
  },
  outerbox: {
    alignItems: "center",
    borderColor: "#E7E7E7",
    borderWidth: 1,
    height: 50,
    flexDirection:'row',
    justifyContent: 'center',
    
  },
  post_text: {
    color: colors.dark_orange,
    fontFamily: "OpenSans-Bold",
    fontSize: 14,
    marginLeft: 10,
  },
  profile:{
    height:35,
    width:35,
    marginRight:20
  }
});
