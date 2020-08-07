import React from 'react'

import PageHeader from '../../components/PageHeader'

import * as S from './styled'

const Favorites: React.FC = () => {
  return (
    <S.FavoritesWrapper>
      <PageHeader title="Seus Proffys favoritos" />
    </S.FavoritesWrapper>
  )
}

export default Favorites
