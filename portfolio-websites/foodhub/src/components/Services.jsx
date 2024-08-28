import {AiFillSafetyCertificate, AiOutlineDollarCircle,} from 'react-icons/ai'
import {FaShippingFast} from 'react-icons/fa'
import '../styles/services.css'
const Services = () => {
  return (
    <section id="services">
        <div className="service-wrapper">
          <h4 className="service-title">Our Services</h4>
          <div className="service-flex">
            <div className="service-card">
                <div className="card-top">
                    <span><AiFillSafetyCertificate/></span>
                </div>
                <div className="card-bot">
                    <h4>Food Security</h4>
                    <p>Lorem ipsum dolfdfalfmlfmalfmlfmalffmdadadadw, reiciendis maxime quo leteris temol lingya hayna turno setis mapol.</p>
                </div>
            </div>
            <div className="service-card">
                <div className="card-top">
                    <span><AiOutlineDollarCircle/></span>
                </div>
                <div className="card-bot">
                    <h4>Budget-Friendly</h4>
                    <p>Lorem ipsum dolfdfalfmlfmalfmlfmalffmdadadadw, reiciendis maxime quo leteris temol lingya hayna turno setis mapol. </p>
                </div>
            </div>
            <div className="service-card">
                <div className="card-top">
                    <span><FaShippingFast/></span>
                </div>
                <div className="card-bot">
                    <h4>Fast Delivery</h4>
                    <p>Lorem ipsum dolfdfalfmlfmalfmlfmalffmdadadadw, reiciendis maxime quo leteris temol lingya hayna turno setis mapol.</p>
                </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Services