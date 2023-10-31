import { Slot } from "expo-router";
import { AuthProvider } from "../../src/context/AuthContext";

export default ({ children }) => {
  return (
    <AuthProvider>
      <Slot />
    </AuthProvider>
  );
};
