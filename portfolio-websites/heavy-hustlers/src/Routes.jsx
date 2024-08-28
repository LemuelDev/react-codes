
import { Routes, Route} from 'react-router-dom';
import Homepage from './components/Homepage';
import Aboutpage from './components/Aboutpage';
import Contactpage from './components/Contactpage';
import Servicespage from './components/Servicespage';

const Approutes = () => {
  return (
    <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route path='/about' element={<Aboutpage/>} />
        <Route path='/contact' element={<Contactpage/>} />
        <Route path='/services' element={<Servicespage/>} />
    </Routes>
  );
}

export default Approutes;
