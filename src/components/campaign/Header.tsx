import { Facebook, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-campaign-blue/95 backdrop-blur-sm">
      <div className="container flex items-center justify-between py-3">
        {/* Social Icons - Left */}
        <div className="flex items-center gap-3">
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

        {/* Logo - Center */}
        <div className="font-display text-campaign-cream">
          <span className="text-campaign-yellow text-2xl md:text-3xl">ALI</span>
          <span className="block text-xs md:text-sm tracking-widest -mt-1">FOR SAINT PAUL</span>
        </div>

        {/* Navigation - Right */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-campaign-cream hover:text-campaign-yellow transition-colors font-body text-sm uppercase tracking-wide">
            Home
          </a>
          <a href="#about" className="text-campaign-cream hover:text-campaign-yellow transition-colors font-body text-sm uppercase tracking-wide">
            About
          </a>
          <a href="#volunteer" className="text-campaign-cream hover:text-campaign-yellow transition-colors font-body text-sm uppercase tracking-wide">
            Volunteer
          </a>
          <a href="#" className="text-campaign-cream hover:text-campaign-yellow transition-colors font-body text-sm uppercase tracking-wide">
            Events
          </a>
          <Button variant="donate" size="sm">
            Donate
          </Button>
        </nav>

        {/* Mobile Donate Button */}
        <div className="md:hidden">
          <Button variant="donate" size="sm">
            Donate
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
