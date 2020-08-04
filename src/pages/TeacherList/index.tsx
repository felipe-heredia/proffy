import React from 'react'

import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'

import * as S from './styled'

const TeacherList: React.FC = () => (
  <S.TeacherListWrapper>
    <PageHeader title="Esses são os proffys disponíveis">
      <S.SearchTeachers>
        <S.InputBlock>
          <label htmlFor="subject">Matéria</label>
          <input type="text" id="subject" />
        </S.InputBlock>
        <S.InputBlock>
          <label htmlFor="week-day">Dia da semana</label>
          <input type="text" id="week-day" />
        </S.InputBlock>
        <S.InputBlock>
          <label htmlFor="time">hora</label>
          <input type="text" id="time" />
        </S.InputBlock>
      </S.SearchTeachers>
    </PageHeader>

    <S.ListAllTeachers>
      <TeacherItem />
      <TeacherItem />
      <TeacherItem />
      <TeacherItem />
      <TeacherItem />
    </S.ListAllTeachers>
  </S.TeacherListWrapper>
)

export default TeacherList
