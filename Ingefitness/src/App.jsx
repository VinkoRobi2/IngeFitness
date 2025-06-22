import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import CardsSection from "./Components/CardsSection";
import PlansSection from "./Components/Planes";
import AdminLogin from "./Components/AdminLogin";
import AboutUs from "./Components/AboutUs";
import Footer from "./Components/Footer";
import Testigos from "./Components/testigos";
import Productos from "./Components/Productos";


const Home = () => (
  <>
    <Navbar />
    <Hero />
    <PlansSection />
    <CardsSection />
    <AboutUs />
    <Testigos />
    <Productos/>
    <Footer />

  </>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminLogin />} />
      </Routes>
    </Router>
  );
};

export default App;
