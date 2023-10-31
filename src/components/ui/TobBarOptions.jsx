import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useEffect } from "react";
import Icon from "./Icon";
import { router } from "expo-router";
import { useQuery, useQueryClient } from "react-query";
import { User } from "../../api/user/fb.user";
import { useState } from "react";
import { Image } from "expo-image";
import menu from "../../../assets/MENU.svg";
import menuSele from "../../../assets/MENU_SELECTED.svg";

const UserCtrl = new User();
const TobBarOptions = ({ route }) => {
  const [ToggleMenu, setToggleMenu] = useState(false);

  // const queryCl = useQueryClient()
  // const token = queryCl.getQueryData('token')

  // const {data:User} = useQuery(token,async ()=>UserCtrl.getMe(token))

  // const handleLogout = async () => {
  //   // await logout();
  //   router.replace("/")
  // }

  return (
    <View
      style={{ zIndex: 5 }}
      className="w-full relative pt-[12%] px-[3%] flex flex-row h-[100px] justify-evenly items-start  rounded-b-2xl "
    >
      <View className="w-[50%] px-4 bg-gray-300 gap-x-3 rounded-full items-center justify-start flex flex-row">
        <Icon color={"text-gray-500"} size={20} name={"Search"} />
        <TextInput className="w-fit bg-transparent" />
      </View>
      <View className="w-[45%]  flex flex-row items-end justify-end">
        <View className="w-7 h-7 flex justify-center items-center mr-2 rounded-full ">
          <Icon name={"Bell"} size={25} color={"text-LogoBlue"} />
        </View>
        <View className="w-7 h-7 p-2 flex justify-center items-center mr-2 rounded-full bg-black">
          <Icon name="User" size={20} color={"text-white"} />
        </View>
        <TouchableOpacity
          onPress={() => setToggleMenu(!ToggleMenu)}
          className="w-7 h-7 flex justify-center items-center "
        >
          <Image source={menu} className="w-5 h-7" />
        </TouchableOpacity>
      </View>

      <View
        className={`w-1/2 ${
          ToggleMenu ? "flex" : "hidden"
        } absolute top-10 right-0 shadow-2xl shadow-black rounded-l-3xl bg-white h-[40vh]`}
      >
        <View className="w-full flex h-fit justify-end pr-[5%] pt-2 items-end">
          <TouchableOpacity
            onPress={() => setToggleMenu(!ToggleMenu)}
            className="w-7 h-7 flex justify-center items-center "
          >
            <Image source={menuSele} className="w-5 h-7" />
          </TouchableOpacity>
        </View>
        <View className="w-[80%]  gap-y-3 mx-auto mt-2 h-full">
          <TouchableOpacity
            onPress={() => router.replace("/main")}
            className={`py-2 ${
              route == "home" && "bg-orange-400"
            } flex justify-center items-center rounded-full`}
          >
            <Text
              className={`${
                route == "home" ? "text-white" : "text-black"
              } font-bold`}
            >
              Inicio
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.replace("/main/informes")}
            className={`py-2 ${
              route == "informes" && "bg-orange-400"
            } flex justify-center items-center rounded-full`}
          >
            <Text
              className={`${
                route == "informes" ? "text-white" : "text-black"
              } font-bold`}
            >
              Ingreso y Gastos
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.replace("/main/documentos")}
            className={`py-2 ${
              route == "documentos" && "bg-orange-400"
            } flex justify-center items-center rounded-full`}
          >
            <Text
              className={`${
                route == "documentos" ? "text-white" : "text-black"
              } font-bold`}
            >
              Documentos
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.replace("/perfil")}
            className={`py-2 ${
              route == "configuracion" && "bg-orange-400"
            } flex justify-center items-center rounded-full`}
          >
            <Text
              className={`${
                route == "configuracion" ? "text-white" : "text-black"
              } font-bold`}
            >
              Perfil
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.replace("/")}
            className={`py-2 ${
              route == "configuracion" && "bg-orange-400"
            } flex justify-center items-center rounded-full`}
          >
            <Text
              className={`${
                route == "configuracion" ? "text-white" : "text-black"
              } font-bold`}
            >
              Cerrar Sesion
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TobBarOptions;
