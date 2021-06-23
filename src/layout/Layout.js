// router
import { BrowserRouter as Router} from 'react-router-dom'

// components
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Layout = ({ children }) => {
  return (
    <Router>
      <div className="vh-100 d-flex flex-column">
        <Navbar />
        <div className="flex-fill">
          {children}
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default Layout
