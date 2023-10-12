import { ImageBackground } from "react-native";
import fondo from "../../../assets/fondo.webp";

const ContainerFondo = ({ children }) => {
  return (
    <ImageBackground
      source={fondo}
      resizeMode="cover"
      className="flex relative flex-1 w-full h-full items-center"
    >
      {children}
    </ImageBackground>
  );
};

export default ContainerFondo;
