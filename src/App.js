import { Container } from 'react-bootstrap'
import { Route, Switch } from 'react-router-dom'

// Layout
import Layout from './layout/Layout'

// pages
import Home from './pages/Home'
import Survey from './pages/Survey'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/survey' component={Survey} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  )
}

export default App
