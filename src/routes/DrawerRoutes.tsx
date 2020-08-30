/* eslint-disable react/display-name */
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'
import Feather from 'react-native-vector-icons/Feather'

import SideBar from '../components/SideBar'

import Dashboard from '../pages/Dashboard'
import Favorites from '../pages/Favorites'

const Drawer = createDrawerNavigator()
const Stack = createStackNavigator()

// const StackRoutes: React.FC = ({ navigation }) => {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         title: '',
//         headerTransparent: true,
//         headerLeft: () => (
//           <TouchableOpacity onPress={() => navigation.openDrawer()}>
//             <Feather
//               name="menu"
//               size={18}
//               color="black"
//               style={{ paddingHorizontal: 10 }}
//             />
//           </TouchableOpacity>
//         )
//       }}
//     >
//       <Stack.Screen name="Dashboard" component={Dashboard} />
//       <Stack.Screen name="Favorites" component={Favorites} />
//     </Stack.Navigator>
//   )
// }

const DrawerRoutes: React.FC = () => {
  return (
    <Drawer.Navigator drawerContent={props => <SideBar {...props} />}>
      <Drawer.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Feather name="home" style={{ fontSize: size, color: color }} />
          )
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={Favorites}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Feather name="heart" style={{ fontSize: size, color: color }} />
          )
        }}
      />
    </Drawer.Navigator>
  )
}

// const DrawerRoutes: React.FC = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Dashboard"
//         component={Dashboard}
//         options={{ title: 'My home' }}
//       />
//     </Stack.Navigator>
//   )
// }

export default DrawerRoutes
