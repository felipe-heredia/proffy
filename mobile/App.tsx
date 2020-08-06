import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { AppLoading } from 'expo'
import { Archivo_400Regular, Archivo_700Bold, useFonts } from '@expo-google-fonts/archivo'
import { Poppins_600SemiBold, Poppins_400Regular } from '@expo-google-fonts/poppins'

import Landing from './src/pages/Landing'

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_600SemiBold,
    Poppins_400Regular,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <Landing />
      <StatusBar style="light" />
    </>
  )
}

export default App
