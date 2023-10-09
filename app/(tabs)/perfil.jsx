import { View, Text } from 'react-native'
import React from 'react'
import ContainerFondo from "../../src/components/ui/ContainerFondo";

const perfil = () => {

  return (
    <View className="flex-1 flex justify-center items-center">
      <ContainerFondo>
        <Text className="font-bold text-4xl">Perfil</Text>
      </ContainerFondo>
    </View>
  )
}

export default perfil