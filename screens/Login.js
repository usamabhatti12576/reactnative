import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";

import { Input, Button } from "react-native-elements";
import { auth } from "../firebase";
import Home from "./Home";
import { useEffect } from "react";

export default function App({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        navigation.replace("Home");
      }
    });

    return unsubscribe;
  }, []);

  const handlePress = () => {
    console.log("Text Pressed");
  };

  const handleButton = () => {
    Alert.alert(
      "App is under development",
      "Currently we are under developement. You will be entertained soon!",
      [
        {
          text: "Give Suggestions",
          onPress: () => console.log("Review Added"),
        },
        { text: "Exit" },
      ]
    );
  };
  return (
    <View style={styles.container}>
      <Input
        placeholder="Email."
        placeholderTextColor="#003f5c"
        onChangeText={(email) => setEmail(email)}
      />
      <Input
        placeholder="Password."
        placeholderTextColor="#003f5c"
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
      />

      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText} onPress={handleButton}>
          LOGIN
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn}>
        <Text
          style={styles.loginText}
          onPress={() => navigation.navigate("Register")}
        >
          REGISTER
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },

  icon: {
    resizeMode: "contain",
    width: "50%",
    height: "10%",
  },

  inputView: {
    backgroundColor: "#f7d291",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

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
});
