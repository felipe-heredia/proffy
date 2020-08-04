import styled from 'styled-components'
import media from 'styled-media-query'

export const TeacherListWrapper = styled.div`
  max-width: 700px;
  height: 100vh;
  width: 100vw;

  ${media.greaterThan('medium')`
    max-width: 100%;
  `}
`

export const SearchTeachers = styled.form`
  margin-top: 3.2rem;

  ${media.greaterThan('medium')`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 16px;
    position: absolute;
    bottom: -30px;
  `}
`

export const InputBlock = styled.div`
  position: relative;

  & + div {
    margin-top: 1.4rem;

    ${media.greaterThan('medium')`
      margin-top: 0;
    `}
  }

  label {
    color: var(--color-text-in-primary);
    font-size: 1.4rem;
  }

  input {
    width: 100%;
    height: 5.6rem;
    margin-top: 0.6rem;
    border-radius: 0.6rem;
    background: var(--color-input-background);
    border: 1px solid var(--color-line-in-white);
    outline: 0;
    padding: 0 1.6rem;
    font: 1.6rem Archivo;
  }

  &:focus-within::after input {
    width: calc(100% 3.2rem);
    height: 2px;
    content: '';
    background: var(--color-primary-light);
    position: absolute;
    left: 2.6rem;
    right: 1.6rem;
    outline: 0;
  }
`

export const ListAllTeachers = styled.main`
  margin: 3.2rem auto;
  width: 90%;

  ${media.greaterThan('medium')`
    padding: 3.2rem 0;
    max-width: 740px;
  `}
`
