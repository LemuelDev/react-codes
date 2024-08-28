import style from './StylesComponents.module.css'


const Navbar = () => {
  return (
    <div>
        <nav>
            <div className={style.logo}>
                <h3>
                    Otso-Otso
                </h3>
            </div>
            <ul className={style.navbar}>
                <li><a href="">All Products</a></li>
                <li><a href="">Account</a></li>
                <li><a href="">Cart</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar