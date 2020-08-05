import React from 'react'

import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'
import Select from '../../components/Select'
import Input from '../../components/Input'

import * as S from './styled'

const TeacherList: React.FC = () => (
  <S.TeacherListWrapper>
    <PageHeader title="Esses são os proffys disponíveis">
      <S.SearchTeachers>
        <Select
          name="subject"
          label="Matéria"
          labelcolor="var(--color-text-in-primary)"
          options={[
            { value: 'Artes', label: 'Artes' },
            { value: 'Biologia', label: 'Biologia' },
            { value: 'Educação Física', label: 'Educação Física' },
            { value: 'Filosofia', label: 'Filosofia' },
            { value: 'Física', label: 'Física' },
            { value: 'Geografia', label: 'Geografia' },
            { value: 'Inglês', label: 'Inglês' },
            { value: 'História', label: 'História' },
            { value: 'Matemática', label: 'matemática' },
            { value: 'Português', label: 'Português' },
            { value: 'Química', label: 'Química' },
            { value: 'Sociologia', label: 'Sociologia' },
          ]}
        />
        <Select
          name="week_day"
          label="Dia da semana"
          labelcolor="var(--color-text-in-primary)"
          options={[
            { value: '0', label: 'Domingo' },
            { value: '1', label: 'Segunda-feira' },
            { value: '2', label: 'Terça-feira' },
            { value: '3', label: 'Quarta-feira' },
            { value: '4', label: 'Quinta-feira' },
            { value: '5', label: 'Sexta-feira' },
            { value: '6', label: 'Sábado' },
          ]}
        />
        <Input
          type="time"
          name="time"
          label="Hora"
          labelcolor="var(--color-text-in-primary)"
        />
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
