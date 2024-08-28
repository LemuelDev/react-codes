import {headerLogo} from '../assets/images'
import {hamburger} from '../assets/icons'
import { navLinks } from '../constants'
const Nav = () => {
  return (
   <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>
            <a href="/">
            <img
            src={headerLogo}
            width={130}
            height={29}
            />
            </a>
            {/* md:hidden dapat to */}
            <ul className='flex-1 flex justify-center items-center gap-16 max-md:hidden'>
              {navLinks.map((link) => (
                <li key={link.label}>
                    <a 
                    href={link.href}
                    className='leading-normal text-lg text-black'
                    >{link.label}</a>
                </li>
              )) }
            </ul>
            <div className='md:hidden'>
              <img 
              src={hamburger}
              alt='hamburger'
              width={25}
              height={25}
               />
            </div>
        </nav>
   </header>
  )
}

export default Nav