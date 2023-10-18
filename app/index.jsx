import React, { useEffect } from "react";
import ContainerFondo from "../src/components/ui/ContainerFondo";
import logo from "../assets/logocolor.webp";
import { Image } from "expo-image";
import { Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import { useMutation, useQueryClient } from "react-query";
import { User } from "../src/api/user/fb.user";
import { LinearGradient } from "expo-linear-gradient";

const UserCtrl = new User();
const index = () => {
  const queryCl = useQueryClient();
  const token = queryCl.getQueryData("token");

  const mutation = useMutation(({ token }) => UserCtrl.getMe(token));

  useEffect(() => {
    if (token) {
      mutation.mutate(token);
    }
  }, []);

  return (
    <ContainerFondo isMain={true}>
      <Image
        source={logo}
        contentFit="contain"
        className="w-[70%] h-[30%] mt-[15%]"
      />

      <Text className="w-[70%] text-center text-4xl font-bold text-white">
        Bienvenido
      </Text>

      <View className="w-full h-[15vh]" />


      <TouchableOpacity
        onPress={() => {
          router.push("/login");
        }}
        className="w-[70%]  mt-[10%]  flex justify-center items-center  rounded-md py-4"
      >
        <LinearGradient
          colors={["#0575ae", "#30627b"]}
          start={[0, 0]}
          end={[1, 0]}
          className="w-full rounded-md flex items-center"
        >
          <View style={{ padding: 16 }}>
            <Text style={{ color: "white", fontWeight: "bold" }}>
              Iniciar Sesion
            </Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>



      <TouchableOpacity
        onPress={() => router.push("/mailSent")}
        className="w-[70%] mt-[10%] flex justify-center items-center bg-white rounded-md py-4"
      >
        <Text>Registrate</Text>
      </TouchableOpacity>
    </ContainerFondo>
  );
};

export default index;
