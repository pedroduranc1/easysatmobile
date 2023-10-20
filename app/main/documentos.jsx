import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import TobBarOptions from "../../src/components/ui/TobBarOptions";
import Icon from "../../src/components/ui/Icon";
import InformeCard from "../../src/components/ui/InformeCard";

const dataInformes = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
];

const documentos = () => {
  return (
    <>
      <TobBarOptions route={"documentos"} />
      <View style={{zIndex:1}} className="flex flex-1">
        <View className="w-[90%] mx-auto h-[80vh] ">
          <Text className="text-black font-bold text-base">
            Documentos de: pedroduranc1
          </Text>

          <View className="w-full mt-5 h-[40vh]">
            <FlatList
              data={dataInformes}
              renderItem={() => (
                <InformeCard/>
              )}
              keyExtractor={(item) => item.id.toString()}
              numColumns={4}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default documentos;
