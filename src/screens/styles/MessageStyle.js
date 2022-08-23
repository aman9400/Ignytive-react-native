import { StyleSheet } from "react-native";
import colors from "../../constants/Colors";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  flat_card: {
    width: "100%",
    padding: 10,
    
  },
  card: {
    flexDirection: "row",
    borderLeftWidth: 10,
    borderColor: colors.gray,
    padding: 15,
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 10,
    width: "100%",
    backgroundColor:colors.white
  },
  
  name_message: {
    width: "70%",
    marginLeft: 10,
    justifyContent: "center",
  },
  user_images: {
    height: 40,
    width: 40,
    borderRadius: 25,
  },
  name:{
    fontFamily:"OpenSans-Bold",
    color:colors.gray
  },
  message: {
    height: 20,
    fontFamily:'OpenSans-Regular',
    color:'#A5A7AD'
  },
  time:{
    color:'#A5A7AD',
    fontFamily:'OpenSans-Bold',
    fontSize:12,
    marginBottom:3
  },
  count:{
    
  },
  count_box:{
    backgroundColor:colors.dark_orange,
    height:25,
    width:25,
    borderRadius:15,
    alignItems:'center',
    justifyContent: 'center',
    
    
  },
  time_count:{
    justifyContent: 'center',
    alignItems:'center'
  }
});
export { styles };
