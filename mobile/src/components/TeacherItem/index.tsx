import React from 'react'
import { Image } from 'react-native'

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unFavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

import * as S from './styled'

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
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => (
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
        <S.FavoriteButton style={S.styles.favorited}>
          {/* <Image source={heartOutlineIcon} /> */}
          <Image source={unFavoriteIcon} />
        </S.FavoriteButton>

        <S.ContactButton>
          <Image source={whatsappIcon} />
          <S.ContactButtonText>Entrar em contato</S.ContactButtonText>
        </S.ContactButton>
      </S.ButtonsContainer>
    </S.Footer>
  </S.TeacherItemWrapper>
)

export default TeacherItem
