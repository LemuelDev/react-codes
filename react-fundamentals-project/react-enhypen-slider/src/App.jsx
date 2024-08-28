import { useState } from 'react'
import './App.css'
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'

const App = () => {

  const images = [
    'https://i.pinimg.com/originals/a0/b9/fa/a0b9fa5fc9fc71171f0d5fd8d8d3b271.jpg',
    'https://th.bing.com/th/id/OIP.lN_BHnI-vAS7E6hA-GE33gHaEK?w=305&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7',
    'https://th.bing.com/th/id/OIP.fvM6h-s5VzVEA4tuRIn3ygHaGQ?w=205&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7',
    'https://th.bing.com/th/id/OIP.lN_BHnI-vAS7E6hA-GE33gHaEK?w=273&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7',
    'https://th.bing.com/th/id/OIP.5Wnpa0Jv-YH6-T6pYPa1iAHaHa?w=154&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7',
    'https://th.bing.com/th/id/OIP.ySIwFdUMEWIBnFm0tRjCRAHaHa?w=178&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7',
    'https://th.bing.com/th/id/OIP.Xjv_ICA1ekpJgCA9LB0geAHaHa?w=165&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7',
    'https://th.bing.com/th/id/OIP.GW2enLPSLAnWYr9_-IyAowHaEw?w=224&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7',
    'https://th.bing.com/th/id/OIP.GCTy27H6s8-WZSgC1lVBewAAAA?w=129&h=166&c=7&r=0&o=5&dpr=1.4&pid=1.7',
    'https://th.bing.com/th/id/OIP._-bs2uDhivdEBYXgalHavQHaHa?w=156&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7',
    'https://th.bing.com/th/id/OIP.X3UyGD_S46vg4Jvk6cbRxgHaHo?w=168&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7',
    'https://th.bing.com/th/id/OIP.It4-S1lZotPWjIeo7hir0gAAAA?w=164&h=164&c=7&r=0&o=5&dpr=1.4&pid=1.7',
    'https://th.bing.com/th/id/OIP.N2tVmA3FbU0fnnKTfSeVXgHaHa?w=171&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7',
    'https://th.bing.com/th/id/OIP.Pldvj0_JL75ZQ5XdbP39bQAAAA?w=166&h=166&c=7&r=0&o=5&dpr=1.4&pid=1.7',
    'https://th.bing.com/th/id/OIP.tChRqQSpFF9ALVliTRZTLgHaHa?w=178&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7'
  ]

  const [renderImage, setRenderImage] = useState(0);

  const handleNext = () => {
    setRenderImage(prev => prev === images.length - 1 ? 0 : prev + 1)
  }

  const handleBack = () => {
    setRenderImage(prev => prev === 0 ? images.length - 1 : prev - 1)
  }


  return (
    <div className='image-slider'>
        <div className="main">
          <AiOutlineArrowLeft className='arrow' onClick={handleNext}/>
          <img src={images[renderImage]} alt="" className='img'/>
          <AiOutlineArrowRight className='arrow' onClick={handleBack}/>
        </div>
        <div className="title-sec">
          <h4>Enhypen Jay Meme Slider</h4>
          <p>15 images for u</p>
        </div>
    </div>
  )
}

export default App