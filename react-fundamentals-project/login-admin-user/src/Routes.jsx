import {Routes, Route} from'react-router-dom'
import Userauth from './components/Userauth';
import Adminauth from './components/Adminauth';
import Adminpage from './components/Adminpage';
import Mainpage from './components/Mainpage';
import About from './components/front-end/About';
import Contact from './components/front-end/Contact';
import Notfound from './components/front-end/Notfound';

const AppRoutes = () => {
    return (
      <Routes>
      {/* Default route, load Userauth */}
      <Route path="/" element={<Userauth />} />

      {/* Admin route, load Adminauth */}
      <Route path="/admin" element={<Adminauth />} />

      {/* Adminpage route */}
      <Route path="/adminpage" element={<Adminpage />} />
      
      {/* Mainpage route */}
      <Route path="/home/*" element={<Mainpage />} />
        {/* About and Contact routes, route them to Mainpage */}
        <Route path="about" element={<About/>} />
        <Route path="contact" element={<Contact/>} />
      <Route/>
      <Route path="*" element={<Notfound/>} />
    </Routes>

        
    );
  };

  


  export default AppRoutes;