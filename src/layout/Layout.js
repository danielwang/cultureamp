// router
import { BrowserRouter as Router} from 'react-router-dom'

// components
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Layout = ({ children }) => {
  return (
    <Router>
      <div className="d-flex flex-column">
        <Navbar />
        <main className="flex-fill" aria-label="culureamp page content">
          {children}
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default Layout
