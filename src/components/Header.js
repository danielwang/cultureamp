import { Container } from 'react-bootstrap'

const Header = ({ head, description }) => {
  return (
    <header role="banner" aria-label="CultureAmp page header">
      <Container>
          <h1>{head}</h1>
      </Container>
    </header>
  )
}

export default Header
