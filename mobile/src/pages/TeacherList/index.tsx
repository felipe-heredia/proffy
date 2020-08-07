import React, { useState, useEffect } from 'react'
import { BorderlessButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import AsyncStorage from '@react-native-community/async-storage'

import PageHeader from '../../components/PageHeader'
import TeacherItem, { Teacher } from '../../components/TeacherItem'

import * as S from './styled'
import { api } from '../../services/api'

const TeacherList: React.FC = () => {
  const [isFiltersVisible, setIsFiltersVisible] = useState(true)
  const [favorites, setFavorites] = useState<number[]>([])
  const [teachers, setTeachers] = useState([])

  const [subject, setSubject] = useState('')
  const [week_day, setWeekDay] = useState('')
  const [time, setTime] = useState('')

  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        const favoritedTeachers = JSON.parse(response)
        const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => {
          return teacher.id
        })

        setFavorites(favoritedTeachersIds)
      }
    })
  }

  useEffect(() => {
    loadFavorites()
  }, [])

  function handleToggleFiltersVisible() {
    setIsFiltersVisible(!isFiltersVisible)
  }

  async function handleFiltersSubmit() {
    loadFavorites()

    const response = await api.get('/classes', {
      params: {
        subject,
        week_day,
        time,
      },
    })

    setIsFiltersVisible(false)
    setTeachers(response.data)
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
            <S.Input
              placeholder="Qual a matéria?"
              value={subject}
              onChangeText={text => setSubject(text)}
              placeholderTextColor="#c1bccc"
            />

            <S.InputGroup>
              <S.InputBlock>
                <S.Label>Dia da semana</S.Label>
                <S.Input
                  placeholder="Qual o dia?"
                  value={week_day}
                  onChangeText={text => setWeekDay(text)}
                  placeholderTextColor="#c1bccc"
                />
              </S.InputBlock>

              <S.InputBlock>
                <S.Label>Horário</S.Label>
                <S.Input
                  placeholder="Qual o horário?"
                  value={time}
                  onChangeText={text => setTime(text)}
                  placeholderTextColor="#c1bccc"
                />
              </S.InputBlock>
            </S.InputGroup>

            <S.SubmitButton onPress={handleFiltersSubmit}>
              <S.SubmitButtonText>Buscar</S.SubmitButtonText>
            </S.SubmitButton>
          </S.SearchForm>
        )}
      </PageHeader>

      <S.TeacherList contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}>
        {teachers.map((teacher: Teacher) => (
          <TeacherItem
            key={teacher.id}
            teacher={teacher}
            favorited={favorites.includes(teacher.id)}
          />
        ))}
      </S.TeacherList>
    </S.TeacherListWrapper>
  )
}

export default TeacherList
