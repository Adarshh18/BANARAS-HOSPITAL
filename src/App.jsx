import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Departments from './pages/Departments';
import Doctors from './pages/Doctors';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Location from './pages/Location';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/location" element={<Location />} />
      </Route>
    </Routes>
  );
}

export default App;
