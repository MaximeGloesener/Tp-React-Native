import React, { Component } from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 5,
    backgroundColor: "yellow",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    borderWidth: 2,
    width: 200,
    height: 30,
    color: "black",
  },
});

export default class HelloWorldApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.setState({ text })}
          value={this.state.text}
        />
        <TextInput
          style={styles.textInput}
          editable={false}
          value={this.state.text}
        />
        <Button title="Afficher le texte" onPress={() => alert(this.state.text)} />
      </View>
    );
  }
}
