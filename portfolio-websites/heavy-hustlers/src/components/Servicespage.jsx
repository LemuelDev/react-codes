
import '../styles.css'
import { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'
import {FaGlobeAfrica, FaShippingFast, FaEnvelopeOpen} from 'react-icons/fa'
import boxes2 from '../images/boxes2.jpg'
import bgWorkers from '../images/bg-workers.jpg'
import customers from '../images/customers.jpg'

const Servicespage = () => {

  const {theme} = useContext(ThemeContext)
  return (
    <section className={`pages ${theme}`}>
       <div className='hero-services'>
        <div className="services-wrapper">
            <h2>Services</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem facilis suscipit beatae est esse, provident incidunt vero! Ipsum ipsam sapiente ut fuga dolor incidunt, porro aspernatur eligendi soluta, voluptatibus beatae!</p>
            <button className="btn-email">Email Us</button>
        </div>
      </div>

      <section className='services-content'>
        <div className="service-title">
            <h4>What can we offer?</h4>
        </div>
          <div className="service-wrapper">
              <div className="service-cards">
                  <div className="top">
                      <FaEnvelopeOpen/>
                  </div>
                  <div className="bot">
                    <h4>One Call Away</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit non atque perspiciatis? Earum ut voluptates cupiditate illo dolore magni similique enim beatae, fugit iste quaerat temporibus corrupti, impedit nulla repellendus.</p>
                  </div>
              </div>
              <div className="service-cards">
                  <div className="top">
                        <FaShippingFast/>
                  </div>
                  <div className="bot">
                    <h4>Fast delivery</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit non atque perspiciatis? Earum ut voluptates cupiditate illo dolore magni similique enim beatae, fugit iste quaerat temporibus corrupti, impedit nulla repellendus.</p>
                  </div>
              </div>
              <div className="service-cards">
                  <div className="top">
                      <FaGlobeAfrica/>
                  </div>
                  <div className="bot">
                    <h4>World-wide service</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit non atque perspiciatis? Earum ut voluptates cupiditate illo dolore magni similique enim beatae, fugit iste quaerat temporibus corrupti, impedit nulla repellendus.</p>
                  </div>
              </div>
          </div>
      </section>

      <section className="cards-content">
        <div className="service-title second">
            There &apos;s a lot more to add!
        </div>
        <div className="content-wrap">
            <div className="wrap-cards">
                <div className="left-card">
                      <h4>Well-Organize</h4>
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem at blanditiis praesentium aut provident dolorum necessitatibus vitae quam, enim atque voluptatibus voluptatem vel obcaecati placeat ipsam labore corporis! Enim, et!</p>
                </div>
                <div className="right-card">
                    <img src={boxes2} alt="" />
                </div>
            </div>
            <div className="wrap-cards card-reverse">
                <div className="left-card">
                      <h4>Rest Assured with our Hustlers</h4>
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem at blanditiis praesentium aut provident dolorum necessitatibus vitae quam, enim atque voluptatibus voluptatem vel obcaecati placeat ipsam labore corporis! Enim, et!</p>
                </div>
                <div className="right-card">
                    <img src={bgWorkers} alt="" />
                </div>
            </div>
            <div className="wrap-cards">
                <div className="left-card">
                      <h4>Customer-Friendly</h4>
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem at blanditiis praesentium aut provident dolorum necessitatibus vitae quam, enim atque voluptatibus voluptatem vel obcaecati placeat ipsam labore corporis! Enim, et!</p>
                </div>
                <div className="right-card">
                    <img src={customers} alt="" />
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

export default Servicespage