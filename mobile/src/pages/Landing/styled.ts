import styled from 'styled-components/native'

export const LandingPageWrapper = styled.View`
  flex: 1;
  background-color: #8257e5;
  justify-content: center;
  padding: 40px;
`

export const Banner = styled.Image`
  width: 100%;
`

export const Title = styled.Text`
  color: #fff;
  font-family: Poppins_400Regular;
  font-size: 20px;
  line-height: 30px;
  margin-top: 80px;
`

export const TitleBold = styled.Text`
  font-family: Poppins_600SemiBold;
`

export const TextWrapper = styled.Text``

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-top: 40px;
  justify-content: space-between;
`

export const ButtonPrimary = styled.TouchableOpacity`
  height: 150px;
  width: 48%;
  background: #333;
  border-radius: 8px;
  padding: 24px;
  justify-content: space-between;
  align-items: center;

  background: #9871f5;
`

export const ButtonText = styled.Text`
  font-family: Archivo_700Bold;
  color: #fff;
  font-size: 20px;
`

export const ButtonSecondary = styled.TouchableOpacity`
  height: 150px;
  width: 48%;
  background: #333;
  border-radius: 8px;
  padding: 24px;
  justify-content: space-between;
  align-items: center;

  background: #04b361;
`

export const TotalConnections = styled.Text`
  font-family: Poppins_400Regular;
  color: #d4c2ff;
  font-size: 12px;
  max-width: 140px;
  margin-top: 40px;
`
