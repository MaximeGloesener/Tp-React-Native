import React, { Component } from "react";
import { Text, View, StyleSheet, ImageBackground, Button } from "react-native";
const urlweb =
  "https://codetheweb.blog/assets/img/posts/css-advanced-background-images/cover.jpg";
const styles = StyleSheet.create({
  bigBlue: {
    marginTop: 20,
    color: "blue",
    fontWeight: "bold",
    fontSize: 40,
  },
});
export default class HelloWorldApp extends Component {
  render() {
    return (
      <ImageBackground
        source={{ uri: urlweb }}
        style={{ width: "100%", height: "100%" }}
      >
        <View>
          <Text style={styles.bigBlue}>
            Bonjour -- Tout le monde ceci est la base de mon Appli en React
            Native{" "}
          </Text>
          <Button title="Appuyez ici ! :D" color="orange" />
        </View>
      </ImageBackground>
    );
  }
}
