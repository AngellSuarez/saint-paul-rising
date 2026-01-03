import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const VolunteerSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) {
      toast({
        title: "Welcome to the team!",
        description: "Thanks for signing up to volunteer. We'll be in touch soon!",
      });
      setName("");
      setEmail("");
    }
  };

  return (
    <section id="volunteer" className="texture-cream py-20">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          {/* Headline */}
          <h2 className="font-display text-campaign-blue text-4xl md:text-5xl mb-4">
            WE NEED <span className="text-campaign-green">VOLUNTEERS!</span>
          </h2>
          
          {/* Subtext */}
          <p className="font-body text-foreground text-lg mb-8">
            Get involved today! Sign up to volunteer and join our grassroots movement for a better Saint Paul.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-xl mx-auto">
            <Input 
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-card border-foreground/20 flex-1 w-full sm:w-auto"
              required
            />
            <Input 
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-card border-foreground/20 flex-1 w-full sm:w-auto"
              required
            />
            <Button variant="action" size="lg" type="submit" className="w-full sm:w-auto">
              Join the Team
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default VolunteerSection;
