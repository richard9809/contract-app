import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { themeColors } from "../theme";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    if (email && password) {
      try {
        await signInWithEmailAndPassword(auth, email, password);
      } catch (error) {
        console.log("Got error: ", error.message);
      }
    }
  };
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : null}
    >
      <View
        className="flex-1 bg-white"
        style={{ backgroundColor: themeColors.bg }}
      >
        <SafeAreaView className="flex">
          <View className="flex-row justify-start">
            <TouchableOpacity
              className="bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4"
              onPress={() => navigation.goBack()}
            >
              <ArrowLeftIcon size="20" color="black" />
            </TouchableOpacity>
          </View>
          <View className="flex-row justify-center">
            <Image
              source={require("../assets/images/login.png")}
              style={{ width: 170, height: 170 }}
            />
          </View>
        </SafeAreaView>
        <View
          className="flex-1 bg-white px-8 pt-8"
          style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
        >
          <View className="form space-y-2">
            <Text className="text-gray-700 ml-4">Email Address</Text>
            <TextInput
              className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
              value={email}
              onChangeText={(value) => setEmail(value)}
              placeholder="Enter Email"
            />
            <Text className="text-gray-700 ml-4">Password</Text>
            <TextInput
              className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
              secureTextEntry
              value={password}
              onChangeText={(value) => setPassword(value)}
              placeholder="Enter Password"
            />
            <TouchableOpacity className="flex items-end mb-2">
              <Text className="text-gray-700">Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="py-3 bg-yellow-400 rounded-xl"
              onPress={handleSubmit}
            >
              <Text className="font-xl font-bold text-center text-gray-50">
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
          <Text className="text-xl text-gray-700 font-bold text-center py-2">
            Or
          </Text>
          <TouchableOpacity className="py-3 bg-gray-100 rounded-xl flex flex-row gap-2 justify-center">
            <Image
              source={require("../assets/icons/google.png")}
              className="w-5 h-5"
            />
            <Text className="font-xl font-bold text-center text-gray-700">
              Sign In with Google
            </Text>
          </TouchableOpacity>
          <View className="flex-row justify-center mt-5">
            <Text className="text-gray-500 font-semibold">
              Don't have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
              <Text className="font-semibold text-yellow-500">Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
