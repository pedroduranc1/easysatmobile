import { Animated } from "react-native";
import { Loader2 } from "lucide-react-native";
import React from "react";

const Loader = () => {

    const rotateAnim = new Animated.Value(0);

  // Animación de rotación
  Animated.loop(
    Animated.timing(rotateAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    })
  ).start();

  return (
    <Animated.View
      style={{
        transform: [
          {
            rotate: rotateAnim.interpolate({
              inputRange: [0, 1],
              outputRange: ["0deg", "360deg"],
            }),
          },
        ],
      }}
    >
      <Loader2 className="text-black" size={25} />
    </Animated.View>
  );
};

export default Loader;
