import { useState } from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import campaignLogo from "@/assets//ali65mb-black-removebg-preview.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (sectionId: string) => {
    const checkElement = () => {
      const element = document.getElementById(sectionId);
      if (element) {
        requestAnimationFrame(() => {
          const headerHeight = 150;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - headerHeight - 30;
          
          window.scrollTo({
            top: Math.max(0, offsetPosition),
            behavior: 'smooth'
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

  const handleAboutClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.location.pathname === '/about') {
      scrollToTop();
    } else {
      window.location.href = '/about';
    }
  };

  const handleVolunteerClick = (e: React.MouseEvent) => {
    e.preventDefault();

    const scrollVolunteer = () => {
      scrollToSection('volunteer');
    };

    if (window.location.pathname !== '/') {
      window.location.href = '/';
      setTimeout(scrollVolunteer, 300);
    } else {
      setTimeout(scrollVolunteer, 100);
    }
  };
  return (
    <footer className="texture-green">
      {/* Signup Section with white background */}
      <div className="bg-white/95 py-4 md:py-1">
        <div className="container">
          {/* Mobile: Logo left, Button right with iOS style */}
          <div className="flex md:hidden items-center justify-between w-full gap-4 px-4">
            {/* Logo - sin card */}
            <img 
              src={campaignLogo} 
              alt="Ali for Saint Paul" 
              className="h-24 w-auto flex-shrink-0"
            />

            {/* Button - iOS style card */}
            <div 
              className="backdrop-blur-xl bg-white/70 rounded-3xl p-4 border border-white/60 flex-shrink-0"
              style={{ 
                borderRadius: '1.5rem',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.08)'
              }}
            >
              <a href="/#volunteer" onClick={handleVolunteerClick} className="block">
                <Button 
                  variant="heroYellow" 
                  size="lg" 
                  className="rounded-full h-14 text-base font-semibold active:scale-[0.97] active:opacity-90 transition-all duration-200 hover:scale-[1.02]"
                  style={{ 
                    borderRadius: '9999px',
                    boxShadow: '0 4px 14px 0 rgba(0, 0, 0, 0.15)'
                  }}
                >
                  Join Us
                </Button>
              </a>
            </div>
          </div>

          {/* Desktop: Centered layout */}
          <div className="hidden md:flex md:flex-row items-center justify-center gap-8">
            {/* Logo */}
            <img 
              src={campaignLogo} 
              alt="Ali for Saint Paul" 
              className="h-40 w-auto"
            />

            {/* Button */}
            <a href="/#volunteer" onClick={handleVolunteerClick}>
              <Button variant="heroYellow" size="lg">
                Join Us
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-campaign-cream/20">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
            href="https://www.tiktok.com/@alifor65b?_r=1&_t=ZP-92rRqKSGxSh"
            className="text-campaign-cream hover:text-campaign-yellow transition-all duration-200 hover:scale-110 active:scale-95"
            aria-label="TikTok"
          >
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
            </svg>
          </a>
              <a
            href="#"
            className="text-campaign-cream hover:text-campaign-yellow transition-all duration-200 hover:scale-110 active:scale-95"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5" />
          </a>
              <a 
                href="https://www.instagram.com/alifor65b" 
                className="text-campaign-cream hover:text-campaign-yellow transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>

            {/* Links */}
            <div className="flex items-center gap-6 text-campaign-cream/80 font-body text-sm">
              <a href="https://www.alifor65b.org/">
                <span>ALIFOR65B.ORG</span>
              </a>
              <span>|</span>
              <a 
                href="/about" 
                onClick={handleAboutClick}
                className="hover:text-campaign-yellow transition-colors"
              >
                ABOUT
              </a>
              <span>|</span>
              <a 
                href="/#volunteer" 
                onClick={handleVolunteerClick}
                className="hover:text-campaign-yellow transition-colors"
              >
                VOLUNTEER
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
