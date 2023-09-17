import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Progress from "../components/Progress";
import { Icon } from "@rneui/themed";
import FloatButton from "../components/FloatButton";
import CircularProgress from "react-native-circular-progress-indicator";

export default function TenderDetails({ route, navigation }) {
  const { itemId } = route.params;

  const handleFAB = () => {
    navigation.navigate("Add Expenditure");
  };

  return (
    <View className="px-2 py-4 flex-1 bg-gray-100 overflow-y-auto">
      <Progress total={2980000} remaining={1680000} spent={1398000} />
      <Text className="mt-4 text-2xl font-bold">Expenditures: </Text>

      <View className="overflow-y-auto">
        <TouchableOpacity
          onPress={() => navigation.navigate("Expenditure")}
          className="bg-white mt-2 flex flex-row justify-between px-2 py-2 rounded-xl shadow-2xl"
        >
          <View className="flex flex-row gap-4 items-center">
            <View
              className="p-4 rounded-full"
              style={{ backgroundColor: "#CDD9F6" }}
            >
              <Icon name="infinite-outline" type="ionicon" color="#054BB4" />
            </View>
            <View className="flex flex-row justify-between">
              <Text className="text-lg font-semibold">Casual Workers</Text>
            </View>
          </View>

          <View className="items-center">
            <Text className="text-lg text-blue-900">KSh.</Text>
            <Text className="text-lg text-blue-900">175,000</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity className="bg-white mt-2 flex flex-row justify-between px-2 py-2 rounded-xl shadow-2xl">
          <View className="flex flex-row gap-4 items-center">
            <View
              className="p-4 rounded-full"
              style={{ backgroundColor: "#CDD9F6" }}
            >
              <Icon name="people-outline" type="ionicon" color="#054BB4" />
            </View>
            <View className="flex flex-row justify-between">
              <Text className="text-lg font-semibold">Administration</Text>
            </View>
          </View>

          <View className="items-center">
            <Text className="text-lg text-blue-900">KSh.</Text>
            <Text className="text-lg text-blue-900">200,000</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity className="bg-white mt-2 flex flex-row justify-between px-2 py-2 rounded-xl shadow-2xl">
          <View className="flex flex-row gap-4 items-center">
            <View
              className="p-4 rounded-full"
              style={{ backgroundColor: "#CDD9F6" }}
            >
              <Icon name="rocket-outline" type="ionicon" color="#054BB4" />
            </View>
            <View className="flex flex-row justify-between">
              <Text className="text-lg font-semibold">Equipment</Text>
            </View>
          </View>

          <View className="items-center">
            <Text className="text-lg text-blue-900">KSh.</Text>
            <Text className="text-lg text-blue-900">1,200,000</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity className="bg-white mt-2 flex flex-row justify-between px-2 py-2 rounded-xl shadow-2xl">
          <View className="flex flex-row gap-4 items-center">
            <View
              className="p-4 rounded-full"
              style={{ backgroundColor: "#CDD9F6" }}
            >
              <Icon name="rocket-outline" type="ionicon" color="#054BB4" />
            </View>
            <View className="flex flex-row justify-between">
              <Text className="text-lg font-semibold">Engineer</Text>
            </View>
          </View>

          <View className="items-center">
            <Text className="text-lg text-blue-900">KSh.</Text>
            <Text className="text-lg text-blue-900">200,000</Text>
          </View>
        </TouchableOpacity>
      </View>

      <FloatButton handleFAB={handleFAB} />
    </View>
  );
}
