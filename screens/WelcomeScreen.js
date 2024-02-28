import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";



const WelcomeScreen = (props) => {
    const goTo = () =>
    {
    props.navigation.navigate("Login", {
    nom : "Dupont",
    age : 47,
    });
    }
    return (
    <View style={styles.container}>
      <Text> Welcome Screen Page </Text>
      <TouchableOpacity onPress={goTo}>
        <View style={styles.button}>
          <Text> Aller à Home </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightblue",
  },
  button: {
    backgroundColor: "lightblue",
    borderColor: "darkblue",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 40,
  },
});
export default WelcomeScreen;
