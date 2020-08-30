import React from 'react'
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer'
import Feather from 'react-native-vector-icons/Feather'
import { Alert } from 'react-native'

const SideBar: React.FC = (props: any) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="Voltar"
        icon={() => <Feather name="menu" size={20} />}
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  )
}

export default SideBar
