import { Facebook, Twitter, Instagram, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import campaignLogo from "@/assets/logo-fondo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log("Menu toggled:", !isOpen);
  };
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-campaign-blue/75 backdrop-blur-sm">
      {/* Logo positioned absolutely in the middle of header */}
      <div 
        className="absolute top-1/2 transform -translate-y-1/2 z-[60]"
        style={{
          left: '38%',
          '@media (max-width: 500px)': {
            left: 'auto',
            right: '1rem'
          }
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-transparent rounded-full blur-3xl" style={{ transform: 'scale(1.4)' }}/>
        <br />
        <img
          src={campaignLogo}
          alt="Ali for Saint Paul"
          className={`w-56 md:w-44 drop-shadow-lg relative ${isOpen ? 'hidden' : ''}`}
          style={{ pointerEvents: 'none' }}
        />
      </div>
      
      <div className="container flex items-center justify-between py-2">
        {/* Social Icons - Left (Desktop only) */}
        <div className="hidden md:flex items-center gap-3">
          <a 
            href="#" 
            className="text-campaign-cream hover:text-campaign-yellow transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a 
            href="#" 
            className="text-campaign-cream hover:text-campaign-yellow transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a 
            href="#" 
            className="text-campaign-cream hover:text-campaign-yellow transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>

        {/* Navigation - Right (Desktop only) */}
       <nav className="hidden lg:flex items-center gap-6">
  {/* 1 - Link a Home */}
  <Link to="/" className="text-campaign-cream hover:text-campaign-yellow transition-colors font-body text-sm uppercase tracking-wide">
    Home
  </Link>

  {/* 2 - Link a About (Siempre lleva a /about) */}
  <Link to="/about" className="text-campaign-cream hover:text-campaign-yellow transition-colors font-body text-sm uppercase tracking-wide">
    About
  </Link>

  {/* 3 - Link a Volunteer (Lleva a la Home + Ancla) */}
  {/* Usamos Link en lugar de <a> para que React Router maneje la navegación correctamente */}
  <Link to="/#volunteer" className="text-campaign-cream hover:text-campaign-yellow transition-colors font-body text-sm uppercase tracking-wide">
    Volunteer
  </Link>

  <a href="#" className="text-campaign-cream hover:text-campaign-yellow transition-colors font-body text-sm uppercase tracking-wide">
    Events
  </a>

  <Button variant="donate" size="sm">
    Donate
  </Button>
</nav>

        {/* Hamburger Menu Button (Mobile) */}
        <button 
          onClick={toggleMenu}
          className="lg:hidden text-campaign-cream hover:text-campaign-yellow transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-campaign-blue/55 border-t border-campaign-cream/20">
          <div className="container py-4 flex flex-col gap-4">
            <Link 
              to="/" 
              onClick={() => setIsOpen(false)}
              className="text-campaign-cream hover:text-campaign-yellow transition-colors font-body text-sm uppercase tracking-wide py-2"
            >
              Home
            </Link>
            <Link 
              to="/about"
              onClick={() => setIsOpen(false)}
              className="text-campaign-cream hover:text-campaign-yellow transition-colors font-body text-sm uppercase tracking-wide py-2"
            >
              About
            </Link>
            <Link 
              to="/#volunteer"
              onClick={() => setIsOpen(false)}
              className="text-campaign-cream hover:text-campaign-yellow transition-colors font-body text-sm uppercase tracking-wide py-2"
            >
              Volunteer
            </Link>
            <a 
              href="#" 
              className="text-campaign-cream hover:text-campaign-yellow transition-colors font-body text-sm uppercase tracking-wide py-2"
            >
              Events
            </a>
            <Button variant="donate" size="sm" className="w-full">
              Donate
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
