import React from "react";
import ContainerFondo from "../../src/components/ui/ContainerFondo";
import logo from "../../assets/logo.webp";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Image } from "expo-image";

const index = () => {
  return (
    <ContainerFondo>
      <ScrollView style={{display:"flex",flex:1}} contentContainerStyle={{display:"flex",flex:1,justifyContent:"center",alignItems:'center'}}>
        <Image
          source={logo}
          contentFit="contain"
          className="w-[70%] h-[30%]"
        />

        {/* Nombres Apellidos */}
        <View className="flex flex-row w-[90%] gap-1">
          <View className="w-1/2">
            <Text className="mt-[7%] text-start w-full text-white font-bold">
              Nombre
            </Text>
            <TextInput
              className="bg-white py-3 rounded-md w-full px-[2%] mt-2"
              placeholder="Easy"
              // onChangeText={onChangeText}
              // value={text}
            />
          </View>
          <View className="w-1/2">
            <Text className="mt-[7%] text-start w-full text-white font-bold">
              Apellido
            </Text>
            <TextInput
              className="bg-white py-3 rounded-md w-full px-[2%] mt-2"
              placeholder="Sat"
              // onChangeText={onChangeText}
              // value={text}
            />
          </View>
        </View>
        {/* Username */}
        <Text className="mt-[7%] text-start w-[90%] text-white font-bold">
          Username
        </Text>
        <TextInput
          className="bg-white py-3 rounded-md w-[90%] px-[2%] mt-2"
          placeholder="EasySat10"
          // onChangeText={onChangeText}
          // value={text}
        />
        <Text className="mt-[7%] text-start w-[90%] text-white font-bold">
          Correo
        </Text>
        <TextInput
          className="bg-white py-3 rounded-md w-[90%] px-[2%] mt-2"
          placeholder="easysat@gmail.com"
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

        <TouchableOpacity className="bg-white w-[90%] rounded-md py-3 flex justify-center items-center mt-10 ">
          <Text>Registrate</Text>
        </TouchableOpacity>
      </ScrollView>
    </ContainerFondo>
  );
};

export default index;
