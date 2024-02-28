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
  separator: {
    marginVertical: 8,
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

function Separator() {
  return <View style={styles.separator} />;
}

export default class HelloWorldApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  IncrementItem = () => {
    this.setState({ count: this.state.count + 1 });
  };
  DecreaseItem = () => {
    this.setState({ count: this.state.count - 1 });
  };
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
          <Separator />
          <Button
            title="Appuyez ici ! :D"
            color="orange"
            onPress={() => alert("Vous avez appuyé sur le bouton !")}
          />
          <Separator />
          <Button title="+" onPress={this.IncrementItem} />
          <Separator />
          <Button title="-" onPress={this.DecreaseItem} />
          <Separator />
          <Text> Count: {this.state.count}</Text>
        </View>
      </ImageBackground>
    );
  }
}
