import { Facebook, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import campaignLogo from "@/assets/campaign-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-campaign-blue/95 backdrop-blur-sm">
      <div className="container flex items-center justify-between py-2">
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
        <Link to="/">
          <img 
            src={campaignLogo} 
            alt="Ali for Saint Paul" 
            className="h-12 md:h-14 w-auto"
          />
        </Link>

        {/* Navigation - Right */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-campaign-cream hover:text-campaign-yellow transition-colors font-body text-sm uppercase tracking-wide">
            Home
          </Link>
          <Link to="/about" className="text-campaign-cream hover:text-campaign-yellow transition-colors font-body text-sm uppercase tracking-wide">
            About
          </Link>
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
