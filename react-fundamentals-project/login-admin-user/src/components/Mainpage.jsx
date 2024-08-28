import Hero from "./front-end/Hero"
import Navbar from "./front-end/Navbar"
import './Mainstyles.css'
const Mainpage = () => {
  return (
    <>
      <Navbar/>
       <div className="homepage">
         <Hero/>
       </div>
    </>
    
    
  )
}

export default Mainpage