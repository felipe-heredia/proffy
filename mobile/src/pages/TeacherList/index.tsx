import React, { useState } from 'react'
import { BorderlessButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'

import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'

import * as S from './styled'

const TeacherList: React.FC = () => {
  const [isFiltersVisible, setIsFiltersVisible] = useState(false)

  function handleToggleFiltersVisible() {
    setIsFiltersVisible(!isFiltersVisible)
  }

  return (
    <S.TeacherListWrapper>
      <PageHeader
        title="Proffys disponíveis"
        headerRight={
          <BorderlessButton onPress={handleToggleFiltersVisible}>
            <Feather name="filter" size={20} color="#fff" />
          </BorderlessButton>
        }
      >
        {isFiltersVisible && (
          <S.SearchForm>
            <S.Label>Matéria</S.Label>
            <S.Input placeholder="Qual a matéria?" placeholderTextColor="#c1bccc" />

            <S.InputGroup>
              <S.InputBlock>
                <S.Label>Dia da semana</S.Label>
                <S.Input placeholder="Qual o dia?" placeholderTextColor="#c1bccc" />
              </S.InputBlock>

              <S.InputBlock>
                <S.Label>Horário</S.Label>
                <S.Input placeholder="Qual o horário?" placeholderTextColor="#c1bccc" />
              </S.InputBlock>
            </S.InputGroup>

            <S.SubmitButton>
              <S.SubmitButtonText>Buscar</S.SubmitButtonText>
            </S.SubmitButton>
          </S.SearchForm>
        )}
      </PageHeader>

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
