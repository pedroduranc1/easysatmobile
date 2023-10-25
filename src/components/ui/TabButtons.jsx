import { View, Text } from "react-native";
import React from "react";
import Icon from "../ui/Icon";
import { Image } from "expo-image";
import grafica from "../../../assets/GRAFICA.svg";
import graficaSele from "../../../assets/GRAFICA_SELE.svg";
import documento from "../../../assets/DOCUMENTO.svg";
import documentoSele from "../../../assets/DOCUMENTO_SELE.svg";
import { useState } from "react";
import { useEffect } from "react";

const TabButtons = ({ icon, text, focused }) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (icon === "Ingresos") {
      setImage(focused ? graficaSele : grafica);
    } else if (icon === "Documentos") {
      setImage(focused ? documentoSele : documento);
    } else {
      setImage("Otro")
    }
  }, [focused]);

  return (
    <View className="flex p-7 justify-center  items-center gap-1">
      {image !== 'Otro' ? (
        <Image source={image} className="w-[35px] h-full" />
      ) : (
        <Icon focused={focused} name={icon} size={35} color={"text-black"} />
      )}

      <Text className={`${focused ? "font-bold" : ""} text-[9px]`}>{text}</Text>
    </View>
  );
};

export default TabButtons;
