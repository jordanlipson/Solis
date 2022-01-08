import { Text, StyleSheet, Button, TextInput } from 'react-native';
import React from "react";
import { View } from '../components/Themed';

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
  }

  onChangeInput = (val: any, param: string) => { this.setState({ [param]: val }) }

  render(): React.ReactNode {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Sign up</Text>
        {
          fields.map((f, i) => {
            return <>
              {/* <Text style={styles.label} key={`label-${i}`}>{f.label}</Text> */}
              <TextInput
                style={styles.input}
                placeholder={f.label}
                onChangeText={val => this.onChangeInput(val, f.varname)}
                // @ts-ignore
                value={this.state[f.varname]}
                key={`input-${i}`}
                allowFontScaling
              />
            </>
          })
        }
        <Button title="Sign Up" onPress={this.signup} />
        <Button title="Skip" onPress={this.props.toApp} />
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
  }
});

export default SignupScreen;
