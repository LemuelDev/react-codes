import { useContext} from "react"
import { Link } from "react-router-dom"
import ThemeContext from "../context/ThemeContext"

const Navbar = () => {

  const {theme, toggleTheme} = useContext(ThemeContext)

  return (
    <div className={`navbar ${theme}`}>
      <div className="logo">
        <h4>Heavy Hustlers</h4>
      </div>
      <div className="nav-links">
        <Link to='/' className="links">
          Homepage
        </Link>
        <Link to='/about' className="links">
          About
        </Link>
        <Link to='/contact' className="links">
          Contacts
        </Link>
        <Link to='/services' className="links">
          Services
        </Link>
        <label className="switch">
            <input type="checkbox" hidden  />
            <span className="slider" onClick={toggleTheme}></span>
        </label>
      </div>

    </div>
  )
}

export default Navbar