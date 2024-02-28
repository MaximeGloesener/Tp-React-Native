import React, {useEffect} from "react";
import { View, Text, StyleSheet } from "react-native";
const LoginScreen = (props) => {
    useEffect( ()=> {
        console.log("nom=", props.route.params.nom);
        console.log("age=", props.route.params.age);
        }
        );       
  return (
    <View style={styles.container}>
      <Text> Login Screen Page </Text>
      <Text> nom={props.route.params.nom} </Text>
        <Text> age={props.route.params.age} </Text>
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
});
export default LoginScreen;
