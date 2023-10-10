import { Redirect, Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { AuthProvider } from "../../src/context/AuthContext";
import { QueryClient, QueryClientProvider } from "react-query";
import TabButtons from "../../src/components/ui/TabButtons";

const queryClient = new QueryClient();

export default () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <StatusBar />
        <Tabs
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
              position: "absolute",
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
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
                <TabButtons text={"Home"} icon={'Home'} focused={focused}/>
              ),
            }}
          />
          <Tabs.Screen
            name="blogs"
            options={{
              tabBarIcon: ({ focused }) => (
                <TabButtons text={"Blogs"} icon={"Newspaper"} focused={focused}/>
              ),
            }}
          />
          <Tabs.Screen
            name="cursos"
            options={{
              tabBarIcon: ({ focused }) => (
                <TabButtons text={"Cursos"} icon={"MonitorPlay"} focused={focused}/>
              ),
            }}
          />
          <Tabs.Screen
            name="contabilidad"
            options={{
              tabBarIcon: ({ focused }) => (
                <TabButtons text={"Contabilidad"} icon={"Calculator"} focused={focused}/>
              ),
            }}
          />
          <Tabs.Screen
            name="perfil"
            options={{
              tabBarIcon: ({ focused }) => (
                <TabButtons text={"Perfil"} icon={"UserCircle"} focused={focused}/>
              ),
            }}
          />
        </Tabs>
      </AuthProvider>
    </QueryClientProvider>
  );
};
