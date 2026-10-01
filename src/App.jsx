import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Courses from './components/Courses';
import LearningPaths from './components/LearningPaths';
import ProGrowth from './components/ProGrowth';
import CTABanner from './components/CTABanner';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';

function Home() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Partners />
      <Courses />
      <LearningPaths />
      <ProGrowth />
      <CTABanner />
      <Testimonials />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
