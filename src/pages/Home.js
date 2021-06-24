import Header from '../components/Header'
import Meta from '../components/Meta'
import { Container,Row, Col, Card} from 'react-bootstrap'

const Home = () => {
  // page content
  const pageTitle = 'My Surveys'
  const pageDescription = 'Surveys landing page'

  return (
    <>
      <Meta title={pageTitle}/>
      <Header head={pageTitle} description={pageDescription} />
      <main aria-label="Cultureamp survey landing page">
        <Container>
          <Row className="gy-4">
            <Col md={6} lg={4} className="col-xxl-3">
              <Card class="position-relative">
                <div className="mb-3">
                  <svg aria-hidden="true" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0)">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M6.00681 11.6584L0.888885 13.867C0.888885 13.867 3.44785 24.3258 7.54219 24.6506C11.6365 24.9754 12.7241 13.4123 12.7241 13.4123L6.00681 11.6584Z" fill="#69BDFF"/>
                      <path opacity="0.15" fill-rule="evenodd" clip-rule="evenodd" d="M5.74077 11.7623L3.76855 12.6275C4.08686 13.9769 5.01265 15.8367 6.54591 18.2067C8.8458 21.7619 8.65348 23.2882 8.40684 24.1831C8.16019 25.078 11.0223 22.7541 11.0223 21.2726C11.0223 19.7911 8.49369 15.939 8.40684 15.5641C8.34894 15.3141 7.46025 14.0468 5.74077 11.7623Z" fill="black"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.4806 1.98431C5.90378 3.53738 4.6084 4.40038 4.6084 4.40038C4.6084 4.40038 4.25231 10.2854 6.94008 15.7896C9.82833 21.7043 9.88893 24.6397 7.12188 24.5957C9.99457 25.2824 13.3308 24.7629 17.1306 23.0373C22.8303 20.4488 23.2619 16.6526 21.1027 10.6991C18.9441 4.74568 20.153 0 20.153 0C20.153 0 15.058 0.431237 10.4806 1.98431Z" fill="#DCE9F4"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M19.5973 13.5722C19.6713 13.8768 19.4844 14.1837 19.1798 14.2578C16.9898 14.7901 14.137 15.7032 10.6255 16.9966C10.3314 17.1049 10.0051 16.9543 9.89677 16.6602C9.78843 16.366 9.93904 16.0398 10.2332 15.9314C13.782 14.6243 16.6734 13.6989 18.9117 13.1548C19.2163 13.0807 19.5232 13.2676 19.5973 13.5722ZM18.6905 9.25043C18.7642 9.55509 18.5771 9.86183 18.2724 9.93557C15.754 10.5451 12.7569 11.5724 9.28403 13.0178C8.99464 13.1382 8.66241 13.0012 8.54198 12.7119C8.42154 12.4225 8.5585 12.0902 8.84789 11.9698C12.3717 10.5033 15.4232 9.45735 18.0054 8.83233C18.31 8.75859 18.6168 8.94578 18.6905 9.25043ZM17.7918 5.55578C17.837 5.86596 17.6221 6.15401 17.312 6.19915C15.0755 6.52466 11.9899 7.45926 8.06753 9.00387C7.77588 9.11872 7.44634 8.9754 7.33149 8.68375C7.21664 8.3921 7.35997 8.06257 7.65161 7.94772C11.6482 6.37387 14.8097 5.41629 17.1485 5.07589C17.4587 5.03075 17.7467 5.2456 17.7918 5.55578Z" fill="#9EAFC0"/>
                    </g>
                    <defs>
                      <clipPath id="clip0">
                      <rect width="24" height="24.8889" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                  <h2 className="d-inline-block ms-2 mb-0 align-middle"><a href="/survey" className="stretched-link link-alt">Acme Engagement Survey</a></h2>
                </div>
                <Row>
                  <Col>
                      <span aria-labelledby="c2-rr" className="d-block text-24 fw-light text-success mb-n2">100%</span>
                      <span id="c2-rr" aria-hidden="true" className="text-secondary">Response rate</span>
                  </Col>
                  <Col>
                      <span aria-labelledby="c2-p" className="d-block text-24 fw-light mb-n2"><span aria-hidden="true">271/271</span><span className="visually-hidden">271 out of 271</span></span>
                      <span id="c2-p" aria-hidden="true" className="text-secondary">Participants</span>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col md={6} lg={4} className="col-xxl-3">
              <Card className="position-relative">
                <div className="mb-3">
                  <svg aria-hidden="true" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0)">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M6.00681 11.6584L0.888885 13.867C0.888885 13.867 3.44785 24.3258 7.54219 24.6506C11.6365 24.9754 12.7241 13.4123 12.7241 13.4123L6.00681 11.6584Z" fill="#69BDFF"/>
                      <path opacity="0.15" fill-rule="evenodd" clip-rule="evenodd" d="M5.74077 11.7623L3.76855 12.6275C4.08686 13.9769 5.01265 15.8367 6.54591 18.2067C8.8458 21.7619 8.65348 23.2882 8.40684 24.1831C8.16019 25.078 11.0223 22.7541 11.0223 21.2726C11.0223 19.7911 8.49369 15.939 8.40684 15.5641C8.34894 15.3141 7.46025 14.0468 5.74077 11.7623Z" fill="black"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.4806 1.98431C5.90378 3.53738 4.6084 4.40038 4.6084 4.40038C4.6084 4.40038 4.25231 10.2854 6.94008 15.7896C9.82833 21.7043 9.88893 24.6397 7.12188 24.5957C9.99457 25.2824 13.3308 24.7629 17.1306 23.0373C22.8303 20.4488 23.2619 16.6526 21.1027 10.6991C18.9441 4.74568 20.153 0 20.153 0C20.153 0 15.058 0.431237 10.4806 1.98431Z" fill="#DCE9F4"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M19.5973 13.5722C19.6713 13.8768 19.4844 14.1837 19.1798 14.2578C16.9898 14.7901 14.137 15.7032 10.6255 16.9966C10.3314 17.1049 10.0051 16.9543 9.89677 16.6602C9.78843 16.366 9.93904 16.0398 10.2332 15.9314C13.782 14.6243 16.6734 13.6989 18.9117 13.1548C19.2163 13.0807 19.5232 13.2676 19.5973 13.5722ZM18.6905 9.25043C18.7642 9.55509 18.5771 9.86183 18.2724 9.93557C15.754 10.5451 12.7569 11.5724 9.28403 13.0178C8.99464 13.1382 8.66241 13.0012 8.54198 12.7119C8.42154 12.4225 8.5585 12.0902 8.84789 11.9698C12.3717 10.5033 15.4232 9.45735 18.0054 8.83233C18.31 8.75859 18.6168 8.94578 18.6905 9.25043ZM17.7918 5.55578C17.837 5.86596 17.6221 6.15401 17.312 6.19915C15.0755 6.52466 11.9899 7.45926 8.06753 9.00387C7.77588 9.11872 7.44634 8.9754 7.33149 8.68375C7.21664 8.3921 7.35997 8.06257 7.65161 7.94772C11.6482 6.37387 14.8097 5.41629 17.1485 5.07589C17.4587 5.03075 17.7467 5.2456 17.7918 5.55578Z" fill="#9EAFC0"/>
                    </g>
                    <defs>
                      <clipPath id="clip0">
                      <rect width="24" height="24.8889" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                  <h2 className="d-inline-block ms-2 mb-0 align-middle"><a href="/survey" className="stretched-link link-alt">Simple Survey</a></h2>
                </div>
                <Row>
                  <Col>
                      <span aria-labelledby="c1-rr" className="d-block text-24 fw-light mb-n2">83%</span>
                      <span id="c1-rr" aria-hidden="true" className="text-secondary">Response rate</span>
                  </Col>
                  <Col>
                    <span aria-labelledby="c1-p" className="d-block text-24 fw-light mb-n2"><span aria-hidden="true">5/6</span><span className="visually-hidden">5 out of 6</span></span>
                    <span id="c1-p" aria-hidden="true" className="text-secondary">Participants</span>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  )
}

export default Home