import { View, Text, StyleSheet } from "react-native";
import React from "react";
import colors from "../../constants/Colors";

export default function Box({ text }) {
  return (
    <View style={styles.container}>
      <View style={styles.boxes}>
        <Text style={styles.skilltext}>{text}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  boxes: {
    marginTop: 5,
    backgroundColor: "#FFF1EA",
    marginLeft: 5,
    paddingVertical: 8,
    paddingHorizontal: 10,
    flexDirection: "row",
    borderRadius: 2.75,
    elevation: 0.5,
  },
  skilltext: {
    fontSize: 12,
    color: "#FE6618",
    fontFamily: "OpenSans-SemiBold",
  },
  container: {
    flexDirection: "row",
  },
});
