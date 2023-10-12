import { View, Text } from 'react-native'
import React from 'react'
import { useQuery } from 'react-query'
import { User } from "../../api/user/fb.user";
import { UserCircleIcon } from 'lucide-react-native';

const UserCtrl = new User()
const AutorCard = ({id}) => {
   const {data:infoUser} = useQuery(`id`,()=>UserCtrl.getMe(id))
  return (
    <View className="flex flex-row w-full">
      {
        infoUser?.Img_url ? (<></>) : (<View className="w-7 h-7 rounded-full mr-1  bg-black flex justify-center items-center"><UserCircleIcon className='text-white' size={30}/></View>)
      }
      <Text>{infoUser?.Username}</Text>
    </View>
  )
}

export default AutorCard