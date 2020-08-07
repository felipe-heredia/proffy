import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Image } from 'react-native'

import landingImg from '../../assets/images/landing.png'
import studyIcon from '../../assets/images/icons/study.png'
import giveClassesIcon from '../../assets/images/icons/give-classes.png'
import heartIcon from '../../assets/images/icons/heart.png'

import { api } from '../../services/api'

import * as S from './styled'

const Landing: React.FC = () => {
  const [totalConnections, setTotalConnections] = useState()
  const navigation = useNavigation()

  useEffect(() => {
    api.get('/connections').then(response => {
      const { total } = response.data

      setTotalConnections(total)
    })
  }, [])

  function handleNavigateToGiveClassesPage() {
    navigation.navigate('GiveClasses')
  }

  function handleNavigateToStudyPages() {
    navigation.navigate('Study')
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
        <S.ButtonPrimary onPress={handleNavigateToStudyPages}>
          <Image source={studyIcon} />
          <S.ButtonText>Estudar</S.ButtonText>
        </S.ButtonPrimary>
        <S.ButtonSecondary onPress={handleNavigateToGiveClassesPage}>
          <Image source={giveClassesIcon} />
          <S.ButtonText>Dar aulas</S.ButtonText>
        </S.ButtonSecondary>
      </S.ButtonsContainer>

      <S.TotalConnections>
        Total de {totalConnections} conexões já realizadas <Image source={heartIcon} />
      </S.TotalConnections>
    </S.LandingPageWrapper>
  )
}

export default Landing
