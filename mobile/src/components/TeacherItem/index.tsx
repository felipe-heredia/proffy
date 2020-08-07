import React from 'react'
import { Image } from 'react-native'

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unFavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

import * as S from './styled'

const TeacherItem: React.FC = () => (
  <S.TeacherItemWrapper>
    <S.Profile>
      <S.Avatar source={{ uri: 'https://github.com/felipesuri.png' }} />

      <S.ProfileInfo>
        <S.Name>Felipe</S.Name>
        <S.Subject>Português</S.Subject>
      </S.ProfileInfo>
    </S.Profile>

    <S.Bio>
      Professor de português entusiasta de lingua portuguesa.
      {'\n'}
      {'\n'}
      Apaixonado por escrever textos para o seu blog e produzir conteúdo para a comunidade
      Javascript.
    </S.Bio>

    <S.Footer>
      <S.Price>
        Preço/hora
        {'  '}
        <S.PriceValue>R$ 500</S.PriceValue>
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
