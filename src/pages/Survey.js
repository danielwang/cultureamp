import Meta from '../components/Meta'
import { Container,Row, Col, Card} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Survey = () => {
  // page content
  const pageTitle = 'Acme Engagement Survey'
  let themes=['Engagement','My Manager','Top Drivers','Action','Survey'];
  return (
    <>
      <Meta title={pageTitle}/>
      <header class="py-4 mt-3" role="banner" aria-label="CultureAmp page header">
        <Container>
          <div className="d-flex flex-column flex-md-row">
            <div className="d-flex align-items-center">
            <LinkContainer to='/'>
              <a href="#" aria-label="Back to survey landing page">
                <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.8532 20.7461L11.1847 20.4147C11.4043 20.1951 11.4043 19.8389 11.1847 19.6192L2.81777 11.2523H20.4375C20.7481 11.2523 21 11.0005 21 10.6898V10.2211C21 9.91043 20.7481 9.65857 20.4375 9.65857H2.81777L11.1847 1.29166C11.4043 1.07201 11.4043 0.715852 11.1847 0.496148L10.8532 0.164742C10.6336 -0.0549141 10.2774 -0.0549141 10.0578 0.164742L0.164742 10.0577C-0.0549141 10.2774 -0.0549141 10.6335 0.164742 10.8532L10.0578 20.7462C10.2774 20.9659 10.6336 20.9659 10.8532 20.7461Z" fill="black"/>
                </svg>
              </a>
            </LinkContainer>
              <h1 class="ms-3 mb-0">{pageTitle}</h1>
            </div>
            <div className="mt-4 mt-md-0 ms-md-auto d-flex justify-content-around">
              <div className="text-center text-md-end me-md-3">
                <span aria-labelledby="c2-rr" className="d-block text-24 fw-light text-success mb-n2">100%</span>
                <span id="c2-rr" aria-hidden="true" className="text-secondary">Response rate</span>
              </div>
              <div className="text-center text-md-end"> 
                <span aria-labelledby="c2-p" className="d-block text-24 fw-light mb-n2"><span aria-hidden="true">271</span><span className="visually-hidden">271 out of 271</span></span>
                <span id="c2-p" aria-hidden="true" className="text-secondary">Participants</span>
              </div>
            </div>
          </div>
        </Container>
      </header>
      <main aria-label="Survey Details">
        <Container>
        <Row className="justify-content-xxl-center">
          <Col md={4} lg={3}>
            <div className="d-none d-md-block">
              <div className="h5 text-12 text-secondary text-uppercase mt-4 mb-2">themes</div>
              <ul className="list-unstyled" aria-label="Table of content">
                {themes.map((theme,index)=>{
                    return <li key={index}>{theme}</li>
                })}
              </ul>
            </div>
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