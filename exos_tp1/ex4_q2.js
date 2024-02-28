import React, { Component } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 5,
    backgroundColor: "yellow",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  bigBlue: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 40,
  },
});
export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.bigBlue}>
          {" "}
          Bonjour Tout le monde ceci est la base de mon App en RN
        </Text>
      </View>
    );
  }
}
