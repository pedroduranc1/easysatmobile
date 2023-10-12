import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import Icon from "./Icon";
import { router } from "expo-router";
import { useAuth } from "../../hooks/useAuth";

const TobBarOptions = () => {
  const {User} = useAuth()
  
  const handleLogout = () => {
    router.replace("/login")
  }

  return (
    <View className="w-full pt-[10%] px-[5%] flex flex-row h-[100px] justify-between items-center bg-white rounded-b-2xl ">
      <TouchableOpacity>
        <Icon name={"MessageCircle"} />
      </TouchableOpacity>
      <Text className="font-bold text-black text-base">{User && User?.Username}</Text>
      <TouchableOpacity onPress={()=> handleLogout()}>
        <Icon name={"LogOut"} />
      </TouchableOpacity>
    </View>
  );
};

export default TobBarOptions;
