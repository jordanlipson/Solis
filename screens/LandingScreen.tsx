import { Text, StyleSheet, Button } from 'react-native';
import React from "react";
import { View } from '../components/Themed';

interface myProps {
  toSignup: any
}

class LandingScreen extends React.Component<myProps, {}> {
  render(): React.ReactNode {
    return (
      <View style={styles.container}>
        <View style={styles.logoPlaceholder} />
        <Text>Meet other woman-aligned university students in STEM.</Text>
        <Button title="Sign Up / to app" onPress={this.props.toSignup} />
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
  }
});

export default LandingScreen;
