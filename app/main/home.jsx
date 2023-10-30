import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import TobBarOptions from "../../src/components/ui/TobBarOptions";
import ContainerFondo from "../../src/components/ui/ContainerFondo";
import { Image } from "expo-image";
import logo from "../../assets/logocolor.webp";
import { router } from "expo-router";

const home = () => {
  // const queryCl = useQueryClient();
  // const token = queryCl.getQueryData("token");

  // const { data: User } = useQuery(token, async () => UserCtrl.getMe(token));

  return (
    <ContainerFondo>
      <View className="flex w-full flex-1 items-center ">
        <Image source={logo} className="w-[260px] h-[150px] my-[30%]" />

        <View className="w-full flex items-center gap-y-3 flex-1 px-[5%] ">
          <TouchableOpacity
          onPress={()=> router.replace("/main/informes")}
          className="border-2 border-LogoBlue bg-white hover:bg-LogoBlue group rounded-full w-full py-2 flex justify-center items-center"
          >
            <Text className="text-LogoBlue font-bold group-hover:text-white">Ingresos y Gastos</Text>
          </TouchableOpacity>
          <TouchableOpacity
          className="border-2 border-LogoBlue bg-white  rounded-full w-full py-2 flex justify-center items-center"
          >
            <Text className="text-LogoBlue font-bold">Declaracion de Impuestos</Text>
          </TouchableOpacity>
          <TouchableOpacity
          className="border-2 border-LogoBlue bg-white  rounded-full w-full py-2 flex justify-center items-center"
          >
            <Text className="text-LogoBlue font-bold">Informes</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=> router.replace("/main/documentos")}
          className="border-2 border-LogoBlue bg-white  rounded-full w-full py-2 flex justify-center items-center"
          >
            <Text className="text-LogoBlue font-bold">Documentos</Text>
          </TouchableOpacity>
          <TouchableOpacity
          className="border-2 border-LogoBlue bg-white  rounded-full w-full py-2 flex justify-center items-center"
          >
            <Text className="text-LogoBlue font-bold">Otros</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ContainerFondo>
  );
};

export default home;
