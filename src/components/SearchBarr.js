import React from 'react'
import { SearchBar } from 'react-native-elements';
import {View,StyleSheet} from 'react-native'

export default class SearchBarr extends React.Component {
  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <View style={{flex:1}}>
      <SearchBar 
        containerStyle={styles.searchb}
        inputContainerStyle={styles.inputcont}
        inputStyle={styles.inputst}
        placeholder="Search Community..."
        placeholderTextColor={'#D2D7DE'}
        underlineColorAndroid = "transparent"
        onChangeText={this.updateSearch}
        value={search}
      />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  searchb:{
    width:'81%',
    alignSelf:'center',
    backgroundColor:'#fff',
    borderColor:'#D2D7DE',
    borderWidth:2,
    borderRadius:12,
    borderTopWidth:2,
    borderTopColor:'#D2D7DE',
    borderBottomWidth:2,
    borderBottomColor:'#D2D7DE',
    height:50,
    paddingLeft:0
  },
  inputcont:{
    backgroundColor:'#fff',
    height:2,
    marginLeft:0,
    paddingLeft:0,
  },
  inputst:{
    fontSize:15,
    color:'gray',
    fontFamily:'OpenSans-SemiBold'

  }
})