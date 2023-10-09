import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import { Camera } from "lucide-react-native";

export default () => {
  return (
    <>
      <StatusBar />
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            position: "absolute",
            bottom: 25,
            left: 20,
            right: 20,
            elevation: 0,
            backgroundColor: "#ffffff",
            borderRadius: 15,
            height: 80,
            shadowColor: "#7F5DF0",
            shadowOffset: {
              width: 0,
              height: 10,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.5,
            elevation: 5,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            tabBarIcon: ({ focused }) => (
              <View className="flex justify-center items-center gap-1">
                <Camera
                  className={`${focused ? "text-black" : "text-gray-500"}`}
                  size={25}
                />
                <Text className={`${focused ? "font-bold" : ""} text-[10px]`}>
                  Home
                </Text>
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="blogs"
          options={{
            tabBarIcon: ({ focused }) => (
              <View className="flex justify-center items-center gap-1">
                <Camera
                  className={`${focused ? "text-black" : "text-gray-500"}`}
                  size={25}
                />
                <Text className={`${focused ? "font-bold" : ""} text-[10px]`}>
                  Blogs
                </Text>
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="cursos"
          options={{
            tabBarIcon: ({ focused }) => (
              <View className="flex justify-center items-center gap-1">
                <Camera
                  className={`${focused ? "text-black" : "text-gray-500"}`}
                  size={25}
                />
                <Text className={`${focused ? "font-bold" : ""} text-[10px]`}>
                  Cursos
                </Text>
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="contabilidad"
          options={{
            tabBarIcon: ({ focused }) => (
              <View className="flex justify-center items-center gap-1">
                <Camera
                  className={`${focused ? "text-black" : "text-gray-500"}`}
                  size={25}
                />
                <Text
                  className={`${
                    focused ? "font-bold text-[8px]" : ""
                  } text-[9px]`}
                >
                  Contabilidad
                </Text>
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="perfil"
          options={{
            tabBarIcon: ({ focused }) => (
              <View className="flex justify-center items-center gap-1">
                <Camera
                  className={`${focused ? "text-black" : "text-gray-500"}`}
                  size={25}
                />
                <Text className={`${focused ? "font-bold" : ""} text-[10px]`}>
                  Perfil
                </Text>
              </View>
            ),
          }}
        />
      </Tabs>
    </>
  );
};
