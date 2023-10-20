import { Text, View } from "react-native";
import React from "react";
import TobBarOptions from "../../src/components/ui/TobBarOptions";
import { Image } from "expo-image";
import buho from "../../assets/logonuevo.webp";
import { useQuery, useQueryClient } from "react-query";

const home = () => {
  // const queryCl = useQueryClient();
  // const token = queryCl.getQueryData("token");

  // const { data: User } = useQuery(token, async () => UserCtrl.getMe(token));

  return (
    <>
      <TobBarOptions route={"home"} />
      <View className="flex flex-1 w-[90%] mx-auto">
        
      </View>
    </>
  );
};

export default home;
