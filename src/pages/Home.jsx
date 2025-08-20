import { useEffect, useState } from 'react'
import Lanyard from '../components/Lanyard'
import StarBackground from '../components/StarBackground'
import ThemeToggle from '../components/ThemeToggle'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutMe from '../components/AboutMe'
import Skills from '../components/Skills'

function Home() {
  const [isMobile, setIsMobile] = useState(null)
  
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth > 768);
    
    handleResize();
    window.addEventListener("resize",handleResize)

    return () => window.removeEventListener("resize", handleResize)
      
  }, [])
  
  
  return (
    <div className='min-h-screen text-foreground overflow-hidden'>
      {/* Theme toggle */}
      <ThemeToggle />
      {/* Background Effects */}
      <StarBackground />
      {/*  */}
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      {isMobile ? <Lanyard /> : null}
      <main>
        <HeroSection />
        
      </main>
      <AboutMe />
      <Skills />
      
      
      
      {/* Footer */}
      {/* Lanyard */}
    </div>
  )
}

export default Home