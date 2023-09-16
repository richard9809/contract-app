import { View, Text } from "react-native";
import React from "react";
import { ProgressCircle } from "react-native-svg-charts";

export default function Progress({ total, remaining, spent }) {
  return (
    <View className="py-4 px-4 rounded-xl bg-white shadow-2xl">
      <View className="flex flex-row justify-between border-b-2 border-gray-100 py-2">
        <View>
          <Text className="text-lg text-gray-400">Total (KSh.)</Text>
          <Text className="text-xl font-bold ">{total}</Text>
        </View>
        <View className="items-end">
          <Text className="text-lg text-red-400">Remaining (KSh.)</Text>
          <Text className="text-xl font-bold ">{remaining}</Text>
        </View>
      </View>

      <View className="relative justify-center items-center">
        <ProgressCircle
          style={{ height: 200 }}
          progress={0.7}
          progressColor={"rgb(134, 65, 244)"}
          strokeWidth={15}
          backgroundColor="#E3E7F4"
        />

        <View className="absolute ">
          <Text className="text-center text-lg">Spent</Text>
          <Text className="italic text-2xl">{spent}</Text>
          <Text className="text-center text-lg font-semibold">of</Text>
          <Text className="italic text-2xl">{total}</Text>
        </View>
      </View>
    </View>
  );
}
