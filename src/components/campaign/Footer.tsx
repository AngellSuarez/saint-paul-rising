import { useState } from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) {
      toast({
        title: "You're on the list!",
        description: "Thanks for joining us. Together, we'll build a Saint Paul for all of us!",
      });
      setName("");
      setEmail("");
      setMobile("");
    }
  };

  return (
    <footer className="texture-green">
      {/* Signup Section */}
      <div className="container py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="font-display text-center lg:text-left">
            <span className="text-campaign-yellow text-4xl md:text-5xl">ALI</span>
            <span className="block text-campaign-cream text-sm md:text-base tracking-widest">FOR SAINT PAUL</span>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 flex-1 max-w-2xl w-full">
            <Input 
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-campaign-cream border-0 flex-1"
              required
            />
            <Input 
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-campaign-cream border-0 flex-1"
              required
            />
            <Input 
              type="tel"
              placeholder="Mobile #"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="bg-campaign-cream border-0 flex-1"
            />
            <Button variant="heroYellow" type="submit" className="whitespace-nowrap">
              Join Us &gt;
            </Button>
          </form>
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
