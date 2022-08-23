import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';
import { Colors } from '../constants';

const styles = StyleSheet.create({
  navigation_bar: {
    position: 'relative',
    width : '100%',
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: '#E7E7E7',
    

  },
  centerRow: {
    alignItems: 'flex-start',
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign:'center',
  },

  page_container: {
    elevation: 0,
    flexDirection: 'row',
    height: 50,
    justifyContent: 'center',
    left: 0,
    marginLeft: 10,
    marginRight: 10,
    // position: 'absolute',
    right: 0,
    zIndex: 100,
  },
  icon: {
    justifyContent: 'flex-start',
    marginTop: 2.8,
  },
  iconContainer: {
    alignSelf: 'center',
  },
  leftRow: {
    backgroundColor: 'transparent',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  rightRow: {
    alignItems: 'flex-end',
    backgroundColor: 'transparent',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 4,
  },
  titleText: {
    color: Colors.gray,
    fontSize: 24,
    fontWeight: '500',
    textAlign:'center',
    width: '100%',
  },

})

class BackButton extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
 
  }



  render() {
    const { navigation, title, subTitle } = this.props

    return (
      <View style={styles.navigation_bar} >
        <View style={styles.page_container}>
          <View style={styles.leftRow}>
            <Icon
              size={34}
              name="arrow-back"
              type="material-icon"
              color={Colors.gray}
              iconStyle={styles.icon}
              underlayColor="transparent"
              underlineColorAndroid="transparent"
              containerStyle={styles.iconContainer}
              hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
            />
          </View>
          <View style={styles.centerRow}>
            <Text style={styles.titleText} numberOfLines={1}>
            Complete Profile
            </Text>
          </View>
          {/* <View style={styles.rightRow}>
            <Icon
              size={32}
              type="feather"
              name="share-2"
              color={Colors.gray}
              onPress={() => null}
              iconStyle={styles.icon}
              underlayColor="transparent"
              underlineColorAndroid="transparent"
              containerStyle={styles.iconContainer}
              hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
            />
          </View> */}
        </View>
      </View>
    )
  }
}

export default BackButton