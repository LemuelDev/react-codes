
import '../styles/navbar.css'
import foodBg from '../images/food-bg.jpg'


const Navbar = () => {
  return (
   <>
    <section className="homepage" id='home'>
    <div className="navbar">
        <div className="logo">
            <h4>Foodhub</h4>
        </div>
        <div className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contacts">Contacts</a></li>
        </div>
    </div>
    <div className="hero-section">
       <div className="text-section">
            <h4>Foodhub</h4>
            <p>Lorem ipsum dolor sit ametrecusandae animi quo voluptates placeat at.</p>
            <button className="btn-reach">Reach us now</button>
       </div>
       <div className="image-section">
            <img src={foodBg} alt='foodBG' />
       </div>
    </div>
   </section>
   
  
   </>
  )
}

export default Navbar