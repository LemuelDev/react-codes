import '../styles/about.css'
import interior2 from '../images/interior-2.jpg'
const About = () => {
  return (
   <section id='about'>
      <div className="about-wrapper">
        <h4 className='about-title'>About Us</h4>
          <div className="about-flex">
            <div className="about-card">
                <div className="about-text">
                    <h4>Quality at it&apos;s Finest</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae aperiam dolore ullam deleniti, labore sequi inventore ducimus quas ratione sed esse illo praesentium numquam. Sint quam rem accusamus enim quaerat?</p>
                </div>
                <div className="about-img">
                      <img src={interior2} alt="interior1" />
                </div>
            </div>
            <div className="about-card reverse">
                <div className="about-text text-reverse">
                    <h4>Quality at it&apos;s Finest</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae aperiam dolore ullam deleniti, labore sequi inventore ducimus quas ratione sed esse illo praesentium numquam. Sint quam rem accusamus enim quaerat?</p>
                </div>
                <div className="about-img">
                      <img src={interior2} alt="interior1" />
                </div>
            </div>
            <div className="about-card">
                <div className="about-text">
                    <h4>Quality at it&apos;s Finest</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae aperiam dolore ullam deleniti, labore sequi inventore ducimus quas ratione sed esse illo praesentium numquam. Sint quam rem accusamus enim quaerat?</p>
                </div>
                <div className="about-img">
                      <img src={interior2} alt="interior1" />
                </div>
            </div>
          </div>
      </div>
      <div className="about-details">
            <div className="detail-wrapper">
              <div className="detail-card">
                    <h2>Popular in your place</h2>
                    <p>lorem ipsum dolor quites delarum thes darehe heniruy.</p>
                </div>
                <div className="detail-card">
                    <h2>Top Rated FoodHub</h2>
                    <p>lorem ipsum dolor quites delarum thes darehe heniruy.</p>
                </div>
                <div className="detail-card">
                    <h2>Delicious Feedback</h2>
                    <p>lorem ipsum dolor quites delarum thes darehe heniruy.</p>
                </div>
            </div>
      </div>
   </section>
  )
}

export default About;