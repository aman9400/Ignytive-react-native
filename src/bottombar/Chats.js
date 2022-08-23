import {
  View,
  Text,
  Button,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { styles } from "../screens/styles/MessageStyle";
import { ScrollView } from "react-native-gesture-handler";
const Messages = [
  {
    id: "1",
    userName: "Jenny",
    userImg: require("../assets/profile1.jpg"),
    messageTime: "10:36AM",
    messageText: "Hey! This is my message test page.",
    messageNumber: "1",
  },
  {
    id: "2",
    userName: "Rocher",
    userImg: require("../assets/profile2.jpg"),
    messageTime: "01:22PM",
    messageText: "Hey! This is my message test page.",
    messageNumber: "4",
  },
  {
    id: "3",
    userName: "Mike",
    userImg: require("../assets/profile1.jpg"),
    messageTime: "02:38PM",
    messageText: "Hey! This is my message test page.",
    messageNumber: "2",
  },
  {
    id: "4",
    userName: "Shuzi",
    userImg: require("../assets/profile2.jpg"),
    messageTime: "03:21AM",
    messageText: "Hey! This is my message test page. message test page.",
    messageNumber: "9",
  },
];

const Chats = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flat_card}
        data={Messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ScrollView>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Chats", { userName: item.userName })
              }
            >
              <View style={styles.card}>
                <Image style={styles.user_images} source={item.userImg}></Image>
                <View style={styles.name_message}>
                  <Text style={styles.name}>{item.userName}</Text>
                  <Text style={styles.message}>{item.messageText}</Text>
                </View>
                <View style={styles.time_count}>
                  <Text style={styles.time}>{item.messageTime}</Text>
                  <View style={styles.count_box}>
                    <Text style={styles.count}>{item.messageNumber}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </ScrollView>
        )}
      />
      {/* <TouchableOpacity onPress={() => navigation.navigate("Messages")}>
        <Text style={{ color: "blue" }}>chat screen</Text>
      </TouchableOpacity> */}
    </View>
  );
};
export default Chats;
