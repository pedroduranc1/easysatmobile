import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import Icon from "./Icon";
import { router } from "expo-router";
import { useQuery, useQueryClient } from "react-query";
import { User } from "../../api/user/fb.user";

const UserCtrl = new User()
const TobBarOptions = () => {

  const queryCl = useQueryClient()
  const token = queryCl.getQueryData('token')

  const {data:User} = useQuery(token,async ()=>UserCtrl.getMe(token))
  
  const handleLogout = async () => {
    // await logout();
    router.replace("/")
  }

  return (
    <View className="w-full pt-[10%] px-[5%] flex flex-row h-[100px] justify-between items-center bg-white rounded-b-2xl ">
      <TouchableOpacity>
        <Icon name={"MessageCircle"} />
      </TouchableOpacity>
      <Text className="font-bold text-black text-base">{User?.Username}</Text>
      <TouchableOpacity onPress={()=> handleLogout()}>
        <Icon name={"LogOut"} />
      </TouchableOpacity>
    </View>
  );
};

export default TobBarOptions;
