
import '../styles.css'
import { useContext, useState } from 'react'
import ThemeContext from '../context/ThemeContext'
import doll2 from '../images/doll2.jpg'
import loaders from '../images/bg-hero.jpg'
import doll3 from '../images/boxes5.jpg'
import {AiOutlineArrowDown, AiOutlineArrowUp} from 'react-icons/ai'

const Aboutpage = () => {

  const {theme} = useContext(ThemeContext)
  const [isClick, setIsClick] = useState(false)
  const [isClickTWo, setIsClickTwo] = useState(false)
  const [isClickThree, setIsClickThree] = useState(false)

  
  return (
    <section className={`pages ${theme}`}>
      <div className='hero about-home'>
        <div className="hero-wrapper">
            <h2>About Us</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem facilis suscipit beatae est esse, provident incidunt vero! Ipsum ipsam sapiente ut fuga dolor incidunt, porro aspernatur eligendi soluta, voluptatibus beatae!</p>
            <button className="btn-email">Email Us</button>
          </div>
      </div>

      <section className="about-content">
          <div className="about-title">
              <h4> What &apos;s in the Company?</h4>
          </div>
          <div className="about-wrapper">
            <div className="content-wrapper">
                <div className="flex-box">
                  <h4>Teamwork makes the dream WORK.</h4>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi magni nesciunt doloremque veritatis laborum eveniet officiis ab culpa eaque qui distinctio rerum, quo accusamus hic sit doloribus deserunt, esse ipsa.</p>
                </div>
                <div className="img-box">
                  <img src={doll2} alt="" />
                </div>
            </div>
            <div className="content-wrapper reverse">
                <div className="flex-box">
                  <h4>Quality over Quantity</h4>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi magni nesciunt doloremque veritatis laborum eveniet officiis ab culpa eaque qui distinctio rerum, quo accusamus hic sit doloribus deserunt, esse ipsa.</p>
                </div>
                <div className="img-box">
                  <img src={loaders} alt="" />
                </div>
            </div>
            <div className="content-wrapper">
                <div className="flex-box">
                  <h4>Good working environment.</h4>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi magni nesciunt doloremque veritatis laborum eveniet officiis ab culpa eaque qui distinctio rerum, quo accusamus hic sit doloribus deserunt, esse ipsa.</p>
                </div>
                <div className="img-box">
                  <img src={doll3} alt="" />
                </div>
            </div>
          </div>
      </section>

      <section className="about-content">
          <div className="about-title">
              <h3>FAQ</h3>
          </div>
          <div className="faq-wrapper">
            <div className="faq-cards">
              <div className="exterior">
                <h4>Frequently Ask Questions?</h4>
                <h4 onClick={() => setIsClick(!isClick)} className='btn-arrow'>{isClick ? <AiOutlineArrowUp/> :<AiOutlineArrowDown/> }</h4>
       
              </div>
              {isClick && 
              <div className="interior">
                   <hr />
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio voluptatem veniam dolore facilis accusantium vitae, doloremque sapiente pariatur tempore nostrum quae, perferendis, nobis omnis quas adipisci odio temporibus repudiandae maxime.</p>
              </div> }
            </div>
            <div className="faq-cards">
              <div className="exterior">
                <h4>Frequently Ask Questions?</h4>
                <h4 onClick={() => setIsClickTwo(!isClickTWo)} className='btn-arrow'>{isClick ? <AiOutlineArrowUp/> :<AiOutlineArrowDown/> }</h4>
       
              </div>
              {isClickTWo && 
              <div className="interior">
                   <hr />
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio voluptatem veniam dolore facilis accusantium vitae, doloremque sapiente pariatur tempore nostrum quae, perferendis, nobis omnis quas adipisci odio temporibus repudiandae maxime.</p>
              </div> }
            </div>
            <div className="faq-cards">
              <div className="exterior">
                <h4>Frequently Ask Questions?</h4>
                <h4 onClick={() => setIsClickThree(!isClickThree)} className='btn-arrow'>{isClick ? <AiOutlineArrowUp/> :<AiOutlineArrowDown/> }</h4>
       
              </div>
              {isClickThree && 
              <div className="interior">
                   <hr />
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio voluptatem veniam dolore facilis accusantium vitae, doloremque sapiente pariatur tempore nostrum quae, perferendis, nobis omnis quas adipisci odio temporibus repudiandae maxime.</p>
              </div> }
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

export default Aboutpage