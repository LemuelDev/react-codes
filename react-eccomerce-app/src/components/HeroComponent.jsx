import style from './StylesComponents.module.css'

const HeroComponent = () => {
  return (
    <div className={style.hero}>
        <h4 className={style.title}>Otso-Otso</h4>
        <p className={style.subHeading}>Your Mini E-commerce Experience</p>
        <button className={style.browseBtn}>Browse Now</button>
    </div>
  )
}

export default HeroComponent