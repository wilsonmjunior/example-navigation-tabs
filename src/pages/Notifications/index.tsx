import React from 'react'
import { Text } from 'react-native'

import { Container } from './styles'
import Card from '../../components/Card'

const Notifications: React.FC = () => {
  return (
    <Container>
      <Card />
      <Card />
      <Card />
    </Container>
  )
}

export default Notifications
