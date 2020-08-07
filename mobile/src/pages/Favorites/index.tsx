import React, { useState } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { useFocusEffect } from '@react-navigation/native'

import PageHeader from '../../components/PageHeader'
import TeacherItem, { Teacher } from '../../components/TeacherItem'

import * as S from './styled'

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState([])

  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        const favoritedTeachers = JSON.parse(response)

        setFavorites(favoritedTeachers)
      }
    })
  }

  useFocusEffect(() => {
    loadFavorites()
  })

  return (
    <S.FavoritesWrapper>
      <PageHeader title="Seus Proffys favoritos" />

      <S.TeacherList contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}>
        {favorites.map((teacher: Teacher) => (
          <TeacherItem key={teacher.id} teacher={teacher} favorited />
        ))}
      </S.TeacherList>
    </S.FavoritesWrapper>
  )
}

export default Favorites
