
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

const navitems = [
  {name: "Home", href: "#hero"},
  {name: "Skills", href: "#skills"},
  {name: "Projects", href: "#projects"},
  {name: "About", href: "#about"},
  {name: "contact", href: "#contact"},
]

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  
  return (
    <nav className={cn("fixed w-full z-40 transition-all duration-300",
      isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
    )}>

      <div className="container flex items-center justify-between">
        <a href="" className="text-xl font-bold text-primary flex items-center">
          <span className="relative z-50">
            <span className="text-glow text-foreground"> Jacks</span> Portfolio
          </span>
          
        </a>
      </div>


    </nav>
  )
}

export default Navbar