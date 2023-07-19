import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header';
import Nav from './Nav';
import Home from './Home';
import Card from './Card';
import CardAbout from './CardAbout'
import FooterImg from './FooterImg';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ContactUs from './ContactUs';
import Disclosure from './Disclosure';
import Mandatoryinfo from './Mandatoryinfo';
import SignUpForm from './SignUpForm';
import Login from './Login';




function App() {
  return (
    <div  >
      <BrowserRouter>
        <Nav />
        <Header />
        <FooterImg />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/cardabout" element={<CardAbout />} />
          <Route path="/nav" element={<Nav />} />
          <Route path="/card" element={<Card />} />
          <Route path="/header" element={<Header />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/footerimg" element={<FooterImg />} />
          <Route path="/disclosure" element={<Disclosure />} />
          <Route path="/mandatoryinfo" element={<Mandatoryinfo />} />
          <Route path="/login" element={<Login />} />
          <Route path="/authentication" element={<SignUpForm />} />
          {/* <Route path="/logn" element={<Logn />} /> */}
          {/* <Route path="/sign" element={<SignUpPage />} /> */}
          {/* <Route path="/achivements" element={<Achivements />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/disclosure" element={<Disclosure />} />
            <Route path="/RULES AND REGULATION" element={<RulesRegulation />} />
            <Route path="*" element={<App />} /> */}
        </Routes>
      </BrowserRouter>



    </div>

  );
}

export default App;
