import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import TobBarOptions from "../../src/components/ui/TobBarOptions";
import ContainerFondo from "../../src/components/ui/ContainerFondo";
import { User } from "lucide-react-native";
import { useQuery, useQueryClient } from "react-query";
import { User as UserApi } from "../../src/api/user/fb.user";
import { Image } from "expo-image";

const UserCtrl = new UserApi();
const index = () => {
  const queryCl = useQueryClient();
  const token = queryCl.getQueryData("token");

  const { data: UserData } = useQuery(token, async () => UserCtrl.getMe(token));

  return (
    <>
      <TobBarOptions route={"Perfil"} />
      <ContainerFondo>
        <View className="w-[20%] h-[10vh] mt-10 overflow-hidden flex justify-center items-center rounded-md bg-white">
          {UserData?.Img_url && UserData?.Img_url !== "" ? (
            <Image source={UserData?.Img_url} className="w-full h-full" />
          ) : (
            <User className="text-gray-300" size={60} />
          )}
        </View>

        <View className="mx-auto w-[90%] mt-10 rounded-md bg-white p-5">
          <Text className="text-[12px] text-LogoBlue">Datos Personales</Text>

          <View className="w-full mt-5 flex gap-x-5 flex-row">
            <Text>Nombre: {UserData?.Nombre}</Text>
            <Text>Apellido: {UserData?.Apellido}</Text>
          </View>

          <View className="w-full mt-2">
            <Text>Correo: {UserData?.email}</Text>
          </View>

          <View className="w-full mt-2">
            <Text>Usuario: {UserData?.Username}</Text>
          </View>
        </View>

        <View className="mx-auto w-[90%] mt-5 rounded-md bg-white p-5">
          <Text className="text-[12px] text-LogoBlue">Datos Fiscales</Text>

          <View className="w-full mt-5 flex gap-x-5 flex-row">
            <Text>Plan: {UserData?.UserPlan}</Text>
            {UserData?.rfc ? (
              <Text>RFC: GOBSDIUSJD</Text>
            ) : (
              <Text>RFC: NO DISPONIBLE</Text>
            )}
          </View>
        </View>

        <View className="mx-auto w-[90%] mt-5 rounded-md bg-white p-5">
          <Text className="text-[12px] text-LogoBlue">Opciones</Text>

          <View className="w-full mt-5  gap-x-5 flex-row">
            <TouchableOpacity className="w-full flex justify-center items-center rounded-full py-2 bg-LogoBlue">
              <Text className="text-white font-bold">Modificar Datos</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ContainerFondo>
    </>
  );
};

export default index;
