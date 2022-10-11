import React, { useState, useCallback, useEffect } from "react";
import { View, Text, StyleSheet,TouchableWithoutFeedback,Keyboard } from "react-native";
import {
  GiftedChat,
  Bubble,
  Send,
  InputToolbar,
} from "react-native-gifted-chat";
import colors from "../constants/Colors";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { ScrollView } from "react-native-gesture-handler";

export default function Messages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);
  const renderBubble = (props) => {
    return (
    
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: colors.dark_orange,
            padding: 10,
            borderWidth: 2,
            borderColor: colors.lightGray,
            borderBottomRightRadius: 0,
            color: colors.white,
            marginBottom:30,
            marginTop:-30
          },
          left: {
            backgroundColor: colors.white,
            padding: 10,
            borderWidth: 2,
            borderColor: colors.lightGray,
            borderBottomLeftRadius: 0,
            marginBottom:30
          },
        }}
        textStyle={{
          right: {
            color: "#fff",
          },
        }}
      />
    );
  };

  const renderInputToolbar = (props) => {
    return <InputToolbar {...props} containerStyle={styles.inputToolbar} />;
  };

  const renderSend = (props) => {
    return (
      <Send {...props}>
        <View
          style={{
            width: 100,
            // alignItems: "center",
            backgroundColor: colors.dark_orange,
            borderRadius: 30,
            justifyContent: "center",
            alignSelf:'center',
            height:45,
            marginHorizontal:20,
            marginTop:-8
          }}
        >
          <FontAwesome
            name="send"
            size={22}
            color={colors.white}
            style={{ alignSelf: "center" }}
          />
        </View>
      </Send>
    );
  };
  return (
    <View style={{ flex: 1}}>
    <TouchableWithoutFeedback
    onPress={() => {
      Keyboard.dismiss();
    }}
  >
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        placeholder={"Type your Message"}
        textInputStyle={styles.text_box}
        renderSend={renderSend}
        alwaysShowSend
        user={{
          _id: 1,
        }}
        renderBubble={renderBubble}
        alignTop
        renderInputToolbar={renderInputToolbar}
      />
    </TouchableWithoutFeedback>
    </View>
  );
}
const styles = StyleSheet.create({
  text_box: {
    borderRadius: 5,
    paddingHorizontal: 20,
    backgroundColor: '#F5F5F5',
  },
  inputToolbar: {
    // marginBottom: 10,
    paddingVertical: 15,
    justifyContent: 'center',
  },
  input_composer:{
    borderWidth:1,
    borderColor:'green'
  }
});
