/* eslint-disable react/display-name */
import React from 'react'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

import Feather from 'react-native-vector-icons/Feather'

// import Dashboard from '../pages/Dashboard'
import Following from '../pages/Following'
import Favorites from '../pages/Favorites'
import Notifications from '../pages/Notifications'

import Drawer from './DrawerRoutes'

const { Navigator, Screen } = createMaterialBottomTabNavigator()

const TabsRoutes: React.FC = () => {
  return (
    <Navigator
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: '#694fad' }}
    >
      <Screen
        name="Dashboard"
        component={Drawer}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({ color }) => (
            <Feather name="home" color={color} size={20} />
          )
        }}
      />
      <Screen
        name="Following"
        component={Following}
        options={{
          tabBarBadge: '10',
          tabBarColor: '#ff9900',
          tabBarIcon: ({ color }) => (
            <Feather name="users" color={color} size={20} />
          )
        }}
      />
      <Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="heart" color={color} size={20} />
          )
        }}
      />
      <Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarBadge: '1',
          tabBarIcon: ({ color }) => (
            <Feather name="bell" color={color} size={20} />
          )
        }}
      />
    </Navigator>
  )
}

export default TabsRoutes
