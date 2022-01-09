import { Text, ScrollView, StyleSheet, Image } from 'react-native';
import React from "react";
import { View } from '../components/Themed';

import { feedItems, jordan } from '../data/feed';

class HomeScreen extends React.Component {
  render(): React.ReactNode {
    return (
      <View style={styles.container}>
        <Text style={styles.hello}>Hello, Jordan!</Text>
        <Image style={styles.profilePictureBig} source={jordan} />
        <Text style={styles.heresyourfeed}>Here's your feed:</Text>
        <ScrollView style={styles.feedContainer}>
          {
            feedItems.map((f, i) => {
              return <View style={styles.feedItem} key={`feeditem-${i}`}>
                <Image style={styles.profilePicture} source={f.img} />
                <View style={styles.feedItemText}>
                  <Text style={styles.feedItemTitle}>{f.title}</Text>
                  <Text style={styles.feedItemBody}>{f.body}</Text>
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
  container: {
    backgroundColor: "#ffffff",
    paddingVertical: 20,
    paddingHorizontal: 30
  },
  profilePictureBig: {
    height: 80,
    width: 80,
    backgroundColor: "#f0cee1",
    borderRadius: 50,
    position: "absolute",
    right: 50,
    top: 0
  },
  hello: {
    fontSize: 28
  },
  heresyourfeed: {
    marginTop: 10
  },
  feedContainer: {
    height: "100%",
    marginTop: 20,
    marginHorizontal: -5
    // backgroundColor: "#f5f5f5", // temp
  },
  feedItem: {
    backgroundColor: "#f8f8f8", // temp
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    display: "flex",
    flexDirection: "row",
    marginTop: 10
  },
  profilePicture: {
    height: 50,
    width: 50,
    backgroundColor: "#f0cee1",
    borderRadius: 25,
    marginRight: 20
  },
  feedItemText: {
    backgroundColor: "#00000000",
    width: "80%",
  },
  feedItemTitle: {
    width: "100%",
  },
  feedItemBody: {
    width: "100%",
    fontStyle: "italic",
  }
});

export default HomeScreen;
