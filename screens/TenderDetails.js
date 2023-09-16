import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Progress from "../components/Progress";
import { Icon } from "@rneui/themed";
import { ProgressBar, MD3Colors } from "react-native-paper";
import FloatButton from "../components/FloatButton";

export default function TenderDetails({ route, navigation }) {
  const { itemId } = route.params;

  const handleFAB = () => {
    navigation.navigate("Expenditure");
  };

  return (
    <View className="px-2 py-4 flex-1 bg-gray-100 overflow-y-auto">
      <Progress total={"2,980,000"} remaining={"1,680,000"} spent="1,300,000" />
      <Text className="mt-4 text-2xl font-bold">Expenditures: </Text>

      <View className="overflow-y-auto">
        <TouchableOpacity className="bg-white mt-2 flex flex-row justify-between px-2 py-2 rounded-xl shadow-2xl">
          <View className="flex flex-row gap-4 items-center">
            <View
              className="p-4 rounded-full"
              style={{ backgroundColor: "#CDD9F6" }}
            >
              <Icon name="infinite-outline" type="ionicon" color="#054BB4" />
            </View>
            <View className="flex flex-row justify-between">
              <Text className="text-lg font-semibold">Casual Workers</Text>
              <ProgressBar progress={0.5} color={MD3Colors.error50} />
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
              <ProgressBar progress={0.5} color={MD3Colors.error50} />
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
              <ProgressBar progress={0.5} color={MD3Colors.error50} />
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
              <Text className="text-lg font-semibold">Equipment</Text>
              <ProgressBar progress={0.5} color={MD3Colors.error50} />
            </View>
          </View>

          <View className="items-center">
            <Text className="text-lg text-blue-900">KSh.</Text>
            <Text className="text-lg text-blue-900">1,200,000</Text>
          </View>
        </TouchableOpacity>
      </View>

      <FloatButton handleFAB={handleFAB} />
    </View>
  );
}
