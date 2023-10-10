import { View, Text } from "react-native";
import React from "react";
import ContainerFondo from "../../src/components/ui/ContainerFondo";
import { Image } from "react-native";
import logo from "../../assets/logoNuevo.png";
import { useAuth } from "../../src/hooks/useAuth";
import { router } from "expo-router";

const home = () => {
  const { User } = useAuth()

  if(User) return router.replace("/main")
  
  return (
    <View className="flex-1 flex justify-center items-center">
      <ContainerFondo>
        <Image source={logo} className="w-20 h-24 object-center object-contain bg-no-repeat" />
        <Text className="font-bold text-4xl">home</Text>
        <Text className="font-bold text-4xl">{User ? User.Username : "Sin Data"}</Text>
      
      </ContainerFondo>
    </View>
  );
};

export default home;
