import { View, Text } from "react-native";
import React from "react";
import TobBarOptions from "../../src/components/ui/TobBarOptions";
import { BarChart } from "react-native-chart-kit";
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
            <BarChart
              data={{
                labels: data.map((item) => item.name),
                datasets: [
                  {
                    data: data.map((item) => item.ingresos),
                    color: (opacity = 1) => `rgba(48, 98, 123, ${opacity})`, // Color para ingresos
                    barPercentage: 0.4, // Ajusta el ancho de la barra de ingresos
                    categoryPercentage: 0.5,
                  },
                  {
                    data: data.map((item) => item.gastos),
                    color: (opacity = 1) => `rgba(144, 170, 116, ${opacity})`, // Color para gastos
                    barPercentage: 0.4, // Ajusta el ancho de la barra de gastos
                    categoryPercentage: 0.5,
                  },
                ],
              }}
              width={width * 0.9}
              height={height * 0.8} // Ajusta el alto según tu preferencia
              yAxisSuffix="$"
              fromZero
              chartConfig={{
                backgroundGradientFrom: "white",
                backgroundGradientTo: "white",
                decimalPlaces: 2,
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
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
