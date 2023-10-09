import { View, Text } from "react-native";
import React from "react";
import ContainerFondo from "../../src/components/ui/ContainerFondo";

const contabilidad = () => {
  return (
    <View className="flex-1 flex justify-center items-center">
      <ContainerFondo>
        <Text className="font-bold text-4xl">contabilidad</Text>
      </ContainerFondo>
    </View>
  );
};

export default contabilidad;
