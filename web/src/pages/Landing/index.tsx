import React from 'react'

import logoImg from '../../images/logo.svg'
import landingImg from '../../images/landing.svg'
import studyIcon from '../../images/icons/study.svg'
import giveClassesIcon from '../../images/icons/give-classes.svg'
import purpleHeartIcon from '../../images/icons/purple-heart.svg'

import * as S from './styled'

const Landing: React.FC = () => (
  <S.LandingWrapper>
    <S.LandingContent>
      <S.LogoContainer>
        <img src={logoImg} alt="Proffy" />
        <S.Description>Sua plataforma de estudos online.</S.Description>
      </S.LogoContainer>

      <S.HeroImage src={landingImg} alt="Plataforma de estudos" />

      <S.ButtonContainer>
        <S.Study to="/study">
          <img src={studyIcon} alt="Estudar" />
          Estudar
        </S.Study>
        <S.Classes to="/give-classes">
          <img src={giveClassesIcon} alt="Dar aulas" />
          Dar aulas
        </S.Classes>
      </S.ButtonContainer>

      <S.TotalConnections>
        Total de 200 conexões já realizadas
        <img src={purpleHeartIcon} alt="Coração Roxo" />
      </S.TotalConnections>
    </S.LandingContent>
  </S.LandingWrapper>
)

export default Landing
