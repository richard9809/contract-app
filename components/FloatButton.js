import { View, Text } from "react-native";
import React, { useState } from "react";
import { FAB } from "@rneui/themed";

export default function FloatButton({ handleFAB }) {
  const [visible, setVisible] = useState(true);
  return (
    <FAB
      visible={visible}
      icon={{ name: "add", color: "white" }}
      color="#054BB4"
      placement="right"
      onPress={handleFAB}
    />
  );
}
