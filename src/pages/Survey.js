import Header from '../components/Header'
import Meta from '../components/Meta'

const Survey = () => {
  // page content
  const pageTitle = 'Acme Engagement Survey'
  const pageDescription = 'Survey detail page'

  return (
    <div>
      <Meta title={pageTitle}/>
      <Header head={pageTitle} description={pageDescription} />
    </div>
  )
}

export default Survey