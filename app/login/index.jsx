import React from "react";
import ContainerFondo from "../../src/components/ui/ContainerFondo";
import logo from "../../assets/logo.webp";
import { Image } from "expo-image";
import { Text, TextInput, TouchableOpacity } from "react-native";
import { router } from "expo-router";

const index = () => {
  return (
    <ContainerFondo>
      <Image
        source={logo}
        contentFit="contain"
        className="w-[70%] h-[30%] mt-[30%]"
      />

      <Text className="mt-[7%] text-start w-[90%] text-white font-bold">
        Correo
      </Text>
      <TextInput
        className="bg-white py-3 rounded-md w-[90%] px-[2%] mt-2"
        placeholder="correo@gmail.com"
        // onChangeText={onChangeText}
        // value={text}
      />
      <Text className="mt-[5%] text-start w-[90%] text-white font-bold">
        Contraseña
      </Text>
      <TextInput
        className="bg-white py-3 rounded-md w-[90%] px-[2%] mt-2"
        placeholder="*******"
        secureTextEntry={true}
        // onChangeText={onChangeText}
        // value={text}
      />
      <TouchableOpacity 
      onPress={()=> router.replace("/main")}
      className="bg-white w-[90%] rounded-md py-3 flex justify-center items-center mt-20">
        <Text>Iniciar Sesion</Text>
      </TouchableOpacity>
    </ContainerFondo>
  );
};

export default index;
