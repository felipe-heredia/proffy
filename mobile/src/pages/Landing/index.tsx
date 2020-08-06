import React from 'react'

import landingImg from '../../assets/images/landing.png'

import * as S from './styled'

const Landing: React.FC = () => (
  <S.LandingPageWrapper>
    <S.Banner style={{ resizeMode: 'contain' }} source={landingImg} />

    <S.Title>
      Seja bem-vindo,
      {'\n'}
      <S.TitleBold>O que deseja fazer?</S.TitleBold>
    </S.Title>
  </S.LandingPageWrapper>
)

export default Landing
