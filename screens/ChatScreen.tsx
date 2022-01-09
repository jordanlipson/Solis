import { Text, ScrollView, StyleSheet, Image } from 'react-native';
import React from "react";
import { View } from '../components/Themed';

import users from "../data/chat-users";

class ChatScreen extends React.Component {
  render(): React.ReactNode {
    return (
      <View>
        <ScrollView style={styles.chatContainer}>
          {
            users.map((chat, i) => {
              return <View style={styles.chat} key={`feeditem-${i}`}>
                <Image style={styles.profilePicture} source={chat.img} />
                <View style={styles.chatText}>
                  <Text style={styles.chatName}>{chat.name}</Text>
                  <Text style={styles.chatContent}>{chat.msg}</Text>
                </View>
              </View>
            })
          }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  chatContainer: {
    height: "100%"
  },
  chat: {
    // backgroundColor: "#f8f8f8", // temp
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc"
  },
  profilePicture: {
    height: 50,
    width: 50,
    backgroundColor: "#f0cee1",
    borderRadius: 25,
    marginRight: 20
  },
  chatText: {
    backgroundColor: "#00000000"
  },
  chatName: {
    width: "100%"
  },
  chatContent: {
    width: "100%",
    fontStyle: "italic"
  }
});

export default ChatScreen;
