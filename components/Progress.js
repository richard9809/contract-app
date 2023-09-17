import { View, Text } from "react-native";
import React from "react";
import { ProgressCircle } from "react-native-svg-charts";
import CircularProgress from "react-native-circular-progress-indicator";

export default function Progress({ total, remaining, spent }) {
  const formattedTotal = total.toLocaleString();
  const formattedRemaining = remaining.toLocaleString();
  const formattedSpent = spent.toLocaleString();

  return (
    <View className="py-4 px-4 rounded-xl bg-white shadow-2xl">
      <View className="flex flex-row justify-between border-b-2 border-gray-100 py-2">
        <View>
          <Text className="text-lg text-gray-400">Total (KSh.)</Text>
          <Text className="text-xl font-bold ">{formattedTotal}</Text>
        </View>
        <View className="items-end">
          <Text className="text-lg text-red-400">Remaining (KSh.)</Text>
          <Text className="text-xl font-bold ">{formattedRemaining}</Text>
        </View>
      </View>

      <View className="relative justify-center items-center py-4">
        <CircularProgress
          radius={120}
          value={spent}
          valuePrefix="KShs."
          progressValueStyle={{
            fontSize: 24,
          }}
          maxValue={total}
          activeStrokeColor={"#054BB4"}
          inActiveStrokeColor={"#054BB4"}
          inActiveStrokeOpacity={0.2}
          inActiveStrokeWidth={6}
          duration={3000}
        />
      </View>
    </View>
  );
}
