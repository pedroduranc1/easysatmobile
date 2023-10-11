import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "./Icon";
import { router } from "expo-router";

const TobBarOptions = () => {
  return (
    <View className="w-full pt-[10%] px-[5%] flex flex-row h-[100px] justify-between items-center bg-white rounded-b-2xl ">
      <TouchableOpacity>
        <Icon name={"MessageCircle"} />
      </TouchableOpacity>
      <Text className="font-bold text-base">Pedroduranc1</Text>
      <TouchableOpacity onPress={()=>router.replace("/login")}>
        <Icon name={"LogOut"} />
      </TouchableOpacity>
    </View>
  );
};

export default TobBarOptions;
