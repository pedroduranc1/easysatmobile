import { View, Text } from "react-native";
import React from "react";
import ContainerFondo from "../../src/components/ui/ContainerFondo";

const list = () => {
  return (
    <View className="flex-1 flex justify-center items-center">
      <ContainerFondo>
        <Text className="font-bold text-4xl">Blogs</Text>
      </ContainerFondo>
    </View>
  );
};

export default list;
