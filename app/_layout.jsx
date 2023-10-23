import React from "react";
import { Stack } from "expo-router";
import { AuthProvider } from "../src/context/AuthContext";
import { QueryClient, QueryClientProvider } from "react-query";
import * as SplashScreen from "expo-splash-screen";
// Create a client
const queryClient = new QueryClient();

const StackLayout = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="login" />
          <Stack.Screen name="main" />
          <Stack.Screen name="registro" />
          <Stack.Screen name="resetPassword" />
          <Stack.Screen name="mailSent" />
        </Stack>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default StackLayout;
