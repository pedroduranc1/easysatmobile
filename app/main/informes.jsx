import { View, Text } from "react-native";
import React from "react";
import TobBarOptions from "../../src/components/ui/TobBarOptions";
import { BarChart, LineChart } from "react-native-chart-kit";
import { useState } from "react";

const informes = () => {
  const data = [
    {
      name: "Ene",
      ingresos: 13000,
      gastos: 9500,
    },
    {
      name: "Feb",
      ingresos: 16500,
      gastos: 11000,
    },
    {
      name: "Mar",
      ingresos: 14250,
      gastos: 12000,
    },
    {
      name: "Abr",
      ingresos: 19000,
      gastos: 8000,
    },
  ];
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const onLayout = (event) => {
    const { width, height } = event.nativeEvent.layout;
    setWidth(width);
    setHeight(height);
  };

  // Define los colores para ingresos y gastos
  const incomeColor = "#30627b";
  const expensesColor = "#90aa74";

  // Separa los datos en dos series: "Ingresos" y "Gastos"
  const ingresosData = data.map((item) => item.ingresos);
  const gastosData = data.map((item) => item.gastos);

  return (
    <>
      <TobBarOptions route={"informes"} />
      <View className="flex flex-1 mx-auto w-[90%]">
        <View className="mt-5 bg-gray-200 rounded-md h-[30vh]">
          <View className="w-full flex flex-row justify-center items-center px-[5%] pt-[3%]">
            <View className="flex flex-row justify-between items-center w-[30%]">
              <Text
                className="text-[10px] font-bold"
                style={{ color: incomeColor }}
              >
                Ingresos
              </Text>
              <Text
                className="text-[10px] font-bold"
                style={{ color: expensesColor }}
              >
                Gastos
              </Text>
            </View>
            <View className="w-[70%]"></View>
          </View>

          <View onLayout={onLayout} className="w-full h-full p-4">
            <LineChart
              style={{
                backgroundColor:"rgb(229, 231, 235)"
              }}
              data={{
                labels: data.map((item) => item.name),
                datasets: [
                  {
                    data: data.map((item) => item.ingresos),
                    color: (opacity = 1) => "rgb(5, 117, 174)"
                  },
                  {
                    data: data.map((item) => item.gastos),
                    color: (opacity = 1) => "rgb(144, 170, 116)"
                  },
                ],
              }}
              width={width * 0.9} // Ajustar según necesites
              height={height * 0.8}
              chartConfig={{
                backgroundColor: "white",
                backgroundGradientFrom: "white",
                backgroundGradientTo: "white",
                decimalPlaces: 2, // decimales
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // color de línea
              }}
            />
          </View>
        </View>

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
