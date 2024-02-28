import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.hello}> Hello World </Text>
      <TextInput style={styles.input} placeholder="Entrez votre texte" />
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
  input: {
    borderWidth: 2,
    width: 200,
    height: 30,
    color: "white",
  },
});
export default App;
