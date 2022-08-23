import React from 'react';
import Backbround from '../components/Backbround';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';

export default function StartScreen({ navigation }) {
  return <Backbround>
      <Logo />
      {/* <Header>WELCOME TO IGNYTIVE</Header>
      <Paragraph>
       __________________________________
      </Paragraph> */}
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Login
      </Button>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Sign Up
      </Button>
    </Backbround> 
}