import Header from '../components/Header'
import Meta from '../components/Meta'

const Home = () => {
  // page content
  const pageTitle = 'My Surveys'
  const pageDescription = 'welcome to react bootstrap template'

  return (
    <div>
      <Meta title={pageTitle}/>
      <Header head={pageTitle} description={pageDescription} />
      <div className="container" role="region">
        <div class="row">
          <div class="col-md-6 col-lg-4 col-xl-3">
            <div class="card">
              <h2>Simple Survey</h2>
            </div>
          </div>      
        </div>
      </div>
    </div>
  )
}

export default Home