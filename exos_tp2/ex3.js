import React, { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableHighlight,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";

import trafficLight from "./assets/traffic-light.png";
import trafficVert from "./assets/green.png";
import trafficOrange from "./assets/yellow.png";
import trafficRouge from "./assets/red.png";

const screenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: Constants.statusBarHeight,
  },
  image: {
    maxWidth: "100%",
    maxHeight: screenHeight - Constants.statusBarHeight - 150,
    resizeMode: "contain",
    marginBottom: 20,
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  button: {
    width: 80,
    paddingVertical: 8,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
  },
});

export default function TrafficLight() {
  const [couleur, setColor] = useState("");
  let imageSource = trafficLight; // img par défaut
  if (couleur === "rouge") {
    imageSource = trafficRouge;
  } else if (couleur === "orange") {
    imageSource = trafficOrange;
  } else if (couleur === "vert") {
    imageSource = trafficVert;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <Image source={imageSource} style={styles.image} />

      <View style={styles.buttonGroup}>
        <TouchableHighlight
          style={[styles.button, { backgroundColor: "#ce0100" }]}
          underlayColor="#9b0100"
          onPress={() => setColor("rouge")}
        >
          <Text style={styles.buttonText}>Rouge</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={[styles.button, { backgroundColor: "#ff8300" }]}
          underlayColor="#cc6900"
          onPress={() => setColor("orange")}
        >
          <Text style={styles.buttonText}>Orange</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={[styles.button, { backgroundColor: "#54a111" }]}
          underlayColor="#3c730c"
          onPress={() => setColor("vert")}
        >
          <Text style={styles.buttonText}>Vert</Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
}
