import React from 'react'

import * as S from './styled'
import PageHeader from '../../components/PageHeader'

const TeacherList: React.FC = () => {
  return (
    <S.TeacherListWrapper>
      <PageHeader title="Proffys disponíveis" />
    </S.TeacherListWrapper>
  )
}

export default TeacherList
