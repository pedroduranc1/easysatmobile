import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import ContainerFondo from "../../src/components/ui/ContainerFondo";
import { Image } from "expo-image";
import logo from "../../assets/logocolor.webp";
import { Formik } from "formik";
import { initialValues,ResetSchema} from "../../src/formikYup/resetPassword";
import { Auth } from "../../src/api/auth/fb.auth";
import { useMutation } from "react-query";
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import Loader from "../../src/components/ui/Loader";

const AuthCtrl = new Auth()
const index = () => {

  const mutation = useMutation(({email})=> AuthCtrl.resetPassword(email))

  const handleFormSubmit = async (values) => {
    mutation.mutate(values, {
      onSuccess: async (response) => {
        
        return router.replace("/mailSent");
      },
      onError: (error) => {
        console.log(error.error)
        // switch (error.message) {
        //   case "Firebase: Error (auth/wrong-password).":
        //     setErrorLogin("Contraseña invalida.");
        //     break;
        //   case "Firebase: Error (auth/user-not-found).":
        //     setErrorLogin("No estas registrado.");
        //     break;
        //   default:
        //     setErrorLogin("Contactate con soporte.");
        //     break;
        // }
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
        validationSchema={ResetSchema}
        validateOnChange={false}
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
            <View className="w-[90%]">
              <Text className="text-center text-white">
                Ingresa tu correo electronico para cambiar tu Contraseña
              </Text>
              <TextInput
                className={` ${
                  errors.email
                    ? "bg-red-500 placeholder:text-white text-white"
                    : "bg-white"
                } py-3 rounded-md w-full mt-10 px-[2%]`}
                placeholder="correo@gmail.com"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />

              {!mutation.isLoading ? (
                <TouchableOpacity
                  onPress={handleSubmit}
                  className="w-[60%] mx-auto mt-[15%]  flex justify-center items-center  rounded-md py-4"
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
                <TouchableOpacity className="w-[60%] mx-auto  mt-[15%]  flex justify-center items-center  rounded-md py-4">
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
            </View>
          </>
        )}
      </Formik>
    </ContainerFondo>
  );
};

export default index;
