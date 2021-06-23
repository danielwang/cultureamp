import Header from '../components/Header'
import Meta from '../components/Meta'
import { Container,Row, Col, Card} from 'react-bootstrap'

const Survey = () => {
  // page content
  const pageTitle = 'Acme Engagement Survey'
  const pageDescription = 'Survey detail page'

  return (
    <>
      <Meta title={pageTitle}/>
      <Header head={pageTitle} description={pageDescription} />
      <main aria-label="Survey Details">
        <Container>
        <Row className="justify-content-xxl-center">
          <Col md={4} lg={3}>
            <div className="h5 text-12 text-muted text-uppercase mt-4 mb-2">themes</div>
            <ul className="list-unstyled" aria-label="Table of content">
              <li>
                Engagement
              </li>
              <li>
                My Manager
              </li>
              <li>
                Top Drivers
              </li>
              <li>
                Action
              </li>
              <li>
                Survey
              </li>
            </ul>
          </Col>
          <Col md={8} lg={9}>
            <Card>
              <div aria-hidden="true" className="d-flex justify-content-between">
                <span className="h5 text-12 text-muted text-uppercase w-50 w-lg-75">Questions</span>
                <span id="res" className="h5 text-12 text-muted text-uppercase">Responses</span>
                <span id="rating" className="h5 text-12 text-muted text-uppercase">Avg Rating</span>
              </div>
              <h2 className="mb-0">Engagement</h2>
              <section role="list" className="d-grid gap-3">
                <div role="listitem" className="d-flex justify-content-between">
                  <span className="w-50 w-lg-75">I would recommend ACME as a great place to work</span>
                  <span aria-describedby="res" className="text-muted text-18">271</span>
                  <span aria-labelledby="rating" className="text-success text-18">3.5</span>
                </div>
                <div role="listitem" className="d-flex justify-content-between">
                  <span className="w-50 w-lg-75">ACME motivates me to go above and beyond what I would in a similar role elsewhere</span>
                  <span aria-describedby="res" className="text-muted text-18">271</span>
                  <span aria-labelledby="rating" className="text-success text-18">5</span>
                </div>
              </section>
              <hr className="my-5"/>
            </Card>
          </Col>
        </Row>  
      </Container>
      </main>
    </>
  )
}

export default Survey