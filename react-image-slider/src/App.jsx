import { useState } from "react"
import {AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai'
import './App.css'


function App() {
  
  const images = [
      'https://images.pexels.com/photos/16741654/pexels-photo-16741654/free-photo-of-sea-landscape-man-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      'https://images.pexels.com/photos/15596359/pexels-photo-15596359/free-photo-of-people-standing-near-rock-formations.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      'https://images.pexels.com/photos/12238171/pexels-photo-12238171.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      'https://images.pexels.com/photos/17277850/pexels-photo-17277850/free-photo-of-city-road-traffic-street.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      'https://images.pexels.com/photos/17864182/pexels-photo-17864182/free-photo-of-woman-and-tree-branches.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      'https://images.pexels.com/photos/17858839/pexels-photo-17858839/free-photo-of-old-fisher.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    ]

  const [current, setCurrent] = useState(0)

  const nextSlide = () => {
    setCurrent(prevState => prevState === images.length - 1 ? 0 : prevState + 1)
  }
  const prevSlide = () => {
    setCurrent(prevState => prevState === 0 ? images.length - 1 : prevState - 1)
  }

  return (
    <>
     <div className="card">
      <h3 className="title-project">React Image Slider</h3>
       <div className="slider">
          <div className="backButton" >
          <AiOutlineArrowLeft onClick={prevSlide} color='red'/>
      </div>
      {images.map((item, index) => (
          current === index && (
            <div key={index}>
              <img src={item} alt="" width='300px' height='300px'/>
            </div>
          )
        ))}
      <div className="nextButton">
          <AiOutlineArrowRight onClick={nextSlide} color='blue'/>
      </div>
         </div>
     </div>
    </>
  )
}

export default App
