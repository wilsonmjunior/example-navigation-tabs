import React from 'react'
import TabsRoutes from './routes/TabRoutes'
import { NavigationContainer } from '@react-navigation/native'

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <TabsRoutes />
    </NavigationContainer>
  )
}

export default App
