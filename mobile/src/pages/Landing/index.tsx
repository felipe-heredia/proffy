import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Image } from 'react-native'

import landingImg from '../../assets/images/landing.png'
import studyIcon from '../../assets/images/icons/study.png'
import giveClassesIcon from '../../assets/images/icons/give-classes.png'
import heartIcon from '../../assets/images/icons/heart.png'

import * as S from './styled'

const Landing: React.FC = () => {
  const navigation = useNavigation()

  function handleNavigateToGiveClassesPage() {
    navigation.navigate('GiveClasses')
  }

  return (
    <S.LandingPageWrapper>
      <S.Banner style={{ resizeMode: 'contain' }} source={landingImg} />

      <S.Title>
        Seja bem-vindo,
        {'\n'}
        <S.TitleBold>O que deseja fazer?</S.TitleBold>
      </S.Title>

      <S.ButtonsContainer>
        <S.ButtonPrimary>
          <Image source={studyIcon} />
          <S.ButtonText>Estudar</S.ButtonText>
        </S.ButtonPrimary>
        <S.ButtonSecondary onPress={handleNavigateToGiveClassesPage}>
          <Image source={giveClassesIcon} />
          <S.ButtonText>Dar aulas</S.ButtonText>
        </S.ButtonSecondary>
      </S.ButtonsContainer>

      <S.TotalConnections>
        Total de 285 conexões já realizadas
        <Image source={heartIcon} />
      </S.TotalConnections>
    </S.LandingPageWrapper>
  )
}

export default Landing
