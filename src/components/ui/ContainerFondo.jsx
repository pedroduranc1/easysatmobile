import { ImageBackground, TouchableOpacity, View } from "react-native";
import fondo from "../../../assets/fondo.webp";
import { MenuIcon } from "lucide-react-native";

const ContainerFondo = ({ children }) => {
  return (
    <ImageBackground
      source={fondo}
      resizeMode="cover"
      className="flex relative flex-1 w-full h-full justify-center items-center"
    >
      <TouchableOpacity className="absolute top-[5%] left-[2%] ">
        <MenuIcon className="text-white" size={40} />
      </TouchableOpacity>
      {children}
    </ImageBackground>
  );
};

export default ContainerFondo;
