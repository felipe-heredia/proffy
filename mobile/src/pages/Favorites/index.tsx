import React from 'react'

import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'

import * as S from './styled'

const Favorites: React.FC = () => {
  return (
    <S.FavoritesWrapper>
      <PageHeader title="Seus Proffys favoritos" />

      <S.TeacherList contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </S.TeacherList>
    </S.FavoritesWrapper>
  )
}

export default Favorites
