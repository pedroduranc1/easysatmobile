import { View, Text } from "react-native";
import React from "react";
import ContainerFondo from "../../src/components/ui/ContainerFondo";
import { Image } from "react-native";
import logo from "../../assets/logoNuevo.png";

const home = () => {
  return (
    <View className="flex-1 flex justify-center items-center">
      <ContainerFondo>
        <Image source={logo} className="w-20 h-24 object-center object-contain bg-no-repeat" />
        <Text className="font-bold text-4xl">home</Text>
      </ContainerFondo>
    </View>
  );
};

export default home;
