import { Container } from 'react-bootstrap'

const Header = ({ head, description }) => {
  return (
    <header className="py-4" role="banner" aria-label="CultureAmp page header">
      <Container>
          <h1 className="mb-0">{head}</h1>
      </Container>
    </header>
  )
}

export default Header
