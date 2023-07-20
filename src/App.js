import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './App.css';
import Header from './component/Header';
import HeroSection from './component/HeroSection';
import Trend from './component/Trend';
import Footer from './component/Footer';
import Testimonials from './component/Testimonials';
import Notfound from './component/Notfound';
import Marketplace from './component/Marketplace';
import { BrowserRouter , Routes, Route } from 'react-router-dom';


function App() {
return(
  
  <BrowserRouter>
  <Header />
  <Routes>
  <Route path='/' element = {
    <>
    <HeroSection/>
    <Trend/>
    <Testimonials/>
    <Footer/>
    </>
  }>
  </Route>
  <Route path='Marketplace' element={<Marketplace/>}></Route>
  <Route path='*' element={<Notfound/>}></Route>
 
  </Routes>
  </BrowserRouter>
 
);
}

export default App;
