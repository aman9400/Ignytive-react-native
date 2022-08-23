import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import MultiSelect from 'react-native-multiple-select'

const items = [{
  id: 'js',
  name: 'JavaScript'
}, {
  id: 'swift',
  name: 'Swift'
}, {
  id: 'photoshop',
  name: 'PhotoShop'
}, {
  id: 'illustrator',
  name: 'Graphic'
}, {
  id: 'python',
  name: 'Python'
}, {
  id: '.net',
  name: '.Net'
}, {
  id: 'java',
  name: 'Java'
}, {
  id: 'php',
  name: 'PHP '
}, {
  id: 'objc',
  name: 'Objective C'
},
{
  id: 'c',
  name: 'C++/C#'
}]

const Select =() =>{
  const [selectedItems, setselectedItems] = useState([])

  const onSelectedItemsChange = (selectedItems) => {
      setselectedItems(selectedItems)
    // console.warn('Selected Items: ', selectedItems)

  }

  return (
      <View style={styles.container}>
      <View style={styles.multiSelectContainer}>
        <MultiSelect
          items={items}
          uniqueKey='id'
          onSelectedItemsChange={onSelectedItemsChange}
          selectedItems={selectedItems}
          selectText='    Choose Core Capabilities'
          searchInputPlaceholderText='Search your skills.'
          tagRemoveIconColor='#FE6618'
          tagBorderColor='transparent'
          tagBackgroundColor='#fff'
          selectedItemIconColor='#000'
          tagTextColor='#FE6618'
          selectedItemIconColor='#CCC'
          itemTextColor='#000'
          displayKey='name'
          searchInputStyle={{ color: '#9B9EA6' , fontSize:16, padding:0}}
          tagContainerStyle={{backgroundColor:'#FFF1EA', borderRadius:5, }}
          submitButtonColor='#FE6618'
          submitButtonStyle={{borderRadius:12}}
          submitButtonText='Done'
          removeSelected
        />
      </View>
    </View>
  )
}
export default Select;

const styles = StyleSheet.create({
  container: {
    width:'100%',
    backgroundColor: '#fff',
    justifyContent:'center',
    alignItems:'center',
},
multiSelectContainer: {
    width: '100%',
    backgroundColor:'#fff',
    borderRadius:12,
    paddingLeft:5,
    paddingRight:5,
    paddingTop:10,
    elevation:1,
  },
});
