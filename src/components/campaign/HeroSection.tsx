import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import candidatePortrait from "@/assets/candidate-portrait.jpg";
import sunburstBg from "@/assets/sunburst-bg.jpg";
import campaignLogo from "@/assets/campaign-logo.png";

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen pt-20 overflow-hidden"
      style={{
        backgroundImage: `url(${sunburstBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'bottom center',
      }}
    >
      {/* Content Container */}
      <div className="container relative z-10 grid md:grid-cols-2 gap-8 items-center min-h-[calc(100vh-5rem)] py-12">
        {/* Left Column - Text & CTAs */}
        <div className="flex flex-col gap-6 animate-slide-up">
          {/* Subtle white background with gradient fade */}
          <div className="relative">
            <div className="absolute inset-0 -m-6 bg-gradient-to-r from-white/90 via-white/70 to-transparent rounded-lg blur-sm" />
            <div className="relative z-10 flex flex-col gap-6">
              {/* Logo Image */}
              <img 
                src={campaignLogo} 
                alt="Ali for Saint Paul" 
                className="w-64 md:w-80 h-auto"
              />

              {/* Headline */}
              <h1 className="font-display text-3xl md:text-5xl lg:text-6xl leading-tight">
                <span className="text-campaign-blue" style={{ textShadow: '2px 2px 0 hsl(45 90% 55% / 0.5)' }}>LET'S BUILD A</span><br />
                <span className="text-campaign-blue" style={{ textShadow: '2px 2px 0 hsl(45 90% 55% / 0.5)' }}>SAINT PAUL</span><br />
                <span className="text-campaign-green" style={{ textShadow: '2px 2px 0 hsl(45 90% 55% / 0.6)' }}>FOR ALL OF US.</span>
              </h1>

              {/* Subheadline */}
              <p className="font-body text-lg md:text-xl max-w-md text-foreground">
                Join our grassroots movement fighting for bold, progressive change for Saint Paul.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="lg">
              Sign Up to Volunteer
            </Button>
            <Button variant="heroYellow" size="lg">
              Make a Donation
            </Button>
          </div>

          {/* Email Signup */}
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mt-2">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-campaign-cream border-campaign-blue/30"
            />
            <Button variant="action" className="whitespace-nowrap">
              Join Us
            </Button>
          </div>
        </div>

        {/* Right Column - Candidate Image */}
        <div className="flex justify-center md:justify-end" style={{ animationDelay: '0.2s' }}>
          <div className="relative">
            <img 
              src={candidatePortrait} 
              alt="Ali - Candidate for Saint Paul" 
              className="w-full max-w-md rounded-sm shadow-strong object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
