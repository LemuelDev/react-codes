
import Navbar from "./components/Navbar"
import About from "./components/About"
import Services from "./components/Services"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div className="app">
        <Navbar/>
        <About/>
        <Services />
        <Contact />
        <Footer/>
    </div>
  )
}

export default App