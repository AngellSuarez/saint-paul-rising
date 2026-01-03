import { useState } from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import campaignLogo from "@/assets/image-removebg-preview.png";

const Footer = () => {
  return (
    <footer className="texture-green">
      {/* Signup Section with white background */}
      <div className="bg-white/95 py-1">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {/* Logo */}
            <img 
              src={campaignLogo} 
              alt="Ali for Saint Paul" 
              className="h-32 md:h-40 w-auto"
            />

            {/* Button */}
            <a href="#volunteer">
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
                href="#" 
                className="text-campaign-cream hover:text-campaign-yellow transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="text-campaign-cream hover:text-campaign-yellow transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="text-campaign-cream hover:text-campaign-yellow transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>

            {/* Links */}
            <div className="flex items-center gap-6 text-campaign-cream/80 font-body text-sm">
              <span>ALIFORSTP.ORG</span>
              <span>|</span>
              <a href="#about" className="hover:text-campaign-yellow transition-colors">ABOUT</a>
              <span>|</span>
              <a href="#volunteer" className="hover:text-campaign-yellow transition-colors">VOLUNTEER</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
