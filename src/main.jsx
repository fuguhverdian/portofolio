import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import 'remixicon/fonts/remixicon.css'
import Footer from './components/Footer.jsx'
import PreLoader from './components/PreLoader.jsx'
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { SpeedInsights } from "@vercel/speed-insights/next"
AOS.init();


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PreLoader/>
    <Navbar/>
    <div className="min-h-screen bg-[#020617] text-white px-4 sm:px-8 lg:px-10">
    <App />
    <Footer/>
    </div>
    <SpeedInsights />
  </StrictMode>,
)
