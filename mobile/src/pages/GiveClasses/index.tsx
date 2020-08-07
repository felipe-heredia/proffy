import React from 'react'
import { useNavigation } from '@react-navigation/native'

import giveClassesBgImage from '../../assets/images/give-classes-background.png'

import * as S from './styled'

const GiveClasses: React.FC = () => {
  const { goBack } = useNavigation()

  function handleNavigateBack() {
    goBack()
  }

  return (
    <S.GiveClassesWrapper>
      <S.ImageContent resizeMode="contain" source={giveClassesBgImage}>
        <S.Title>Quer ser um Proffy?</S.Title>
        <S.Description>
          Para começar você precisa se cadastrar como professor na nossa plataforma web
        </S.Description>
      </S.ImageContent>

      <S.Button onPress={handleNavigateBack}>
        <S.ButtonText>Tudo bem!</S.ButtonText>
      </S.Button>
    </S.GiveClassesWrapper>
  )
}

export default GiveClasses
