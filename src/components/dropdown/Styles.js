import { StyleSheet } from 'react-native';
import colors from '../../constants/Colors';

const styles = StyleSheet.create({
    dropdown: {
      borderRadius: 8,
      width: "100%",
      borderWidth: 2,
      borderColor: colors.gray,
      backgroundColor: colors.white,
      // marginBottom: 10,
      height:60,
      marginBottom:10
    },
    label_text: {
      color: colors.black,
      fontSize: 14,
      marginBottom:5,
      color:'gray'
    },
    text_button: {
      textAlign: "left",
      fontSize:20,
      alignSelf: "center",
      justifyContent: "center",
      color: colors.black,
      // fontFamily: "Montserrat-Medium",
      marginLeft:-1
    },
    row_text:{
      fontSize: 16,
      color: colors.black,
      fontFamily:'Montserrat-Medium',
    },
    dropdown_style:{
      borderRadius:10,
    }
  });

export { styles }