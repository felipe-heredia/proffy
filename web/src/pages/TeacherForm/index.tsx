import React, { useState } from 'react'

import PageHeader from '../../components/PageHeader'
import Input from '../../components/Input'

import warningIcon from '../../images/icons/warning.svg'

import * as S from './styled'
import TextArea from '../../components/TextArea'
import Select from '../../components/Select'

const TeacherForm: React.FC = () => {
  const [scheduleItems, setScheduleItems] = useState([{ week_day: 0, from: '', to: '' }])

  const labelColor = 'var(--color-text-complement)'

  function addNewScheduleItem() {
    setScheduleItems([...scheduleItems, { week_day: 0, from: '8:00 AM', to: '4:00 PM' }])
  }

  return (
    <S.PageTeacherForm>
      <PageHeader
        title="Incrível que você quer dar aulas"
        description="O primeiro passo é preencher este formulário de inscrição"
      />

      <S.FormWrapper>
        <S.Fieldset>
          <legend>Seus dados</legend>

          <Input name="name" label="Nome completo" labelcolor={labelColor} />
          <Input name="avatar" label="Avatar" labelcolor={labelColor} />
          <Input name="whatsapp" label="Whatsapp" labelcolor={labelColor} />
        </S.Fieldset>

        <S.Fieldset>
          <legend>Sobre a aula</legend>

          <Select
            name="subject"
            label="Matéria"
            labelcolor={labelColor}
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
          <Input name="cost" label="Custo da hora por aula" labelcolor={labelColor} />
          <TextArea name="bio" label="Biografia" labelcolor={labelColor} />
        </S.Fieldset>

        <S.Fieldset>
          <legend>
            Horários disponíveis
            <S.TimeButton type="button" onClick={addNewScheduleItem}>
              + Novo horário
            </S.TimeButton>
          </legend>

          {scheduleItems.map(scheduleItem => {
            return (
              <S.ScheduleItem key={scheduleItem.week_day}>
                <Select
                  name="week_day"
                  label="Dia da semana"
                  labelcolor={labelColor}
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
                <Input name="from" label="Das" type="time" labelcolor={labelColor} />
                <Input name="to" label="Até" type="time" labelcolor={labelColor} />
              </S.ScheduleItem>
            )
          })}
        </S.Fieldset>

        <S.FormFooter>
          <p>
            <img src={warningIcon} alt="Aviso importante" />
            Importante <br />
            Preencha todos os dados
          </p>
          <S.FooterButton type="button">Salvar cadastro</S.FooterButton>
        </S.FormFooter>
      </S.FormWrapper>
    </S.PageTeacherForm>
  )
}

export default TeacherForm
