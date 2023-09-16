import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import useAuth from "../hooks/useAuth";
import AddTender from "../screens/AddTender";
import TenderDetails from "../screens/TenderDetails";
import Expenditure from "../screens/Expenditure";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  const { user } = useAuth();

  if (user) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen
            name="Home"
            options={{ headerShown: false }}
            component={HomeScreen}
          />
          <Stack.Screen
            name="AddTender"
            options={{ headerTitle: "Add Tender", headerTitleAlign: "center" }}
            component={AddTender}
          />
          <Stack.Screen
            name="Tender Details"
            options={{
              headerTitle: "Tender Details",
              headerTitleAlign: "center",
            }}
            component={TenderDetails}
          />
          <Stack.Screen
            name="Expenditure"
            options={{
              headerTitle: "Expenditure Details",
              headerTitleAlign: "center",
            }}
            component={Expenditure}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen
            name="Welcome"
            options={{ headerShown: false }}
            component={WelcomeScreen}
          />
          <Stack.Screen
            name="Login"
            options={{ headerShown: false }}
            component={LoginScreen}
          />
          <Stack.Screen
            name="SignUp"
            options={{ headerShown: false }}
            component={SignUpScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
