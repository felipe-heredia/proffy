import React from 'react'

import whatsappIcon from '../../images/icons/whatsapp.svg'

import * as S from './styled'

const TeacherItem: React.FC = () => (
  <S.TeacherItem>
    <header>
      <img
        src="https://suri-gobarber.s3.us-east-2.amazonaws.com/e4673dd731a77ee71b4a-50281523.jpeg"
        alt="felipesuri"
      />
      <div>
        <strong>felipesuri</strong>
        <span>Português</span>
      </div>
    </header>

    <p>
      Gosta muito de escrever artigos para o seu blog sobre programação.
      <br />
      <br />
      Apaixonado por escrita de código e também por escrita de artigos que mudarão a vida
      das pessoas.
    </p>

    <footer>
      <p>
        Preço/hora
        <strong>R$ 110,00</strong>
      </p>
      <button type="button">
        <img src={whatsappIcon} alt="Whatsapp" />
        Entrar em contato
      </button>
    </footer>
  </S.TeacherItem>
)

export default TeacherItem
