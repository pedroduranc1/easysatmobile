import React, { useState } from "react";
import ContainerFondo from "../../src/components/ui/ContainerFondo";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import { Formik } from "formik";
import {
  LoginSchema,
  initialValues,
} from "../../src/formikYup/login/login.form";
import { Auth } from "../../src/api/auth/fb.auth";
import { useMutation, useQueryClient } from "react-query";
import { Fingerprint, User } from "lucide-react-native";
import { LinearGradient } from "expo-linear-gradient";
import Loader from "../../src/components/ui/Loader";
import * as LocalAuthentication from "expo-local-authentication";

const AuthCtrl = new Auth();

async function biometricAuth() {
  // 1. Checkear disponibilidad
  const isAvailable = await LocalAuthentication.hasHardwareAsync();
  if (!isAvailable) return false;

  // 2. Obtener tipos soportados
  const { supportedAuthenticationTypes } =
    await LocalAuthentication.supportedAuthenticationTypesAsync();

  // 3. Mostrar mensaje de autenticación
  const msg = "Inicio de sesión biométrico";

  // 4. Llamar authenticate, manejar promesa
  try {
    const { success } = await LocalAuthentication.authenticateAsync({
      promptMessage: msg,
      authenticationTypes: supportedAuthenticationTypes,
    });
    if (success) return true; // Autenticado!
    return false;
  } catch (error) {
    console.log("Auth error", error);
    return false;
  }
}

const index = () => {
  const queryClient = useQueryClient();
  const token = queryClient.getQueryData("token");
  const [ErrorLogin, setErrorLogin] = useState(null);

  const mutation = useMutation(({ email, password }) =>
    AuthCtrl.login(email.toLowerCase(), password.toLowerCase())
  );

  const handleFormSubmit = async (values) => {
    mutation.mutate(values, {
      onSuccess: async (response) => {
        const { uid } = response;
        queryClient.setQueryData("token", uid);
        queryClient.setQueryData("User", response);
        return router.replace("/main");
      },
      onError: (error) => {
        switch (error.message) {
          case "Firebase: Error (auth/wrong-password).":
            setErrorLogin("Contraseña invalida.");
            break;
          case "Firebase: Error (auth/user-not-found).":
            setErrorLogin("No estas registrado.");
            break;
          default:
            setErrorLogin("Contactate con soporte.");
            break;
        }
      },
    });
  };

  const handleLoginBiometric = async () => {
    const authenticated = await biometricAuth();
    if (!authenticated) {
      console.log("No autenticado");
      return;
    }
    return router.replace("/main")
  };

  return (
    <ContainerFondo>
      <Text className="text-white text-center text-2xl font-bold mt-[30%]">
        Ingresar
      </Text>

      <View className="w-[20%] h-[10vh] mt-5 flex justify-center items-center rounded-md bg-white">
        <User className="text-gray-300" size={60} />
      </View>
      <Formik
        initialValues={initialValues}
        validationSchema={LoginSchema}
        onSubmit={handleFormSubmit}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          values,
          errors,
        }) => (
          <>
            <TextInput
              className={` ${
                errors.email
                  ? "bg-red-500 placeholder:text-white text-white"
                  : "bg-white"
              }  w-[80%] py-3 rounded-md mt-14 px-[2%]`}
              placeholder="correo@gmail.com"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
            />
            <TextInput
              className={` ${
                errors.password
                  ? "bg-red-500 placeholder:text-white text-white"
                  : "bg-white"
              } py-3 rounded-md w-[80%] mt-10 px-[2%]`}
              placeholder="**********"
              secureTextEntry
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
            />

            {!mutation.isLoading ? (
              <TouchableOpacity
                onPress={router.replace("/main")}
                className="w-[60%]  mt-[15%]  flex justify-center items-center  rounded-md py-4"
              >
                <LinearGradient
                  colors={["#0575ae", "#30627b"]}
                  start={[0, 0]}
                  end={[1, 0]}
                  className="w-full rounded-md flex items-center"
                >
                  <View style={{ padding: 16 }}>
                    <Text style={{ color: "white", fontWeight: "bold" }}>
                      Iniciar Sesion
                    </Text>
                  </View>
                </LinearGradient>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity className="w-[60%]  mt-[15%]  flex justify-center items-center  rounded-md py-4">
                <LinearGradient
                  colors={["#0575ae", "#30627b"]}
                  start={[0, 0]}
                  end={[1, 0]}
                  className="w-full rounded-md flex items-center"
                >
                  <View style={{ padding: 16 }}>
                    <Loader />
                  </View>
                </LinearGradient>
              </TouchableOpacity>
            )}

            <TouchableOpacity onPress={() => router.push("/resetPassword")}>
              <Text className="text-gray-500 text-[12px]">
                Olvidaste tu Contraseña?
              </Text>
            </TouchableOpacity>

            {token && (
              <TouchableOpacity
                onPress={handleLoginBiometric}
                className="w-[60%] py-4 rounded-md mt-[10%] bg-white shadow-2xl"
              >
                <View className="flex flex-row items-center gap-x-3 justify-center">
                  <Fingerprint className="text-LogoBlue" size={30} />
                  <Text className="text-[14px]">Huella</Text>
                </View>
              </TouchableOpacity>
            )}
          </>
        )}
      </Formik>
    </ContainerFondo>
  );
};

export default index;
