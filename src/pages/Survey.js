import Header from '../components/Header'
import Meta from '../components/Meta'
import { Container,Row, Col, Card} from 'react-bootstrap'

const Survey = () => {
  // page content
  const pageTitle = 'Acme Engagement Survey'
  const pageDescription = 'Survey detail page'
  let themes=['Engagement','My Manager','Top Drivers','Action','Survey'];
  return (
    <>
      <Meta title={pageTitle}/>
      <Header head={pageTitle} description={pageDescription} />
      <main aria-label="Survey Details">
        <Container>
        <Row className="justify-content-xxl-center">
          <Col md={4} lg={3}>
            <div className="h5 text-12 text-secondary text-uppercase mt-4 mb-2">themes</div>
            <ul className="list-unstyled" aria-label="Table of content">
              {themes.map((theme,index)=>{
                  return <li key={index}>{theme}</li>
              })}
            </ul>
          </Col>
          <Col md={8} lg={9}>
            <Card className="mb-5">
              <div aria-hidden="true" className="d-flex justify-content-between">
                <span className="h5 text-12 text-secondary text-uppercase w-50 w-lg-60">Questions</span>
                <span id="res" className="h5 text-12 text-secondary text-uppercase w-25 w-lg-20 text-center">Responses</span>
                <span id="rating" className="h5 text-12 text-secondary text-uppercase w-25 w-lg-20 text-center">Avg Rating</span>
              </div>
              <h2 className="mb-4">Engagement</h2>
              <section role="list" className="d-grid gap-4">
                <div role="listitem" className="d-flex justify-content-between">
                  <span className="w-50 w-lg-60">I would recommend ACME as a great place to work</span>
                  <span aria-describedby="res" className="w-25 w-lg-20 text-center fw-light text-18">271</span>
                  <span aria-labelledby="rating" className="w-25 w-lg-20 text-success text-center text-18">5</span>
                </div>
                <div role="listitem" className="d-flex justify-content-between">
                  <span className="w-50 w-lg-60">ACME motivates me to go above and beyond what I would in a similar role elsewhere</span>
                  <span aria-describedby="res" className="w-25 w-lg-20 text-center fw-light text-18">270</span>
                  <span aria-labelledby="rating" className="w-25 w-lg-20 text-center fw-light text-18">3.18</span>
                </div>
                <div role="listitem" className="d-flex justify-content-between">
                  <span className="w-50 w-lg-60">I rarely think about looking for a job at another company</span>
                  <span aria-describedby="res" className="w-25 w-lg-20 fw-light text-center text-18">269</span>
                  <span aria-labelledby="rating" className="w-25 w-lg-20 fw-light text-center text-18">3.25</span>
                </div>
                <div role="listitem" className="d-flex justify-content-between">
                  <span className="w-50 w-lg-60">This is an exciting time to be at ACME</span>
                  <span aria-describedby="res" className="w-25 w-lg-20 text-center fw-light text-18">271</span>
                  <span aria-labelledby="rating" className="w-25 w-lg-20 text-center fw-light text-18">3</span>
                </div>
                <div role="listitem" className="d-flex justify-content-between">
                  <span className="w-50 w-lg-60">I am proud to work for ACME</span>
                  <span aria-describedby="res" className="w-25 w-lg-20 text-center fw-light text-18">271</span>
                  <span aria-labelledby="rating" className="w-25 w-lg-20 text-danger text-center text-18">2.25</span>
                </div>
              </section>
      
              {themes.map((theme,index)=>{
                  return <>
                    <hr className="my-5"/>
                    <h2 className="mb-4">{theme}</h2>
                    <section role="list" className="d-grid gap-4">
                      <div role="listitem" className="d-flex justify-content-between">
                        <span className="w-50 w-lg-60">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                        <span aria-describedby="res" className="w-25 w-lg-20 text-center fw-light text-18">271</span>
                        <span aria-labelledby="rating" className="w-25 w-lg-20 text-success text-center text-18">5</span>
                      </div>
                      <div role="listitem" className="d-flex justify-content-between">
                        <span className="w-50 w-lg-60">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</span>
                        <span aria-describedby="res" className="w-25 w-lg-20 text-center fw-light text-18">270</span>
                        <span aria-labelledby="rating" className="w-25 w-lg-20 text-center fw-light text-18">3.18</span>
                      </div>
                      <div role="listitem" className="d-flex justify-content-between">
                        <span className="w-50 w-lg-60">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</span>
                        <span aria-describedby="res" className="w-25 w-lg-20 fw-light text-center text-18">269</span>
                        <span aria-labelledby="rating" className="w-25 w-lg-20 fw-light text-center text-18">3.25</span>
                      </div>
                      <div role="listitem" className="d-flex justify-content-between">
                        <span className="w-50 w-lg-60">Excepteur sint occaecat cupidatat non proident</span>
                        <span aria-describedby="res" className="w-25 w-lg-20 text-center fw-light text-18">271</span>
                        <span aria-labelledby="rating" className="w-25 w-lg-20 text-center fw-light text-18">3</span>
                      </div>
                      <div role="listitem" className="d-flex justify-content-between">
                        <span className="w-50 w-lg-60">Dolorem eum fugiat quo voluptas nulla pariatur</span>
                        <span aria-describedby="res" className="w-25 w-lg-20 text-center fw-light text-18">271</span>
                        <span aria-labelledby="rating" className="w-25 w-lg-20 text-danger text-center text-18">2.25</span>
                      </div>
                    </section>
                  </>
              })}
            </Card>
          </Col>
        </Row>  
      </Container>
      </main>
    </>
  )
}

export default Survey