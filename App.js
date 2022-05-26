import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import Setting from "./screens/Setting";
import Login from "./screens/Login";
import Register from "./screens/Register";

const Stack = createStackNavigator();
const globalScreenOptions = {
  headerStyle: { backgroundColor: "#F9A204" },
  headerTitleStyle: { color: "white" },
  headerTintColor: "white",
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={globalScreenOptions}
        initialRouteName="Login"
      >
        <Stack.Screen
          name="Login"
          options={{ title: "Let's Login Now!" }}
          component={Login}
        />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Setting" component={Setting} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
