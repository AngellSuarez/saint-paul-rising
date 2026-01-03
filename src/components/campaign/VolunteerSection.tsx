import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const VolunteerSection = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState('');
  const [ZIPCode, setZIPCode] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (firstName && lastName && phoneNumber && ZIPCode && email) {
      toast({
        title: "Welcome to the team!",
        description: "Thanks for signing up to volunteer. We'll be in touch soon!",
      });
      setEmail("");
      setFirstName("");
      setLastName("");
      setPhoneNumber("");
      setZIPCode("");
    }
  };

  return (
    <section id="volunteer" className="bg-campaign-green py-20">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          {/* Headline */}
          <h2 className="font-display text-campaign-cream text-4xl md:text-5xl mb-4">
            WE NEED <span className="text-campaign-yellow">VOLUNTEERS!</span>
          </h2>
          
          {/* Subtext */}
          <p className="font-body text-campaign-cream text-lg mb-8">
            Get involved today! Sign up to volunteer and join our grassroots movement for a better Saint Paul.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 max-w-xl mx-auto">
            <Input 
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="bg-card border-foreground/20"
              required
            />
             <Input 
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="bg-card border-foreground/20"
              required
            />
            <Input 
              type="text"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="bg-card border-foreground/20"
              required
            />
            <Input 
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-card border-foreground/20"
              required
            />
            <Input 
              type="text"
              placeholder="ZIP Code"
              value={ZIPCode}
              onChange={(e) => setZIPCode(e.target.value)}
              className="bg-card border-foreground/20 col-span-2"
              required
            />
            <Button variant="heroYellow" size="lg" type="submit" className="col-span-2 w-full">
              Join the Team
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default VolunteerSection;
