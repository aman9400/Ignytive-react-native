import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  Image,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TextInput,
  Keyboard
} from "react-native";
import React from "react";
import HeaderBack from "../components/header/HeaderBack";
const { height, width } = Dimensions.get("window");

export default function PostPage({navigation}) {

  const uploadFile = () =>{
    // var photo = {
    //   uri: user.profilePicture,
    //   type: 'image/jpeg',
    //   name: 'photo.jpg',
    // };
    
    // var form = new FormData();
    // form.append("ProfilePicture", photo);
    
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer 4WUeDVNacln2DRv-paLbDShuOnNcQEy2");
    
    var formdata = new FormData();
    formdata.append("file", fileInput.files[0], "/C:/Users/lenovo/Downloads/IMG_20221006_203218.jpg");
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };
    
    fetch("https://api.ignytive.com/files",
     requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  const createPost = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer 4WUeDVNacln2DRv-paLbDShuOnNcQEy2");
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      "body": "hellodsm csmd",
      "status": 1,
      "media": "bd52c4d9-75de-4ef4-8fdd-55f40ce2cd53"
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("https://api.ignytive.com/items/posts", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  return (
    <TouchableWithoutFeedback
    onPress={() => {
      Keyboard.dismiss();
    }}
  >
    <View style={styles.container}>
      <StatusBar backgroundColor="#ffffff" barStyle={"dark-content"} />
      <HeaderBack title={'Post'} onPress={()=>navigation.navigate("HomeScreen")}/>
      <View style={styles.box}>
        <View style={styles.description_box}>
          <Text style={styles.description_heading}>Description</Text>
        </View>
        <View style={styles.description_text}>
          <TextInput
            multiline={true}
            numberOfLines={10}
            underlineColorAndroid='transparent'
            textAlignVertical={"top"}
            // onChangeText={(text) => this.setState({text})}
            // value={this.state.text}
          />
        </View>
        <View style={styles.image_row}>
          <Image
            style={styles.posts}
            source={require("../assets/post_images/first.jpg")}
          />
          <Image
            style={styles.posts}
            source={require("../assets/post_images/second.jpg")}
          />
          <Image
            style={styles.posts}
            source={require("../assets/post_images/third.jpg")}
          />
          <Image
            style={styles.posts}
            source={require("../assets/post_images/first.jpg")}
          />
        </View>
        <TouchableOpacity>
          <View style={styles.upload_btn}>
            <Image
              style={styles.upload_img}
              source={require("../assets/upload_img.png")}
            />
            <Text style={styles.upload_text}>Upload Photo</Text>
          </View>
        </TouchableOpacity>
        <View style={{ height: 20 }}></View>
      </View>
      <TouchableNativeFeedback>
        <View style={styles.post_btn}>
          <Text style={styles.btn_text}>Post</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  box: {
    marginHorizontal: 14,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    // elevation: 4,
    justifyContent: 'center',
    alignSelf:'center',
    marginTop:40
  },
  header: {
    height: 82,
    width: width,
    borderBottomColor: "#ddd",
    borderBottomWidth: 2,
    marginBottom: 30,
    flexDirection: "row",
  },
  header_text: {
    fontFamily: "Roboto-Bold",
    alignSelf: "center",
    fontSize: 22,
  },
  backbtn: {
    height: 20,
    resizeMode: "contain",
  },
  back_button_container: {
    width: width / 2.2,
    height: 82,
    justifyContent: "center",
  },
  description_box: {
    height: 60,
    justifyContent: "center",
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
  },
  description_heading: {
    fontSize: 17,
    fontFamily: "OpenSans-Bold",
  },
  description_text: {
    borderWidth: 1,
    borderColor: "#ddd",
    height: height / 7,
    borderRadius: 12,
    marginTop: 40,
    padding:5
  },
  image_row: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 20,
    alignSelf: "flex-start",
    justifyContent: 'space-evenly',
    width: "100%",
    marginLeft: 5,
  },
  posts: {
    height: 70,
    width: 70,
    alignSelf: "center",
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  upload_btn: {
    backgroundColor: "#FFF9F5",
    height: 45,
    borderWidth: 2,
    borderColor: "#FE5600",
    borderStyle: "dashed",
    borderRadius: 8,
    justifyContent: "center",
    flexDirection: "row",
  },
  upload_text: {
    color: "#FE5600",
    alignSelf: "center",
    fontSize: 16,
    fontFamily: "Roboto-Medium",
  },
  upload_img: {
    height: 20,
    resizeMode: "contain",
    alignSelf: "center",
    marginHorizontal: -10,
  },
  post_btn: {
    width: "70%",
    backgroundColor: "#FE5600",
    height: 50,
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 25,
    marginTop:height/6.5
  },
  btn_text: {
    alignSelf: "center",
    fontSize: 18,
    color: "#fff",
    fontFamily: "Roboto-Regular",
  },
});
