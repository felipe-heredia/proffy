import React from 'react'

import whatsappIcon from '../../images/icons/whatsapp.svg'

import * as S from './styled'
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
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  function createNewConnection() {
    api.post('connections', {
      user_id: teacher.id,
    })
  }

  return (
    <S.TeacherItem>
      <header>
        <img src={teacher.avatar} alt={teacher.name} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>

      <p>{teacher.bio}</p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ {teacher.cost}</strong>
        </p>
        <a
          onClick={createNewConnection}
          target="_blank"
          href={`https://wa.me/${teacher.whatsapp}`}
        >
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </a>
      </footer>
    </S.TeacherItem>
  )
}

export default TeacherItem
