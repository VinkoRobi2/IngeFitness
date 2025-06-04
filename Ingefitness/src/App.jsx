import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import CardsSection from "./Components/CardsSection";
import PlansSection from "./Components/Planes";
import AdminLogin from "./Components/AdminLogin";   
//import AdminPanel from "./pages/AdminPanel";  


/*
        <Route path="/admin/panel" element={<AdminPanel />} 
*/

const Home = () => (
  <>
    <Navbar />
    <Hero />
    <PlansSection />
    <CardsSection />
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
