import React from 'react'

import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'

import * as S from './styled'

const TeacherList: React.FC = () => {
  return (
    <S.TeacherListWrapper>
      <PageHeader title="Proffys disponíveis" />

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
    </S.TeacherListWrapper>
  )
}

export default TeacherList
