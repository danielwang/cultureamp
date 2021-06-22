// router
import { BrowserRouter as Router} from 'react-router-dom'

// components
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Layout = ({ children }) => {
  return (
    <Router>
      <Navbar />
      <main aria-label="culureamp page content">
        {children}
      </main>
      <Footer />
    </Router>
  )
}

export default Layout
