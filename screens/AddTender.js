import { View, Text } from "react-native";
import React from "react";
import { Icon } from "@rneui/themed";

export default function AddTender() {
  return (
    <View className="flex flex-1 flex-col justify-around items-center">
      <View className="p-4 rounded-full" style={{ backgroundColor: "#fff" }}>
        <Icon name="euro" color="#054BB4" size={48} />
      </View>
    </View>
  );
}
