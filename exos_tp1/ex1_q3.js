import React from "react";
import { View, Text } from "react-native";
const App = () => {
  return (
    <View
      style={{
        flex: 1,
        borderWidth: 1,
        backgroundColor: "purple",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          color: "#fff",
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        Hello World
      </Text>
    </View>
  );
};
export default App;
