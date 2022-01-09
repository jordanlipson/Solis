import { Text, StyleSheet, Button, TextInput, Pressable } from 'react-native';
import React from "react";
import { View } from '../components/Themed';
// import client from "../helpers/db";

interface myProps {
  toApp: any
}

const fields = [
  { varname: "name", label: "First Name" },
  { varname: "Age", label: "Age" },
  { varname: "City", label: "City" },
  { varname: "Country", label: "Country" },
  { varname: "University", label: "University" },
  { varname: "Education Level", label: "Education Level" },
  { varname: "Year", label: "Year" },
  { varname: "Major", label: "Major" }
]

class SignupScreen extends React.Component<myProps, {}> {
  constructor(props:any) {
    super(props)
    this.state = {}
  }

  // collect inputted data and put into object
  signup = () => {
    let data: { [key: string]: any; } = {};
    fields.forEach(f => {
      // @ts-ignore
      data[f.varname] = this.state[f.varname];
    })

    console.log(data)

    // write data to db
    // client.connect((err:any) => {
    //   const collection = client.db("Users").collection("user");
    //   // perform actions on the collection object
    //   client.close();
    // });
  }

  onChangeInput = (val: any, param: string) => { this.setState({ [param]: val }) }

  render(): React.ReactNode {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Sign up</Text>
        {
          fields.map((f, i) => {
            return <TextInput
                style={styles.input}
                placeholder={f.label}
                onChangeText={val => this.onChangeInput(val, f.varname)}
                // @ts-ignore
                value={this.state[f.varname]}
                key={`input-${i}`}
                allowFontScaling
              />
              {/* <Text style={styles.label} key={`label-${i}`}>{f.label}</Text> */}
          })
        }
        <Pressable style={styles.btn} onPress={this.signup}>
          <Text style={styles.btnText}>Sign Up</Text>
        </Pressable>
        <Text style={styles.link} onPress={this.props.toApp}>demo: skip to app</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    marginBottom: 20
  },
  container: {
    paddingHorizontal: 40,
    paddingVertical: 80
  },
  logoPlaceholder: {
    height: 200,
    width: 300,
    backgroundColor: "#f0cee1",
  },
  label: {
    marginTop: 5
  },
  input: {
    borderColor: "#cccccc",
    borderBottomWidth: 1,
    fontSize: 18,
    marginBottom: 24
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
  },
  link: {
    color: "#F24A4A",
    width: "100%",
    textAlign: "center",
    marginTop: 20
  }
});

export default SignupScreen;
