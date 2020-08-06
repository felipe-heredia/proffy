import React from 'react'
import { StatusBar } from 'expo-status-bar'

import Landing from './src/pages/Landing'

const App: React.FC = () => (
  <>
    <Landing />
    <StatusBar style="auto" />
  </>
)

export default App
