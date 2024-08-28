import '../styles/contact.css'
import {BsFacebook, BsInstagram, BsTwitter} from 'react-icons/bs'
const Contact = () => {
  return (
    <section id="contacts"> 
      <h4 className='contact-title'>Contacts</h4>
      <div className="contact-wrapper">
          <div className="contact-flex">
              <div className="left-side">
                  <div className="left-content">
                    <a href="#home"><BsFacebook/></a>
                    <div className="card-media">
                        <h4>Facebook</h4>
                        <p>Visit us now</p>
                    </div>
                  </div>
                  <div className="left-content left-margin">
                    <a href="#home"><BsTwitter/></a>
                    <div className="card-media">
                        <h4>Twitter</h4>
                        <p>Visit us now</p>
                    </div>
                  </div>
                  <div className="left-content">
                    <a href="#home"><BsInstagram/></a>
                    <div className="card-media">
                        <h4>Instagram</h4>
                        <p>Visit us now</p>
                    </div>
                  </div>
              </div>
              <div className="right-side">
                <form>
                    <h4>Reach Us Now!</h4>
                      <input type="text" className="fields" placeholder='Enter your Name'/>
                      <input type="email" className="fields" placeholder='Enter your Email'/>
                      <textarea className='field-area' placeholder='Message Here'>

                      </textarea>
                      <button className="btn-submit">
                        Submit
                      </button>
                </form>
              </div>
          </div>
      </div>
    </section>
  )
}

export default Contact