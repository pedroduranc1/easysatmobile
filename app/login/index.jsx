import React, { useState } from "react";
import ContainerFondo from "../../src/components/ui/ContainerFondo";
import logo from "../../assets/logo.webp";
import { Image } from "expo-image";
import { Text, TextInput, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { Formik } from "formik";
import {
  LoginSchema,
  initialValues,
} from "../../src/formikYup/login/login.form";
import Loader from "../../src/components/ui/Loader";
import { Auth } from "../../src/api/auth/fb.auth";
import { useMutation, useQueryClient } from "react-query";

const AuthCtrl = new Auth();

const index = () => {
  const queryClient = useQueryClient();
  const [ErrorLogin, setErrorLogin] = useState(null);

  const mutation = useMutation(({ email, password }) =>
    AuthCtrl.login(email.toLowerCase(), password.toLowerCase())
  );

  const handleFormSubmit = async (values) => {
    mutation.mutate(values, {
      onSuccess: async (response) => {
        const { uid } = response;
        queryClient.setQueryData("token",uid)
        queryClient.setQueryData("User",response)
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

  return (
    <ContainerFondo>
      <Image
        source={logo}
        contentFit="contain"
        className="w-[70%] h-[30%] mt-[30%]"
      />

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
            <Text className="mt-[7%] text-start w-[90%] text-white font-bold">
              Correo
            </Text>
            <TextInput
              className={`${
                errors.email
                  ? "bg-red-500 placeholder:text-white text-white"
                  : "bg-white"
              } py-3 rounded-md w-[90%] px-[2%] mt-2`}
              placeholder="correo@gmail.com"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
            />
            <Text className="mt-[5%] text-start w-[90%] text-white font-bold">
              Contraseña
            </Text>
            <TextInput
              className={`${
                errors.password
                  ? "bg-red-500 placeholder:text-white text-white"
                  : "bg-white"
              } py-3 rounded-md w-[90%] px-[2%] mt-2`}
              placeholder="*******"
              secureTextEntry={true}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
            />

            {ErrorLogin && <Text className="text-red-500">{ErrorLogin}</Text>}

            <TouchableOpacity
              onPress={handleSubmit}
              className="bg-white w-[90%] rounded-md py-3 flex justify-center items-center mt-20"
            >
              {mutation.isLoading ? <Loader /> : <Text>Iniciar Sesion</Text>}
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </ContainerFondo>
  );
};

export default index;
