import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import ImageSlider from "./ImageSlider";
const { width, height } = Dimensions.get("window");

export default function PostBox({navigation}) {

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <StatusBar backgroundColor="#ffffff"
      barStyle={'dark-content'} />
      <View style={styles.postbackground}>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.header}>
            <Image
              style={styles.profile2}
              source={require("../assets/profile2.jpg")}
            />
            <Text style={styles.profile2name}>Vanessa Hudgens</Text>
          </View>
          <View style={styles.dots}>
            <View style={styles.smldots}></View>
            <View style={styles.smldots}></View>
            <View style={styles.smldots}></View>
          </View>
        </View>
        <View style={styles.postdescription}>
          <Text style={styles.description}>
            Don’t settle for what life gives you; make life better and build
            something.
          </Text>
        </View>
        <ImageSlider />
        <View style={styles.actionbtn}>
          <View style={styles.startbtn}>
            <TouchableOpacity>
              <Image
                style={{ height: 21.3, width: 22.24, marginRight: 20 }}
                source={require("../assets/post_interaction/like.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={{ height: 22.06, width: 21.24 }}
                source={require("../assets/post_interaction/comment.png")}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.endbtn}>
            <TouchableOpacity>
              <Image
                style={{ height: 22, width: 22.35 }}
                source={require("../assets/post_interaction/share.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={{ height: 22.41, width: 20, marginLeft: 20 }}
                source={require("../assets/post_interaction/bookmark.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  postbackground: {
    backgroundColor: "#fff",
    width: "98%",
    marginVertical: 20,
    alignSelf: "center",
    borderRadius: 12,
    paddingHorizontal: 18,
    elevation: 2,
  },
  header: {
    marginTop: 10,
    height: height / 10,
    flexDirection: "row",
    alignItems: "center",
    width: "65%",
  },
  profile2: {
    height: 52,
    width: 52,
    borderRadius: 50,
  },
  profile2name: {
    marginLeft: 20,
    fontSize: 14,
    fontFamily: "OpenSans-SemiBold",
    color: "#000",
  },
  dots: {
    flexDirection: "row",
    marginTop: 10,
    height: height / 10,
    width: "35%",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  smldots: {
    height: 6,
    width: 6,
    backgroundColor: "#D2D7DE",
    borderRadius: 50,
    margin: 2,
  },
  postdescription: {
    flexWrap: "nowrap",
  },
  description: {
    color: "#BBC0CF",
    fontFamily: "OpenSans-Regular",
    textAlign: "justify",
    fontSize: 14,
  },
  actionbtn: {
    flexDirection: "row",
    height: 40,
  },
  startbtn: {
    flexDirection: "row",
    width: "50%",
    alignItems: "center",
  },
  endbtn: {
    flexDirection: "row",
    width: "50%",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
