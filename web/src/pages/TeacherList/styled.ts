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
    bottom: -5.2rem;
  `}
`

export const ListAllTeachers = styled.main`
  margin: 3.2rem auto;
  width: 90%;

  ${media.greaterThan('medium')`
    padding: 3.2rem 0;
    max-width: 740px;
  `}
`
