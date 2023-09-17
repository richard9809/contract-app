import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { RadioButton } from "react-native-paper";
import { Icon } from "@rneui/themed";

export default function AddExpenditure() {
  const [amount, setAmount] = useState();
  const [value, setValue] = useState("");

  const handleSubmit = () => {};

  return (
    <View className="flex-1 justify-center bg-gray-100 px-4 ">
      {/* <View className="p-4 rounded-full" style={{ backgroundColor: "#fff" }}>
        <Icon name="euro" color="#054BB4" size={48} />
      </View> */}
      <View className="bg-white px-2 py-4 rounded-xl">
        <View className="form space-y-2">
          <Text className="text-gray-700 ml-2 font-bold text-md">
            Expenditure Name
          </Text>
          <TextInput
            className="p-3 bg-gray-100 text-gray-700 rounded-2xl"
            value=""
            placeholder="Enter Expenditure Name"
            onChangeText={() => {}}
          />
          <Text className="text-gray-700 ml-2 font-bold text-md">
            Amount To Be Spent (KShs.)
          </Text>
          <TextInput
            className="p-3 bg-gray-100 text-gray-700 rounded-2xl"
            value={amount}
            onChangeText={() => setAmount(amount)}
            placeholder="Enter Amount"
            keyboardType="numeric"
          />
          <Text className="text-gray-700 ml-2 font-bold text-md">
            Type of Expenditure
          </Text>
          <RadioButton.Group
            onValueChange={(newValue) => setValue(newValue)}
            value={value}
          >
            <RadioButton.Item label="Administration" value="administration" />
            <RadioButton.Item label="Equipment" value="equipment" />
            <RadioButton.Item label="Salary" value="salary" />
          </RadioButton.Group>

          <TouchableOpacity
            className="py-3 bg-blue-500 rounded-xl"
            onPress={handleSubmit}
          >
            <Text className="font-xl font-bold text-center text-gray-50">
              Add Expenditure
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
