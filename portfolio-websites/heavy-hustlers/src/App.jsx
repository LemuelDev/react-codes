// app component, render all the mini components for the website.

import Approutes from './Routes'
import Navbar from './components/Navbar'
import ThemeProvider from './components/ThemeProvider'
import './styles.css'
import { BrowserRouter as Router } from 'react-router-dom'


const App = () => {

  return (
    <div>
        <ThemeProvider>
          <Router>
              <Navbar/>
              <Approutes/>
          </Router>  
        </ThemeProvider>
    </div>
  )
}

export default App