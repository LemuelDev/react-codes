// navbar with router....
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo">
            <h4>BOGART STORE</h4>
        </div>
        <nav>
            <Link className='links'> Homepage</Link>
            <Link className='links'> About</Link>
            <Link className='links'> Settings</Link>
            <Link className='links'> Cart</Link>
        </nav>
    </div>
  )
}

export default Navbar