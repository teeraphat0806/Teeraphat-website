import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home.jsx';
import Navbar from './components/navbar.jsx'; 
import Aboutme from './page/About.jsx';


function App() {
  return (
    <BrowserRouter>
      <Navbar /> {/* Add Navbar component */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<Aboutme/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;