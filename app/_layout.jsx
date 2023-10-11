import React from 'react'
import { Stack } from 'expo-router'

const StackLayout = () => {
  return (
    <Stack screenOptions={{headerShown:false}}>
        <Stack.Screen name='login'/>
        <Stack.Screen name='main'/>
        <Stack.Screen name='registro'/>

    </Stack>
  )
}

export default StackLayout