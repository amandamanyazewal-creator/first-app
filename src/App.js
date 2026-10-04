import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Skills from "./pages/Skills.jsx";
import Projects from "./pages/Projects.jsx";
import Services from "./pages/Services.jsx";
import Experience from "./pages/Experience.jsx";
import Contact from "./pages/Contact.jsx";
import Gallery from "./pages/Gallery.jsx";
import Login from "./pages/Login.jsx";
import Account from "./pages/Account.jsx";
import Logout from "./pages/Logout.jsx";
import NotFound from "./pages/NotFound.jsx";
import SoundGallery from "./pages/SoundGallery.jsx";

import "./App.css";

export default function App() {
  return (
    <div className="site">

      <ScrollToTop />

      <Navbar />

      <main className="site-main">
        <Routes>

          {/* Main pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/sounds" element={<SoundGallery />} />

          {/* Authentication pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/account" element={<Account />} />
          <Route path="/logout" element={<Logout />} />

          {/* 404 page */}
          <Route path="*" element={<NotFound />} />

        </Routes>
      </main>

      <Footer />

    </div>
  );
}