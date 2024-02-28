import React from "react";
import { View, Text, StyleSheet, TextInput, Image } from "react-native";
import LOGO from "./assets/logo.jpg";
const urlweb =
  "https://static.wikia.nocookie.net/el_random/images/9/98/Shrek.png/revision/latest/smart/width/250/height/250?cb=20200510164459&path-prefix=es";
const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.hello}>Hello world avec image</Text>
      <Image source={LOGO} style={styles.logo} />
      <Image source={{ uri: urlweb }} style={styles.logo} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 5,
    backgroundColor: "green",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  hello: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  logo: {
    height: 150,
    width: 150,
  },
});
export default App;
