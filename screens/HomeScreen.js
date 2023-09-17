import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import useAuth from "../hooks/useAuth";
import { Avatar, Icon } from "@rneui/themed";
import FloatButton from "../components/FloatButton";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();
  const { user } = useAuth();
  const [selectedButton, setSelectedButton] = useState("Pending");

  const handleButtonPress = (button) => {
    setSelectedButton(button);
  };

  const handleFAB = () => {
    navigation.navigate("AddTender");
  };

  return (
    <SafeAreaView className="bg-white flex-1 flex-col overflow-y-auto px-4 py-4">
      <View className="flex flex-row justify-between items-center">
        <View className="flex flex-col">
          <Text className="text-lg font-light">Welcome back,</Text>
          <Text className="text-2xl font-bold">Richard Mulu</Text>
        </View>
        <Avatar
          size={56}
          rounded
          source={{ uri: "https://randomuser.me/api/portraits/men/35.jpg" }}
        />
      </View>

      <View
        className="mt-6 py-2 px-2 rounded-xl flex flex-row space-between shadow-sm"
        style={{ backgroundColor: "#E3E7F4" }}
      >
        <TouchableOpacity
          className={`flex-1 items-center py-4 rounded-xl ${
            selectedButton === "Pending" ? "bg-white" : ""
          }`}
          onPress={() => handleButtonPress("Pending")}
        >
          <Text
            className={`text-lg ${
              selectedButton === "Pending" ? "font-bold" : ""
            }`}
            style={{ color: "#054BB4" }}
          >
            Pending
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className={` flex-1 items-center py-4 rounded-xl ${
            selectedButton === "Completed" ? "bg-white" : ""
          }`}
          onPress={() => handleButtonPress("Completed")}
        >
          <Text
            className={`text-lg ${
              selectedButton === "Completed" ? "font-bold" : ""
            }`}
            style={{ color: "#054BB4" }}
          >
            Completed
          </Text>
        </TouchableOpacity>
      </View>

      <View className="mt-4">
        <Text className="text-lg font-bold">All Tenders</Text>
        <TouchableOpacity
          className="py-4 px-4 rounded-xl mt-2 flex flex-row justify-between items-center shadow-sm"
          style={{ backgroundColor: "#E3E7F4" }}
          onPress={() => {
            navigation.navigate("Tender Details", {
              itemId: 1,
            });
          }}
        >
          <View className="flex flex-row gap-4 items-center">
            <View
              className="p-2 rounded-full"
              style={{ backgroundColor: "#E7FFDE" }}
            >
              <Icon name="euro" color="#2DB517" />
            </View>
            <View className="flex flex-col">
              <Text className="text-lg font-bold">Kaumba Borehole</Text>
              <Text className="font-regular text-md text-gray-500">
                KShs. 4,899,600
              </Text>
            </View>
          </View>

          <Text className="text-2xl items-center" style={{ color: "#054BB4" }}>
            45%
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="py-4 px-4 rounded-xl mt-2 flex flex-row justify-between items-center shadow-sm"
          style={{ backgroundColor: "#E3E7F4" }}
        >
          <View className="flex flex-row gap-4 items-center">
            <View
              className="p-2 rounded-full"
              style={{ backgroundColor: "#FFE3E3" }}
            >
              <Icon name="check" color="#FF2525" />
            </View>
            <View className="flex flex-col justify-between">
              <Text className="text-lg font-bold">Mavindini Lab</Text>
              <Text className="font-regular text-gray-500">
                KShs. 1,864,699
              </Text>
            </View>
          </View>

          <Text className="text-2xl items-center" style={{ color: "#054BB4" }}>
            35%
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="py-4 px-4 rounded-xl mt-2 flex flex-row justify-between items-center shadow-sm"
          style={{ backgroundColor: "#E3E7F4" }}
        >
          <View className="flex flex-row gap-4 items-center">
            <View
              className="p-2 rounded-full"
              style={{ backgroundColor: "#CDD9F6" }}
            >
              <Icon name="lightbulb" color="#054BB4" />
            </View>
            <View className="flex flex-col justify-between">
              <Text className="text-lg font-bold">Katulani Road</Text>
              <Text className="font-regular text-gray-500">
                KShs. 2,599,600
              </Text>
            </View>
          </View>

          <Text className="text-2xl items-center" style={{ color: "#054BB4" }}>
            5%
          </Text>
        </TouchableOpacity>
      </View>

      <FloatButton handleFAB={handleFAB} />
    </SafeAreaView>
  );
}
