import '../styles/footer.css'
import {BsFacebook, BsInstagram, BsTwitter} from 'react-icons/bs'
const Footer = () => {
  return (
    <section className='footer'>
        <div className="wrapper">
            <h4><i>Savor the flavors of life.</i></h4>
        </div>
        <div className="foot">
            <div className="cards">
                <h2>Foodhub</h2>
                <p>All rights reserved.</p>
            </div>
            <div className="cards">
                <a href="#home"><BsFacebook/></a>
                <a href="#home"><BsTwitter/></a>
                <a href="#home"><BsInstagram/></a>
            </div>
            <div className="cards">
                <button className="btn-contact">
                    Contact Us
                </button>
            </div>
        </div>
    </section>
  )
}

export default Footer