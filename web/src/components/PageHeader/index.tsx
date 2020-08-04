import React from 'react'

import backIcon from '../../images/icons/back.svg'
import logoImg from '../../images/logo.svg'

import * as S from './styled'

interface Props {
  title: string
}

const PageHeader: React.FC<Props> = ({ title, children }) => (
  <S.PageHeader>
    <S.TopBarContainer>
      <S.Return to="/">
        <img src={backIcon} alt="Voltar" />
      </S.Return>
      <img src={logoImg} alt="Proffy" />
    </S.TopBarContainer>
    <S.HeaderContent>
      <strong>{title}</strong>

      {children}
    </S.HeaderContent>
  </S.PageHeader>
)

export default PageHeader
