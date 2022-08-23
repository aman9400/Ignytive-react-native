import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
const OPTIONS = [
  "Amsterdam",
  "Borne",
  "Barneveld",
  "Culemborg",
  "Duiven",
  "Eibergen",
  "Franeker",
  "Grave",
  "Hattem",
  "Leimuiden",
  "Giessenburg",
];
const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const CityPickerlink = (props) => {
  const onPressItem = (option) => {
    props.changeModalVisibility(false);
    props.setData(option);
  };
  const option = OPTIONS.map((item, index) => {
    return (
      <TouchableOpacity
        style={styles.option}
        key={index}
        onPress={() => onPressItem(item)}
      >
        <Text style={styles.text}>{item}</Text>
      </TouchableOpacity>
    );
  });
  return (
    <TouchableOpacity
      onPress={() => props.changeModalVisibility(false)}
      style={styles.container}
    >
      <View style={[styles.modal, { width: WIDTH - 80, height: HEIGHT / 2.6 }]}>
        <ScrollView>{option}</ScrollView>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    borderRadius: 12,
    backgroundColor: "#fff",
    elevation: 15,
  },
  option: {
    borderRadius: 12,
    alignItems: "flex-start",
    alignSelf: "center",
    borderBottomWidth: 0.4,
    borderColor: "#808080",

    width: WIDTH - 80,
  },
  text: {
    margin: 15,
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
  },
});
export { CityPickerlink };
