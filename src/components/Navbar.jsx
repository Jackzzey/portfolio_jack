
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react"

const navitems = [
  {name: "Home", href: "#hero"},
  {name: "Skills", href: "#skills"},
  {name: "Projects", href: "#projects"},
  {name: "About", href: "#about"},
  {name: "Contact", href: "#contact"},
]

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
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
        <a href="#hero" className="text-xl font-bold text-primary flex items-center">
          <span  className="relative z-50">
            <span className="text-glow text-foreground"> Jacks</span> Portfolio
          </span>
          
        </a>

        {/* desktop version */}
        <div className="hidden md:flex flex-row items-center space-x-10 absolute left-1/4 translate-x-1/2">
          {navitems.map((item, key) => (
            <a
              className={cn(
                "flex flex-col items-left text-foreground-4xl hover:text-primary transition-colors duration-300"
              )}
              key={key}
              href={item.href}
            >
              {item.name}
            </a>
          ))}
        </div>

        
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)} className="md:hidden p-2 text-foreground z-50"
        > {isMenuOpen ? <X size={24}/> : <Menu size={24}/>} </button>

        <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
          "transition-all duration-300 md:hidden",
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}>

          <div className="flex flex-col space-y-8 text-xl">
            {navitems.map((item,key) => (
              <a 
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
              key={key} 
              href={item.href} 
              onClick={() => setIsMenuOpen(false)}
              >{item.name}
              </a>
            ))}
          </div>
        </div>
      </div>


    </nav>
  )
}

export default Navbar