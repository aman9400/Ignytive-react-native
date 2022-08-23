import { View, Text, Image } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import React from "react";
import { styles } from "./Styles";
const Country = ['Netherlands'];
export default function CountryDropdown({ label, ...props }) {
  return (
    <View>
      <Text style={styles.label_text}>{label}</Text>
      
        <SelectDropdown
          data={Country}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
          buttonStyle={styles.dropdown}
          buttonTextStyle={styles.text_button}
          rowTextStyle={styles.row_text}
          dropdownStyle={styles.dropdown_style}
          {...props}
        />
        {/* <Image style={styles.downimg} source={down_img}></Image> */}
      </View>
  );
}

