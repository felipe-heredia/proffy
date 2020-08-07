import React, { useState } from 'react'
import { Image, Linking } from 'react-native'

import AsyncStorage from '@react-native-community/async-storage'
import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unFavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

import * as S from './styled'
import { styles } from './styled'
import { api } from '../../services/api'

export interface Teacher {
  id: number
  avatar: string
  bio: string
  cost: number
  name: string
  subject: string
  whatsapp: string
}

interface TeacherItemProps {
  teacher: Teacher
  favorited: boolean
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, favorited }) => {
  const [isFavorited, setIsFavorited] = useState(favorited)

  function handleLinkToWhatsapp() {
    api.post('/connections', {
      user_id: teacher.id,
    })

    Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`)
  }

  async function handleToggleFavorite() {
    const favorites = await AsyncStorage.getItem('favorites')

    let favoritesArray = []

    if (favorites) {
      favoritesArray = JSON.parse(favorites)
    }

    if (isFavorited) {
      const favoriteIndex = favoritesArray.findIndex((teacherItem: Teacher) => {
        return teacherItem.id === teacher.id
      })

      favoritesArray.splice(favoriteIndex, 1)
      setIsFavorited(false)
    } else {
      favoritesArray.push(teacher)

      setIsFavorited(true)
    }

    await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray))
  }

  return (
    <S.TeacherItemWrapper>
      <S.Profile>
        <S.Avatar source={{ uri: teacher.avatar }} />

        <S.ProfileInfo>
          <S.Name>{teacher.name}</S.Name>
          <S.Subject>{teacher.subject}</S.Subject>
        </S.ProfileInfo>
      </S.Profile>

      <S.Bio>{teacher.bio}</S.Bio>

      <S.Footer>
        <S.Price>
          Preço/hora
          {'  '}
          <S.PriceValue>{teacher.cost}</S.PriceValue>
        </S.Price>

        <S.ButtonsContainer>
          <S.FavoriteButton
            style={[isFavorited ? styles.favorited : {}]}
            onPress={handleToggleFavorite}
          >
            {isFavorited ? (
              <Image source={unFavoriteIcon} />
            ) : (
              <Image source={heartOutlineIcon} />
            )}
          </S.FavoriteButton>

          <S.ContactButton>
            <Image source={whatsappIcon} />
            <S.ContactButtonText onPress={handleLinkToWhatsapp}>
              Entrar em contato
            </S.ContactButtonText>
          </S.ContactButton>
        </S.ButtonsContainer>
      </S.Footer>
    </S.TeacherItemWrapper>
  )
}

export default TeacherItem
