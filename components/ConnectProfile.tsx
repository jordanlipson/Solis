import React from "react";
import { ReactNode } from "react"
import { StyleSheet } from "react-native"
import { Text, View } from './Themed';

class ConnectProfile extends React.Component<any, any> {
  render = () : ReactNode => {
    return <View style={styles.profile}>
      <View style={styles.picture}></View>
      <View style={styles.text}>
        <Text style={styles.name}>{this.props.name}</Text>
        <Text style={styles.title}>{this.props.title}</Text>
      </View>
    </View>
  }
}

const styles = StyleSheet.create({
  profile: {
    width: "100%",
    padding: 20,
    marginVertical: 5,
    backgroundColor: "#f2fcff",
    borderRadius: 7,
    display: "flex",
    flexDirection: "row"
  },
  picture: {
    width: 80,
    height: 80,
    backgroundColor: "#f0cee1",
    borderRadius: 12,
    flex: 0
  },
  text: {
    flex: 1,
    marginLeft: 22,
    backgroundColor: "#00000000"
  },
  name: {
    fontSize: 20
  },
  title: {
    fontSize: 14
  }
});

export default ConnectProfile;
