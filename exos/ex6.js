import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Button,
  Image,
} from "react-native";
import LOGO from "./assets/logo.jpg";
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
  logo: {
    height: 150,
    width: 150,
    marginTop: 10,
  },
  container: {
    flex: 1,
    borderWidth: 5,
    backgroundColor: "yellow",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  hello: {
    color: "green",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
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
      <View style={styles.container}>
        <Text style={styles.bigBlue}>
          Bonjour -- Tout le monde ceci est la base de mon Appli en React Native{" "}
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
        <TouchableHighlight onPress={() => alert("Touchable Zone")}>
          <Image source={LOGO} style={styles.logo} />
        </TouchableHighlight>
      </View>
    );
  }
}
