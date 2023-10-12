import { Text, View } from "react-native";
import React from "react";
import ContainerFondo from "../../src/components/ui/ContainerFondo";
import TobBarOptions from "../../src/components/ui/TobBarOptions";
import { UserCircle } from "lucide-react-native";
import { useAuth } from "../../src/hooks/useAuth";

const perfil = () => {
  const { User } = useAuth();

  return (
    <ContainerFondo>
      <View className="flex flex-1 w-full h-full">
        <View className="relative">
          <TobBarOptions />

          <View className="flex items-center p-4 justify-center bg-white mx-auto h-[35%] rounded-md w-[90%] mt-10 shadow-lg">
            <UserCircle className="text-black" size={70} />
            <View className="flex mt-3 justify-center items-center">
              <View className="flex flex-row items-center ">
                <Text className="mr-1">{User?.Nombre}</Text>
                <Text>{User?.Apellido}</Text>
              </View>
              <Text>{User?.Username}</Text>
              <Text>{User?.email}</Text>
            </View>
          </View>
        </View>
      </View>
    </ContainerFondo>
  );
};

export default perfil;
