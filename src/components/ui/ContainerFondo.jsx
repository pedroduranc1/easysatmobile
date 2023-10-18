import { ImageBackground } from "react-native";
import fondo from "../../../assets/fondoprincipal.webp";
import fondoMain from "../../../assets/fondoinicio.webp";

const ContainerFondo = ({ children,isMain }) => {
  return (
    <ImageBackground
      source={isMain ? fondo : fondoMain}
      resizeMode="cover"
      className="flex relative flex-1 w-full h-full items-center"
    >
      {children}
    </ImageBackground>
  );
};

export default ContainerFondo;
