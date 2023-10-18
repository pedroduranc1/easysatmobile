import React, { useState } from "react";
import ContainerFondo from "../../src/components/ui/ContainerFondo";
import logo from "../../assets/logo.webp";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Image } from "expo-image";
import { Formik } from "formik";
import {
  initialValues,
  validationSchema,
} from "../../src/formikYup/registro/registro.form";
import { User } from "../../src/api/user/fb.user";
import { useMutation } from "react-query";
import { router } from "expo-router";
import { User2 } from "lucide-react-native";
import { LinearGradient } from "expo-linear-gradient";

const UserCtrl = new User();
const index = () => {
  const [ErrorReg, setErrorReg] = useState(null);

  const mutation = useMutation((userInfo) => UserCtrl.createUser(userInfo));

  const handleFormSubmit = async (userInfo) => {
    mutation.mutate(userInfo, {
      onSuccess: async (response) => {
        console.log(response);
        if (response?.type == true) {
          router.replace("/login");
        } else {
          if (
            response?.error == "Firebase: Error (auth/email-already-in-use)."
          ) {
            setErrorReg("El correo esta en uso");
          }
        }
      },
    });
  };
  return (
    <ContainerFondo>
      <Text className="text-white text-center text-2xl font-bold mt-[30%]">
        Ingresar
      </Text>

      <View className="w-[20%] h-[10vh] mt-5 flex justify-center items-center rounded-md bg-white">
        <User2 className="text-gray-300" size={60} />
      </View>

      {/* FORMULARIO */}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
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
            <View className="flex flex-row w-[90%] gap-1">
              <View className="w-1/2">
                <Text className="mt-[7%] text-start w-full text-white font-bold">
                  Nombre
                </Text>
                <TextInput
                  placeholder="Easy"
                  onChangeText={handleChange("Nombre")}
                  onBlur={handleBlur("Nombre")}
                  value={values.Nombre}
                  className={`${
                    errors.Nombre
                      ? "bg-red-500 placeholder:text-white text-white"
                      : "bg-white"
                  } py-3 rounded-md w-[90%] px-[2%] mt-2`}
                />
              </View>
              <View className="w-1/2">
                <Text className="mt-[7%] text-start w-full text-white font-bold">
                  Apellido
                </Text>
                <TextInput
                  placeholder="Sat"
                  onChangeText={handleChange("Apellido")}
                  onBlur={handleBlur("Apellido")}
                  value={values.Apellido}
                  className={`${
                    errors.Apellido
                      ? "bg-red-500 placeholder:text-white text-white"
                      : "bg-white"
                  } py-3 rounded-md w-[90%] px-[2%] mt-2`}
                />
              </View>
            </View>
            {/* Username */}
            <Text className="mt-[7%] text-start w-[90%] text-white font-bold">
              Username
            </Text>
            <TextInput
              placeholder="EasySat10"
              onChangeText={handleChange("Username")}
              onBlur={handleBlur("Username")}
              value={values.Username}
              className={`${
                errors.Username
                  ? "bg-red-500 placeholder:text-white text-white"
                  : "bg-white"
              } py-3 rounded-md w-[90%] px-[2%] mt-2`}
            />
            <Text className="mt-[7%] text-start w-[90%] text-white font-bold">
              Correo
            </Text>
            <TextInput
              placeholder="easysat@gmail.com"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              className={`${
                errors.email
                  ? "bg-red-500 placeholder:text-white text-white"
                  : "bg-white"
              } py-3 rounded-md w-[90%] px-[2%] mt-2`}
            />

            <Text className="mt-[5%] text-start w-[90%] text-white font-bold">
              Contraseña
            </Text>
            <TextInput
              placeholder="*******"
              secureTextEntry={true}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              className={`${
                errors.password
                  ? "bg-red-500 placeholder:text-white text-white"
                  : "bg-white"
              } py-3 rounded-md w-[90%] px-[2%] mt-2`}
            />

            {ErrorReg && (
              <Text className="text-red-500 font-bold mt-3">{ErrorReg}</Text>
            )}

            {!mutation.isLoading ? (
              <TouchableOpacity
                onPress={handleSubmit}
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
                      Registrate
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
          </>
        )}
      </Formik>
    </ContainerFondo>
  );
};

export default index;
