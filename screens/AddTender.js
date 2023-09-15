import { View, Text, Button, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Icon } from "@rneui/themed";
import { TextInput } from "react-native";
import DateTimePicker, {
  DateTimePickerAndroid,
} from "@react-native-community/datetimepicker";
import { RadioButton } from "react-native-paper";

export default function AddTender() {
  const [tenderName, setTenderName] = useState();
  const [date, setDate] = useState(new Date());
  const [amount, setAmount] = useState();
  const [value, setValue] = useState("");

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const handleSubmit = () => {};

  return (
    <View className="flex flex-1 flex-col justify-around px-4">
      {/* <View className="p-4 rounded-full " style={{ backgroundColor: "#fff" }}>
        <Icon name="euro" color="#054BB4" size={48} />
      </View> */}

      <View className="bg-white  px-4 pt-4 py-4 rounded-xl">
        <View className="form space-y-2">
          <Text className="text-gray-700 ml-2 font-bold text-md">
            Tender Name
          </Text>
          <TextInput
            className="p-3 bg-gray-100 text-gray-700 rounded-2xl"
            value={tenderName}
            placeholder="Enter Tender Name"
            onChangeText={() => setTenderName(tenderName)}
          />
          <View className="flex flex-row items-center gap-2 px-2">
            <Button onPress={showDatepicker} title="Choose Date" />
            <Text className="text-md">{date.toDateString()}</Text>
          </View>

          <Text className="text-gray-700 ml-2 font-bold text-md">
            Amount (KShs.)
          </Text>
          <TextInput
            className="p-3 bg-gray-100 text-gray-700 rounded-2xl"
            value={amount}
            onChangeText={() => setAmount(amount)}
            placeholder="Enter Amount"
            keyboardType="numeric"
          />
          <Text className="text-gray-700 ml-2 font-bold text-md">
            Type of Tender
          </Text>
          <RadioButton.Group
            onValueChange={(newValue) => setValue(newValue)}
            value={value}
          >
            <RadioButton.Item label="CDF" value="cdf" />
            <RadioButton.Item label="COUNTY" value="county" />
            <RadioButton.Item label="KERA" value="kera" />
          </RadioButton.Group>

          <TouchableOpacity
            className="py-3 bg-blue-500 rounded-xl"
            onPress={handleSubmit}
          >
            <Text className="font-xl font-bold text-center text-gray-50">
              Add Tender
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
