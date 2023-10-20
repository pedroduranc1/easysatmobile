import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "./Icon";
import { useState } from "react";

const InformeCard = () => {

    const [Active, setActive] = useState(false)

  return (
    <TouchableOpacity 
    className={`flex w-1/4 py-4 ${Active && 'bg-LogoBlue'} rounded-md justify-center items-center`}>
      <Icon name={"FileText"} size={50} color={Active ? "text-white" : "text-LogoBlue"} />
      <Text className="text-[10px] mt-2 font-bold">Archivo Pedro 01</Text>
    </TouchableOpacity>
  );
};

export default InformeCard;
