import React, {useState} from 'react'
import {
    StyleSheet, Text, View, Modal, TouchableOpacity, SafeAreaView
} from 'react-native'
import {CountryPickerlink} from './CountryPickerlink'


const CountryPicker =()=>{
    const[chooseData, setchooseData] = useState('Select Country');
    const [isModalVisible, setisModalVisible]= useState(false);
    
    const changeModalVisibility = (bool) => {
        setisModalVisible(bool)
    }

    const setData = (option)=>{
        setchooseData(option)
    }
    return(
            <SafeAreaView style={styles.container}>
                <TouchableOpacity 
                onPress ={()=> changeModalVisibility(true)}
                style={styles.touchableOpacity}>
                <Text style={styles.text}>{chooseData}</Text>    
                </TouchableOpacity>
                <Modal
                    transparent={true}
                    animationType='fade'
                    visible={isModalVisible}
                    nRequestClose={() =>changeModalVisibility(false)}
                    
                >
                    <CountryPickerlink
                    changeModalVisibility={changeModalVisibility}
                    setData={setData}
                    />
                </Modal>
            </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
    },
    text:{
        marginVertical: 15,
        fontSize:20,
    },
    touchableOpacity:{
        borderWidth:1,
        borderRadius:5,
        borderColor:'#808080',
        backgroundColor:'#fff',
        alignSelf:'stretch',
        paddingHorizontal:14,
        marginBottom:12,
    }
});

export default CountryPicker;
