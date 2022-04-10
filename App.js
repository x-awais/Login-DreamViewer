import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Image, Button, TextInput, Text, View } from 'react-native';

export default function App() {
  const [text, onChangeText] = React.useState("Username, Email & Phone");
  const [number, onChangeNumber] = React.useState(null);
  return (
    <View style={styles.heading}>
      <Text>Welcome Back</Text>
      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</Text>
      <View style={styles.input}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
       <TextInput
        style={styles.button}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Password"
        keyboardType="numeric"
      />
      <View style={styles.button}>
      <Button title="SignIn" />
       <Text>Forget Password?</Text>
      <Text>or Signup With</Text>
      <Image source={require("./assets/Facbook.png")}/>
      <Image source={require("./assets/Group.png")}/>
      <Image source={require("./assets/Googlelogo.png")}/>
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  heading: {
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 90,
    fontWeight: 'bold'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    width:300,
    backgroundColor: '#ababab',    
  },
  button: {
   margin: 12,
   width:50,
    backgroundColor: '#d79ee6',
  },
});

