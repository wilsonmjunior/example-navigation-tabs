import React from 'react'
import Feather from 'react-native-vector-icons/Feather'

import {
  Container,
  CardTop,
  CardTitle,
  CloseButton,
  CardDescription
} from './styles'

const Card: React.FC = () => {
  return (
    <Container>
      <CardTop>
        <CardTitle>Teste</CardTitle>
        <CloseButton>
          <Feather name="x" size={20} color="#ff0000" />
        </CloseButton>
      </CardTop>
      <CardDescription>Isso é apenas um teste</CardDescription>
    </Container>
  )
}

export default Card
