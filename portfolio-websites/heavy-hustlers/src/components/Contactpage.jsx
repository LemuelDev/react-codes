
import '../styles.css'
import { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'
import { FaFacebookF, FaInstagram, FaTwitter, FaTelegramPlane} from 'react-icons/fa'


const Contactpage = () => {

  const {theme} = useContext(ThemeContext)
  
  return (
    <section className={`pages ${theme}`}>
      <div className='hero-contact'>
        <div className="hero-contacts">
          <h2>Contact Us</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem facilis suscipit beatae est esse, provident incidunt vero! Ipsum ipsam sapiente ut fuga dolor incidunt, porro aspernatur eligendi soluta, voluptatibus beatae!</p>
          <button className="btn-email">Email Us</button>
        </div>
      </div>

      <section className="social-media">
          <div className="media-title">
              <h4>Contact Us with <br /> Different  Accounts</h4>
          </div>
          <div className="media-wrapper">
              <div className="media-cards">
                  <div className="media-icon">
                      <FaFacebookF/>
                  </div>
                  <div className="media-text">
                    <h4>Facebook</h4>
                    <button className="btn-contact">Facebook</button>
                  </div>
              </div>
              <div className="media-cards">
                  <div className="media-icon">
                      <FaInstagram/>
                  </div>
                  <div className="media-text">
                    <h4>Instagram</h4>
                    <button className="btn-contact">Instagram</button>
                  </div>
              </div>
              <div className="media-cards">
                  <div className="media-icon">
                      <FaTelegramPlane/>
                  </div>
                  <div className="media-text">
                    <h4>Telegram</h4>
                    <button className="btn-contact">Telegram</button>
                  </div>
              </div>
              <div className="media-cards">
                  <div className="media-icon">
                      <FaTwitter/>
                  </div>
                  <div className="media-text">
                    <h4>Twitter</h4>
                    <button className="btn-contact">Twitter</button>
                  </div>
              </div>
          </div>
      </section>

      <section className="about-content">
        <div className="reach-wrapper">
            <div className="reach-text">
                <h4>Reach Us Out !!</h4>
            </div>
            <form>
              <label htmlFor="name">Name Here:</label>
                <input type="text"
                placeholder='Enter Name...'
                id='name'
                />
                <label htmlFor="email">Email here:</label>
                <input type="email"
                placeholder='Enter Email..'
                id='email'
                />
                <textarea placeholder='Message Here'>
               
                </textarea>
                <button className='btn-form'>Submit</button>
            </form>
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

export default Contactpage