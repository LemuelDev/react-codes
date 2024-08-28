import { AiFillGithub, AiFillFacebook, AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import style from './Styles.module.css'

const NavbarComponent = () => {
  return (
    <>
        <nav className={style.header}>
            <div className={style.logo}>
                <h4>Mowbie App</h4>
            </div>
            <input type="checkbox" id="menu" hidden/>
            <label htmlFor="menu" className={style.label}>
            <AiOutlineMenu/>
            </label>
            <ul className={style.navbar}>
            <label htmlFor="menu" className={style.label}>
                <AiOutlineClose/>
            </label>
                <li><a href="https://github.com/LemuelDev"><AiFillGithub/></a></li>
                <li><a href="https://www.facebook.com/profile.php?id=100004509047598&mibextid=D4KYlr"><AiFillFacebook/></a></li>
                <li><a href="mailto:johnlemuelencina@gmail.com" className={style.emailBtn}>Email Me</a></li>
            </ul>
        </nav>
    </>
  )
}

export default NavbarComponent