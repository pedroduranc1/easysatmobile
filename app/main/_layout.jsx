import { Tabs } from "expo-router";
import TabButtons from "../../src/components/ui/TabButtons";
import { Platform, View } from "react-native";

export default () => {
  return (
    <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            padding:Platform.OS == "ios"? 25 : 0,
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
          name="home"
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabButtons icon={"Home"} text={"Inicio"} focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="perfil"
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabButtons
                icon={"UserCircle"}
                text={"Perfil"}
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
  );
};
