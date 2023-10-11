import { View, Text } from "react-native";
import React from "react";
import Icon from "../ui/Icon";

const TabButtons = ({ icon, text, focused }) => {
  return (
    <View className="flex p-7 justify-center  items-center gap-1">
      <Icon focused={focused} name={icon} size={25} />
      <Text className={`${focused ? "font-bold" : ""} text-[9px]`}>
        {text}
      </Text>
    </View>
  );
};

export default TabButtons;
