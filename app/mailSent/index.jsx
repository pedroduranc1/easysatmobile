import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import ContainerFondo from "../../src/components/ui/ContainerFondo";
import { Check } from "lucide-react-native";
import { router } from "expo-router";

const index = () => {
  return (
    <ContainerFondo>
      <View className="flex-1 flex justify-center items-center">
        <View className="bg-LogoGreen w-[80%] p-4 mb-20 mx-auto rounded-full flex justify-center items-center">
          <Check className="text-white" size={100} />
        </View>
        <Text className="text-white text-center text-[14px] font-bold">
          El correo fue enviado exitosamente revisa tu inbox para reestablecer
          tu contraseña
        </Text>

        <TouchableOpacity
          onPress={() => router.back()}
          className="mt-10 bg-white rounded-md py-3 px-[10%]"
        >
          <Text>Volver al Inicio</Text>
        </TouchableOpacity>
      </View>
    </ContainerFondo>
  );
};

export default index;
