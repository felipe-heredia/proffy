import React, { ReactNode } from 'react'
import { Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import backIcon from '../../assets/images/icons/back.png'
import logoImg from '../../assets/images/logo.png'

import * as S from './styled'

interface PageHeaderProps {
  title: string
  headerRight?: ReactNode
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, headerRight, children }) => {
  const { navigate } = useNavigation()

  function handleGoBack() {
    navigate('Landing')
  }

  return (
    <S.PageHeaderWrapper>
      <S.TopBar>
        <S.Button onPress={handleGoBack}>
          <Image source={backIcon} resizeMode="contain" />
        </S.Button>

        <Image source={logoImg} resizeMode="contain" />
      </S.TopBar>

      <S.Header>
        <S.Title>{title}</S.Title>
        {headerRight}
      </S.Header>

      {children}
    </S.PageHeaderWrapper>
  )
}

export default PageHeader
