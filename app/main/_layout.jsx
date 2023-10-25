import { Tabs, router } from "expo-router";
import TabButtons from "../../src/components/ui/TabButtons";
import { Platform, TouchableOpacity } from "react-native";
import logo from "../../assets/logonuevo.webp";
import { Image } from "expo-image";

export default () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          padding: Platform.OS == "ios" ? 25 : 0,
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "#ffffff",
          borderRadius: 15,
          height: 70,
          shadowColor: "#000000",
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
        name="declaraciones"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabButtons focused={focused} icon={"HelpCircle"} />
          ),
          tabBarIconStyle: {
            display: "none",
          },
        }}
      />

      <Tabs.Screen
        name="informes"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabButtons focused={focused} icon={"Ingresos"} />
          ),
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image source={logo} className="w-14 -translate-y-8 h-16" />
          ),
        }}
      />

      <Tabs.Screen
        name="documentos"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabButtons focused={focused} icon={"Documentos"} />
          ),
        }}
      />

      <Tabs.Screen
        name="docs"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabButtons focused={focused} icon={"HelpCircle"} />
          ),
          tabBarIconStyle: {
            display: "none",
          },
        }}
      />
    </Tabs>
  );
};
