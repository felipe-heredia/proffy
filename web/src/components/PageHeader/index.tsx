import React from 'react'

import backIcon from '../../images/icons/back.svg'
import logoImg from '../../images/logo.svg'

import * as S from './styled'

interface Props {
  title: string
  description?: string
}

const PageHeader: React.FC<Props> = ({ title, children, description }) => (
  <S.PageHeader>
    <S.TopBarContainer>
      <S.Return to="/">
        <img src={backIcon} alt="Voltar" />
      </S.Return>
      <img src={logoImg} alt="Proffy" />
    </S.TopBarContainer>
    <S.HeaderContent>
      <strong>{title}</strong>
      {description && <p>{description}</p>}

      {children}
    </S.HeaderContent>
  </S.PageHeader>
)

export default PageHeader
