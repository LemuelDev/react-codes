
import '../styles.css'
import imgLoader from '../images/loaders.jpg'
import dolls from '../images/dolls.jpg'
import { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'
import {AiOutlineCheck} from 'react-icons/ai'
const Homepage = () => {

  const {theme} = useContext(ThemeContext)

  return (
      <section className={`${theme}`}>

        {/* homepage */}
          <section className="homepage">
            <div className="content">
                  <div className="text-content">
                  <h2>Heavy Hustlers</h2>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem facilis suscipit beatae est esse, provident incidunt vero! Ipsum ipsam sapiente ut fuga dolor incidunt, porro aspernatur eligendi soluta, voluptatibus beatae!</p>
                  <button className="btn-email">Email Us</button>
                  </div>
                  <div className="image-content">
                    <img src={imgLoader} alt=""  />
                  </div>
              </div>
          </section>

        {/* contents */}
        <section className="home-contents">
            <div className="wrapper">
                <div className="wrapper-content">
                  <div className="text-wrapper">
                      <h4>Fast, Reliable, and Safe Hustlers!</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam quam magni sunt, quae esse voluptas quod fugiat! A eum rem necessitatibus, illum itaque corrupti in, laboriosam, aperiam sunt blanditiis magnam.</p>
                  </div>
                  <div className="model-content">
                        <img src={dolls} alt="rag-dolls" />
                  </div>
                </div>
            </div>
        </section>

        <section className="second-contents">
            <div className="wrapper">
               <div className="main-content">
               <h3>Hustlers at your Service!</h3>
                <div className="wrapper-customers">
                  <div className="cards">
                      <h1>5000+</h1>
                      <h4>Happy Customers</h4>
                  </div>
                  <div className="cards">
                      <h1>760</h1>
                      <h4>Different Locations</h4>
                  </div>
                  <div className="cards">
                      <h1>A+</h1>
                      <h4>Customer Reviews</h4>
                  </div>
                </div>
               </div>
            </div>
        </section>

        <section className='pricing-section'>
            <div className="price-wrapper">
              <h3>Pricing</h3>
              <div className="price-content">
                <div className="price-card">
                    <h1 className='price-title'>Regular</h1>
                    <p><AiOutlineCheck/> sample</p>
                    <p><AiOutlineCheck/> sample</p>
                    <p><AiOutlineCheck/> sample</p>
                    <p><AiOutlineCheck/> sample</p>
                    <p><AiOutlineCheck/> sample</p>
                    <hr />
                    <h1>$200</h1>
                    <button className="btn-buy">
                      Buy Now
                    </button>
                </div>
                <div className="price-card vip">
                    <h1>VIP</h1>
                    <p><AiOutlineCheck/> sample</p>
                    <p><AiOutlineCheck/> sample</p>
                    <p><AiOutlineCheck/> sample</p>
                    <p><AiOutlineCheck/> sample</p>
                    <p><AiOutlineCheck/> sample</p>
                    <hr />
                    <h1>$200</h1>
                    <button className="btn-buy btn-vip">
                      Buy Now
                    </button>
                </div>
                <div className="price-card">
                    <h1 className='price-title'>Member</h1>
                    <p><AiOutlineCheck/> sample</p>
                    <p><AiOutlineCheck/> sample</p>
                    <p><AiOutlineCheck/> sample</p>
                    <p><AiOutlineCheck/> sample</p>
                    <p><AiOutlineCheck/> sample</p>
                    <hr />
                    <h1>$200</h1>
                    <button className="btn-buy">
                      Buy Now
                    </button>
                </div>
              </div>
            </div>
        </section>

 
        <section className="footer">
             <hr />
          <div className="footer-section">
                  <p>All rights reserved.</p>
                  <h2>Heavy Hustlers</h2>
                  <p>LemuelDev</p>
          </div>
        </section>

      </section>

      
  )
}

export default Homepage