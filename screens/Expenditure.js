import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function Expenditure() {
  const [selectedButton, setSelectedButton] = useState("All");

  const handleButtonPress = (button) => {
    setSelectedButton(button);
  };

  return (
    <View className="flex-1 px-4 bg-white overflow-scroll">
      <View className="flex flex-row mt-4 justify-between">
        <TouchableOpacity
          className={`py-2 px-6 ${
            selectedButton === "All" ? "bg-blue-500 " : "border border-gray-200"
          } uppercase rounded-xl`}
          onPress={() => handleButtonPress("All")}
        >
          <Text className={`${selectedButton === "All" ? "text-white" : ""}`}>
            All
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className={`py-2 px-6 ${
            selectedButton === "Year"
              ? "bg-blue-500 "
              : "border border-gray-200"
          } uppercase rounded-xl`}
          onPress={() => handleButtonPress("Year")}
        >
          <Text className={`${selectedButton === "Year" ? "text-white" : ""}`}>
            Year
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className={`py-2 px-6 ${
            selectedButton === "Month"
              ? "bg-blue-500 "
              : "border border-gray-200"
          } uppercase rounded-xl`}
          onPress={() => handleButtonPress("Month")}
        >
          <Text className={`${selectedButton === "Month" ? "text-white" : ""}`}>
            Month
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className={`py-2 px-6 ${
            selectedButton === "Day" ? "bg-blue-500 " : "border border-gray-200"
          } uppercase rounded-xl`}
          onPress={() => handleButtonPress("Day")}
        >
          <Text className={`${selectedButton === "Day" ? "text-white" : ""}`}>
            Day
          </Text>
        </TouchableOpacity>
      </View>

      <View className="py-8 flex flex-col gap-8">
        <View className="flex flex-row justify-between items-center">
          <View className="flex flex-col gap-1">
            <Text className="uppercase font-semibold text-gray-600">
              13 September 2023
            </Text>
            <Text className="text-gray-400">10:30PM</Text>
          </View>
          <Text className="text-lg font-semibold">KShs. 17,500</Text>
        </View>

        <View className="flex flex-row justify-between items-center">
          <View className="flex flex-col gap-1">
            <Text className="uppercase font-semibold text-gray-600">
              10 September 2023
            </Text>
            <Text className="text-gray-400">11:30 AM</Text>
          </View>
          <Text className="text-lg font-semibold">KShs. 12,500</Text>
        </View>

        <View className="flex flex-row justify-between items-center">
          <View className="flex flex-col gap-1">
            <Text className="uppercase font-semibold text-gray-600">
              28 August 2023
            </Text>
            <Text className="text-gray-400">8:30PM</Text>
          </View>
          <Text className="text-lg font-semibold">KShs. 35,000</Text>
        </View>
      </View>
    </View>
  );
}
