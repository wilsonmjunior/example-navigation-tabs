import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  height: 80px;
  background: #f6f6f6;

  padding: 16px;

  border-radius: 10px;
  margin-bottom: 16px;

  elevation: 2;
`

export const CardTop = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const CardTitle = styled.Text`
  color: #ff0000;
`

export const CloseButton = styled.TouchableOpacity``

export const CardDescription = styled.Text`
  margin-top: 8px;
`
