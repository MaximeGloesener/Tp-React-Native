import React from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { Formik } from "formik";

const LoginForm = () => {
  const handleLogin = (values) => {
    // Ajoutez ici la logique de connexion
    console.log(values);
  };

  return (
    <Formik
      initialValues={{
        email: "",
        nom: "",
        prenom: "",
        adresse: "",
        password: "",
      }}
      onSubmit={(values) => handleLogin(values)}
    >
      {({ handleChange, handleSubmit, values }) => (
        <View style={styles.container}>
          <TextInput
            label="Email"
            value={values.email}
            onChangeText={handleChange("email")}
            style={styles.input}
          />
          <TextInput
            label="Nom"
            value={values.nom}
            onChangeText={handleChange("nom")}
            style={styles.input}
          />
          <TextInput
            label="Prenom"
            value={values.prenom}s
            onChangeText={handleChange("prenom")}
            style={styles.input}
          />
          <TextInput
            label="Adresse"
            value={values.adresse}
            onChangeText={handleChange("adresse")}
            style={styles.input}
          />
          <TextInput
            label="Password"
            value={values.password}
            onChangeText={handleChange("password")}
            style={styles.input}
            secureTextEntry
          />
          <Button mode="contained" onPress={handleSubmit} style={styles.button}>
            Connexion
          </Button>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  input: {
    marginVertical: 8,
  },
  button: {
    marginVertical: 16,
  },
});

export default LoginForm;
