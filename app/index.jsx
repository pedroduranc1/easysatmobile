import React, { useEffect, useRef } from "react";
import ContainerFondo from "../src/components/ui/ContainerFondo";
import logo from "../assets/logo.webp";
import { Image } from "expo-image";
import { Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import { useAuth } from "../src/hooks/useAuth";

const index = () => {
  const { User } = useAuth();

  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    return () => (isMounted.current = false);
  }, []);

  // Luego, antes de navegar:
  if (isMounted.current) {
    // Tu lógica de navegación aquí
    if (User) return router.replace("/main");
  }

  return (
    <ContainerFondo>
      <Image
        source={logo}
        contentFit="contain"
        className="w-[70%] h-[30%] mt-[30%]"
      />

      <TouchableOpacity
        onPress={() => {
          router.push("/login");
        }}
        className="w-[90%] mt-[10%] flex justify-center items-center bg-white rounded-md py-3"
      >
        <Text>Iniciar Sesion</Text>
      </TouchableOpacity>

      <TouchableOpacity className="w-[90%] bg-transparent mt-5 flex justify-center items-center  rounded-md py-3">
        <Text>Olvidaste Tu Contraseña</Text>
      </TouchableOpacity>

      <View className="my-5 w-full px-[10%] h-fit flex gap-3 flex-row justify-center items-center">
        <View className="bg-black w-1/2 h-1 rounded-full" />

        <Text>O</Text>
        <View className="bg-black w-1/2 h-1 rounded-full" />
      </View>

      <TouchableOpacity
        onPress={() => router.push("/registro")}
        className="w-[90%] mt-[10%] flex justify-center items-center bg-white rounded-md py-3"
      >
        <Text>Crear Nueva Cuenta</Text>
      </TouchableOpacity>
    </ContainerFondo>
  );
};

export default index;
