import { Text, StyleSheet } from 'react-native';
import React from "react";
import { View } from '../components/Themed';

class ProfileScreen extends React.Component {
  render(): React.ReactNode {
    return (
      <View style={styles.container}>
        <View style={styles.profilePicture}></View>
        <Text style={styles.name}>Firstname Lastname</Text>
        <View style={styles.bio}>
          <View style={styles.bioSection}>
            <Text style={styles.bioSectiontitle}>About Me</Text>
            <Text style={styles.bioText}>University of Somewhere</Text>
            <Text style={styles.bioText}>Degree of Something</Text>
            <Text style={styles.bioText}>Lives Somewhere</Text>
          </View>
          <View style={styles.bioSection}>
            <Text style={styles.bioSectiontitle}>Talk to me about...</Text>
            <Text style={styles.bioText}>Something cool</Text>
          </View>
          <View style={styles.bioSection}>
            <Text style={styles.bioSectiontitle}>My hobbies are...</Text>
            <Text style={styles.bioText}>Interest 1</Text>
            <Text style={styles.bioText}>Interest 2</Text>
          </View>
          <View style={styles.bioSection}>
            <Text style={styles.bioSectiontitle}>Connect with me:</Text>
            <Text style={styles.bioText}>Social media 1</Text>
            <Text style={styles.bioText}>Social media 2</Text>
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
    marginVertical: 50
  },
  name: {
    fontSize: 30,
    textAlign: "center"
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
