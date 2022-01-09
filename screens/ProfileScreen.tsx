import { Text, StyleSheet, Image } from 'react-native';
import React from "react";
import { View } from '../components/Themed';

import { jordan } from "../data/profilepic"

class ProfileScreen extends React.Component {
  render(): React.ReactNode {
    return (
      <View style={styles.container}>
        <Image style={styles.profilePicture} source={jordan} />
        <Text style={styles.name}>Jordan Lipson</Text>
        <View style={styles.bio}>
          <View style={styles.bioSection}>
            <Text style={styles.bioSectiontitle}>About Me</Text>
            <Text style={styles.bioText}>Computer Science at Carleton University</Text>
            <Text style={styles.bioText}>Degree: Bachelor's</Text>
            <Text style={styles.bioText}>Lives Toronto, Canada</Text>
          </View>
          <View style={styles.bioSection}>
            <Text style={styles.bioSectiontitle}>Talk to me about...</Text>
            <Text style={styles.bioText}>Hackathons</Text>
          </View>
          <View style={styles.bioSection}>
            <Text style={styles.bioSectiontitle}>My hobbies are...</Text>
            <Text style={styles.bioText}>Fashion</Text>
            <Text style={styles.bioText}>Languages</Text>
            <Text style={styles.bioText}>Travelling</Text>
          </View>
          <View style={styles.bioSection}>
            <Text style={styles.bioSectiontitle}>Connect with me:</Text>
            <Text style={styles.bioText}>LinkedIn</Text>
            <Text style={styles.bioText}>Instagram</Text>
            <Text style={styles.bioText}>Github</Text>
            <Text style={styles.bioText}>Website</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%"
  },
  profilePicture: {
    height: 200,
    width: 200,
    backgroundColor: "#f0cee1",
    borderRadius: 100,
    marginTop: 50
  },
  name: {
    fontSize: 30,
    textAlign: "center",
    marginTop: 30
  },
  bio: {
    width: "80%",
    marginTop: 10
  },
  bioSection: {
    marginTop: 10,
    width: "100%"
  },
  bioSectiontitle: {
    textAlign: "left",
    fontSize: 18,
    fontWeight: "bold"
  },
  bioText: {

  }
});

export default ProfileScreen;
