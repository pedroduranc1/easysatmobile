import { View, Text } from "react-native";
import React from "react";
import TobBarOptions from "../../src/components/ui/TobBarOptions";

const informes = () => {
  return (
    <>
      <TobBarOptions route={"informes"} />
      <View className="flex flex-1 mx-auto w-[90%]">
        <View className="mt-5 bg-gray-200 rounded-md h-[30vh]"></View>

        <View className="flex w-full mt-5 flex-row justify-evenly items-center">
          <View className="bg-gray-200 px-6 py-4 rounded-md">
            <Text className="text-[10px] font-bold">Ingresos</Text>
            <Text className="text-LogoBlue text-[15px]">$24,425.50</Text>
            <Text className="text-gray-500 text-[9px]">Octubre 2023</Text>
          </View>
          <View className="bg-gray-200 px-6 py-4 rounded-md">
            <Text className="text-[10px] font-bold">Gastos</Text>
            <Text className="text-LogoGreen text-[15px]">$41,817.50</Text>
            <Text className="text-gray-500 text-[9px]">Octubre 2023</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default informes;
