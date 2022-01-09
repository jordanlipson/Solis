import { Text, StyleSheet, Pressable } from 'react-native';
import React from "react";
import { View } from '../components/Themed';

interface myProps {
  toSignup: any,
  toApp: any
}

class LandingScreen extends React.Component<myProps, {}> {
  render(): React.ReactNode {
    return (
      <View style={styles.container}>
        <View style={styles.logoPlaceholder} />
        <Text style={styles.text}>Meet other woman-aligned university students in STEM.</Text>
        <Pressable style={styles.btn} onPress={this.props.toSignup}>
          <Text style={styles.btnText}>Sign Up</Text>
        </Pressable>
        <Text style={styles.login}>
          Already have an account? 
          <Text style={styles.link} onPress={this.props.toApp}>&nbsp; Login (demo: skip to app)</Text>
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginVertical: 50,
    height: "100%"
  },
  logoPlaceholder: {
    height: 200,
    width: 300,
    backgroundColor: "#f0cee1",
    marginTop: 50,
    marginBottom: 50
  },
  text: {
    width: "70%",
    fontSize: 18,
    textAlign: "center",
    marginTop: 50,
  },
  btn: {
    width: 300,
    backgroundColor: "#f9caa7",
    borderRadius: 20,
    padding: 10,
    position: "absolute",
    bottom: 170
  },
  btnText: {
    textAlign: "center",
    fontSize: 18
  },
  login: {
    position: "absolute",
    bottom: 130
  },
  link: {
    color: "#F24A4A"
  }
});

export default LandingScreen;
