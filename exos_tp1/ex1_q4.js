import React from "react";
import { View, Text, StyleSheet } from "react-native";
const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.hello}>Hello World </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 5,
    backgroundColor: "purple",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  hello: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
export default App;
