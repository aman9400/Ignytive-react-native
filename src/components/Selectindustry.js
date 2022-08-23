import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import MultiSelect from 'react-native-multiple-select'

const items = [{
  id: 'education',
  name: 'Education'
}, {
  id: 'marketing',
  name: 'Marketing'
}, {
  id: 'software',
  name: 'Software'
}, {
  id: 'ecommerce',
  name: 'Ecommerce'
}, {
  id: 'ai',
  name: 'Artificial Intelligence'
}, {
  id: 'hardware',
  name: 'Hardware'
}, {
  id: 'cloud',
  name: 'Cloud Services'
}, {
  id: 'internet',
  name: 'Internet'
}, {
  id: 'robotics',
  name: 'Robotics'
}, {
    id: 'gaming',
    name: 'Gaming'
}]

const Selectindustry =() =>{
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
          selectText='    Choose Industry'
          searchInputPlaceholderText='Search your skills.'
          tagRemoveIconColor='#FE6618'
          tagBorderColor='transparent'
          tagBackgroundColor='#fff'
          // selectedItemIconColor='#000'
          tagTextColor='#FE6618'
          selectedItemIconColor='#CCC'
          itemTextColor='#000'
          displayKey='name'
          searchInputStyle={{ color: '#9B9EA6' , fontSize:16, padding:10}}
          tagContainerStyle={{backgroundColor:'#FFF1EA', borderRadius:5 }}
          submitButtonColor='#FE6618'
          submitButtonStyle={{borderRadius:12}}
          submitButtonText='Done'
          removeSelected
        />
      </View>
    </View>
  )
}
export default Selectindustry;

const styles = StyleSheet.create({
  container: {
    //   flex:1,
    width:'100%',
    backgroundColor: '#fff',
    justifyContent:'center',
    alignItems:'center',
    // borderRadius:12,
},
multiSelectContainer: {
    width: '100%',
    // height:400,
    backgroundColor:'#fff',
    borderRadius:12,
    paddingLeft:5,
    paddingRight:5,
    paddingTop:10,
    elevation:1,
    // borderBottomColor:'red',
  },
});
