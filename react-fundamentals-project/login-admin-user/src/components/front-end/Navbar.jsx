
import {Link} from 'react-router-dom'


const Navbar = () => {
  return (
    <div className="navbar">
        <div className="logo">
              <h3>Logo Here</h3>
        </div>
        <div className="nav-links">
         <Link to='/home' className='links'> 
            Home
        </Link>
        <Link to='/about' className='links'> 
            About
        </Link>
        <Link to='/contact' className='links'> 
            Contacts
        </Link>
        <Link to='/' className='link-button links'>
            Sign Up
        </Link>
        </div>
        
    </div>
  )
}

export default Navbar