import { Facebook, Twitter, Instagram, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import campaignLogo from "@/assets/ali65mb-black-removebg-preview.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log("Menu toggled:", !isOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToSection = (sectionId: string) => {
    const checkElement = () => {
      const element = document.getElementById(sectionId);
      if (element) {
        requestAnimationFrame(() => {
          const headerHeight = 150;
          const elementPosition =
            element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - headerHeight - 30;

          window.scrollTo({
            top: Math.max(0, offsetPosition),
            behavior: "smooth",
          });
        });
        return true;
      }
      return false;
    };

    if (!checkElement()) {
      let attempts = 0;
      const interval = setInterval(() => {
        attempts++;
        if (checkElement() || attempts > 10) {
          clearInterval(interval);
        }
      }, 50);
    }
  };

  const handleHomeClick = () => {
    if (window.location.pathname === "/") {
      scrollToTop();
    } else {
      window.location.href = "/";
    }
  };

  const handleAboutClick = () => {
    if (window.location.pathname === "/about") {
      scrollToTop();
    } else {
      window.location.href = "/about";
    }
  };

  const handleVolunteerClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);

    const scrollVolunteer = () => {
      scrollToSection("volunteer");
    };

    if (window.location.pathname !== "/") {
      window.location.href = "/";
      setTimeout(scrollVolunteer, 300);
    } else {
      setTimeout(scrollVolunteer, 100);
    }
  };
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-campaign-blue/75 backdrop-blur-sm texture-green">
      {/* Logo positioned absolutely in the middle of header */}
      {/* Mobile: Smaller, centered, inside header */}
      <div className="md:hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[60]">
        <img
          src={campaignLogo}
          alt="Ali for Saint Paul"
          className={`w-32 drop-shadow-lg relative ${isOpen ? "hidden" : ""}`}
          style={{ pointerEvents: "none" }}
        />
      </div>

      {/* Desktop: Centered in header */}
      <div
        className="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-[60]"
        style={{ top: "-12.42%" }}
      >
        <div
          className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/15 to-transparent rounded-full blur-3xl"
          style={{ transform: "scale(1.4)" }}
        />
        <img
          src={campaignLogo}
          alt="Ali for Saint Paul"
          className={`w-56 drop-shadow-lg relative ${isOpen ? "hidden" : ""}`}
          style={{ pointerEvents: "none" }}
        />
      </div>

      <div className="container flex items-center justify-between py-6">
        {/* Social Icons - Left (Desktop only) */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://www.tiktok.com/@aliforstp?_r=1&_t=ZP-92niVbCYWWF"
            className="text-campaign-cream hover:text-campaign-yellow transition-all duration-200 hover:scale-110 active:scale-95"
            aria-label="TictTok"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="text-campaign-cream hover:text-campaign-yellow transition-all duration-200 hover:scale-110 active:scale-95"
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com/aliforstp"
            className="text-campaign-cream hover:text-campaign-yellow transition-all duration-200 hover:scale-110 active:scale-95"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>

        {/* Navigation - Right (Desktop only) */}
        <nav className="hidden lg:flex items-center gap-6">
          {/* 1 - Link a Home */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleHomeClick();
            }}
            className="text-campaign-cream hover:text-campaign-yellow transition-colors duration-200 font-body text-sm uppercase tracking-wide"
          >
            Home
          </a>

          {/* 2 - Link a About */}
          <a
            href="/about"
            onClick={(e) => {
              e.preventDefault();
              handleAboutClick();
            }}
            className="text-campaign-cream hover:text-campaign-yellow transition-colors duration-200 font-body text-sm uppercase tracking-wide"
          >
            About
          </a>

          {/* 3 - Link a Volunteer */}
          <a
            href="/#volunteer"
            onClick={handleVolunteerClick}
            className="text-campaign-cream hover:text-campaign-yellow transition-colors duration-200 font-body text-sm uppercase tracking-wide"
          >
            Volunteer
          </a>

          <a href="https://secure.actblue.com/donate/alifor65b">
            <Button
              variant="donate"
              size="sm"
              className="active:scale-95 transition-all duration-200"
            >
              Donate
            </Button>
          </a>
        </nav>

        {/* Hamburger Menu Button (Mobile) */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-campaign-cream hover:text-campaign-yellow transition-all duration-200 active:scale-95"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6 animate-in fade-in duration-200" />
          ) : (
            <Menu className="w-6 h-6 animate-in fade-in duration-200" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="lg:hidden bg-campaign-blue/55 border-t border-campaign-cream/20 texture-green overflow-hidden"
          style={{
            animation: "slideDown 0.3s ease-out",
          }}
        >
          <div className="container py-4 flex flex-col gap-4">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(false);
                handleHomeClick();
              }}
              className="text-campaign-cream hover:text-campaign-yellow transition-colors duration-200 font-body text-sm uppercase tracking-wide py-2 opacity-0"
              style={{
                animation: "fadeInUp 0.4s ease-out 0.05s forwards",
              }}
            >
              Home
            </a>
            <a
              href="/about"
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(false);
                handleAboutClick();
              }}
              className="text-campaign-cream hover:text-campaign-yellow transition-colors duration-200 font-body text-sm uppercase tracking-wide py-2 opacity-0"
              style={{
                animation: "fadeInUp 0.4s ease-out 0.1s forwards",
              }}
            >
              About
            </a>
            <a
              href="/#volunteer"
              onClick={handleVolunteerClick}
              className="text-campaign-cream hover:text-campaign-yellow transition-colors duration-200 font-body text-sm uppercase tracking-wide py-2 opacity-0"
              style={{
                animation: "fadeInUp 0.4s ease-out 0.15s forwards",
              }}
            >
              Volunteer
            </a>
            <a href="https://secure.actblue.com/donate/alifor65b">
              <Button
                variant="donate"
                size="sm"
                className="w-full active:scale-95 transition-all duration-200 opacity-0"
                style={{
                  animation: "fadeInUp 0.4s ease-out 0.25s forwards",
                }}
              >
                Donate
              </Button>
            </a>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
