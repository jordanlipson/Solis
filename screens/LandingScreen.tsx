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
        <Text>Meet other woman-aligned university students in STEM.</Text>
        <Pressable style={styles.btn} onPress={this.props.toSignup}>
          <Text style={styles.btnText}>Sign Up</Text>
        </Pressable>
        <Pressable style={styles.btn} onPress={this.props.toApp}>
          <Text style={styles.btnText}>Skip signup (for demo)</Text>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginVertical: 50
  },
  logoPlaceholder: {
    height: 200,
    width: 300,
    backgroundColor: "#f0cee1",
  },
  btn: {
    width: 300,
    backgroundColor: "#f9caa7",
    borderRadius: 20,
    padding: 10,
    marginTop: 10
  },
  btnText: {
    textAlign: "center",
    fontSize: 18
  }
});

export default LandingScreen;
