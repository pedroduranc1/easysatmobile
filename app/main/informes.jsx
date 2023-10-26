import { View, Text } from "react-native";
import React, { useEffect } from "react";
import TobBarOptions from "../../src/components/ui/TobBarOptions";
import { BarChart, LineChart } from "react-native-chart-kit";
import { useState } from "react";
import Select from "../../src/components/ui/Select";
import {
  calcularSumasAnuales,
  calcularSumasMensuales,
  filtrarPorAño,
  filtrarPorMes,
  filtrarPorSemana,
  obtenerResumenAnual,
  obtenerResumenMensual,
} from "../../src/utils/funcs";
//DATA
import dataPrueba from "../../src/utils/dataPrueba";
//FUNCIONES
import { calcularSumasSemanas } from "../../src/utils/calcularSemana";

const informes = () => {
  const items = [
    { label: "Todo", value: "all" },
    { label: "Semanal", value: "weekly" },
    { label: "Mensual", value: "monthly" },
    { label: "Anual", value: "yearly" },
  ];

  const handleValueChange = (value) => {
    setSelectedValue(value);
  };
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

  const [selectedValue, setSelectedValue] = useState("weekly");
  const [Data, setData] = useState(null);
  const [FullData, setFullData] = useState(null);

  const filtrarPorParametro = (filter) => {
    if (filter === "weekly") {
      const sumasSemanas = calcularSumasSemanas(dataPrueba);
      return sumasSemanas;
    } else if (filter === "monthly") {
      const sumasMeses = calcularSumasMensuales(dataPrueba);
      return sumasMeses;
    } else if (filter === "yearly") {
      const sumasAnuales = calcularSumasAnuales(dataPrueba);
      return sumasAnuales;
    } else {
      return dataPrueba;
    }
  };

  useEffect(() => {
    const filteredData = filtrarPorParametro(selectedValue);
    const fulData = obtenerResumenAnual(dataPrueba);
    setFullData(fulData);
    setData(filteredData);
  }, [selectedValue]);

  return (
    <>
      <TobBarOptions route={"informes"} />
      <View className="flex flex-1 mx-auto w-[90%]">
        <View className="mt-5 bg-gray-200 rounded-md h-[50vh]">
          <View className="w-full flex flex-row justify-center items-center px-[5%] pt-[3%]">
            <View className="flex flex-row gap-x-4 justify-start items-center w-[50%]">
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
            <View className="w-[50%]">
              <Select
                items={items}
                selectedValue={selectedValue}
                onValueChange={handleValueChange}
              />
            </View>
          </View>

          <View onLayout={onLayout} className="w-full h-full p-4">
            {Data !== null && Data && (
              <LineChart
                style={{
                  backgroundColor: "rgb(229, 231, 235)",
                }}
                data={{
                  datasets: [
                    {
                      data: Data.map((item) => item.ventas),
                      color: (opacity = 1) => "rgb(5, 117, 174)",
                    },
                    {
                      data: Data.map((item) => item.gastos),
                      color: (opacity = 1) => "rgb(144, 170, 116)",
                    },
                  ],
                }}
                width={width * 0.9} // Ajustar según necesites
                height={height * 0.7}
                chartConfig={{
                  backgroundColor: "white",
                  backgroundGradientFrom: "white",
                  backgroundGradientTo: "white",
                  decimalPlaces: 2, // decimales
                  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // color de línea
                }}
              />
            )}
          </View>
        </View>

        <View className="flex w-full mt-5 flex-row justify-evenly items-center">
          {Data !== null && Data.length > 0 && (
            <View className="bg-gray-200 px-6 py-4 rounded-md">
              <Text className="text-[10px] font-bold">Ingresos</Text>
              <Text className="text-LogoBlue text-[15px]">${FullData.ventas}</Text>
              <Text className="text-gray-500 text-[9px]">{FullData.mes} {FullData.year}</Text>
            </View>
          )}

          {Data !== null && Data.length > 0 && (
            <View className="bg-gray-200 px-6 py-4 rounded-md">
              <Text className="text-[10px] font-bold">Gastos</Text>
              <Text className="text-LogoGreen text-[15px]">${FullData.gastos}</Text>
              <Text className="text-gray-500 text-[9px]">{FullData.mes} {FullData.year}</Text>
            </View>
          )}
        </View>
      </View>
    </>
  );
};

export default informes;
