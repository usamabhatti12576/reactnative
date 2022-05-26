import { Text, Input } from "react-native-elements";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import React from "react";
import { useState } from "react";
import { auth } from "../firebase";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [city, setCity] = useState("");

  const register = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        authUser.user.update({
          FullName: name,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="Full Name"
        placeholderTextColor="#003f5c"
        onChangeText={(text) => setFullName(text)}
      />
      <Input
        placeholder="Email"
        placeholderTextColor="#003f5c"
        onChangeText={(text) => setEmail(text)}
      />
      <Input
        placeholder="City"
        placeholderTextColor="#003f5c"
        onChangeText={(text) => setCity(text)}
      />
      <Input
        placeholder="Password"
        placeholderTextColor="#003f5c"
        type="Password"
        onChangeText={(text) => setPassword(text)}
      />

      <TouchableOpacity style={styles.loginBtn}>
        <Text
          style={styles.loginText}
          onPress={() => navigation.navigate("Login")}
        >
          REGITER
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  loginBtn: {
    width: "30%",
    borderRadius: 25,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F9A204",
    margin: 5,
  },
  loginText: {
    color: "white",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },
});
