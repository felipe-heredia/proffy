import styled from 'styled-components/native'
import { BorderlessButton } from 'react-native-gesture-handler'

export const PageHeaderWrapper = styled.View`
  padding: 40px;
  background: #8257e5;
`

export const TopBar = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Button = styled(BorderlessButton)``

export const Title = styled.Text`
  font-family: Archivo_700Bold;
  color: #fff;
  font-size: 24px;
  line-height: 32px;
  max-width: 168px;
  margin: 48px 0;
`
