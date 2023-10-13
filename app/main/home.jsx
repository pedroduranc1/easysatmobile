import { Text, View } from "react-native";
import React from "react";
import ContainerFondo from "../../src/components/ui/ContainerFondo";
import TobBarOptions from "../../src/components/ui/TobBarOptions";
import { Image } from "expo-image";
import buho from "../../assets/logoNuevo.png";
import { useQuery, useQueryClient } from "react-query";

const home = () => {

  const queryCl = useQueryClient();
  const token = queryCl.getQueryData("token");

  const { data: User } = useQuery(token, async () => UserCtrl.getMe(token));

  return (
    <ContainerFondo>
      <View className="flex flex-1 w-full h-full ">
        <View className="relative">
          <TobBarOptions />

          <View className="flex items-center p-4 justify-center bg-white flex-row mx-auto h-[35%] rounded-md w-[90%] mt-10 shadow-lg">
            <Image
              source={buho}
              style={{ objectFit: "cover" }}
              className="w-[30%] h-full"
            />
            <View className="w-[60%] flex justify-center items-center">
              <Text>Bienvenido a EasySAT</Text>
              <Text>{User?.Username}</Text>
            </View>
          </View>
        </View>
      </View>
    </ContainerFondo>
  );
};

export default home;
