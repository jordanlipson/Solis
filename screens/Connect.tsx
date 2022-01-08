import { ScrollView, StyleSheet } from 'react-native';
import React from "react";

import EditScreenInfo from '../components/EditScreenInfo';
import Profile from '../components/Profile';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

import * as data from "../users.json";

const users = data.users

class ConnectScreen extends React.Component {
  render(): React.ReactNode {
    return (
      <ScrollView style={styles.container}>
        {/* <Text style={styles.title}>Tab One</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
        {
          users.map((user, i) => {
            return <Profile name={user.name} title={user.title} interests={user.interests} key={`user-${i}`} />
          })
        }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    backgroundColor: "#ffffff",
    overflow: "scroll"
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

export default ConnectScreen;
