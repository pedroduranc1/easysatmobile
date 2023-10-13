import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { User } from "../../api/user/fb.user";
import { useMutation } from "react-query";
import { UserIcon } from "lucide-react-native";

const UserCtrl = new User();
const AutorInfo = ({ id }) => {
  const mutation = useMutation((id) => UserCtrl.getMe(id));


  useEffect(() => {
    mutation.mutate(id)
  }, [])
  
  
  return (
    <View className="w-[90%] mx-auto flex flex-row my-[5%]">
      <View className="bg-black rounded-full mr-2 flex justify-center items-center w-10 h-10">
        <UserIcon className="text-white" size={25} />
      </View>
      <Text className="text-xl text-white">{mutation?.data?.Username}</Text>
    </View>
  );
};

export default AutorInfo;
