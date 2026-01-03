import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import candidatePortrait from "@/assets/candidate-portrait.jpg";
import sunburstBg from "@/assets/sunburst-bg.jpg";
import campaignLogo from "@/assets/campaign-logo.png";

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen pt-20 overflow-hidden bg-campaign-cream"
    >
      {/* Logo por encima del header para que se vea completamente */}
      <div className="absolute top-0 left-[38%] transform -translate-x-1/2 z-[60]" style={{ marginTop: '-2.5rem' }}>
        <img
          src={campaignLogo}
          alt="Ali for Saint Paul"
          className="w-72 md:w-96 drop-shadow-lg"
          style={{ pointerEvents: 'none' }}
        />
      </div>
      {/* Content Container */}
      <div className="container relative z-10 grid md:grid-cols-2 gap-8 items-stretch min-h-[calc(100vh-5rem)] py-12">
        {/* Left Column - Text & CTAs */}
        <div className="flex flex-col gap-6 animate-slide-up justify-center">

          {/* Subtle white background with gradient fade - Text only */}
          <div className="relative">
            <div className="absolute inset-1 -m-5 bg-gradient-to-r from-white/30 via-white/30 to-transparent rounded-3xl blur-sm" />
            <div className="relative z-9 flex flex-col gap-6">
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
          <div className="flex flex-wrap gap-4 mt-[3.5rem]">
            <Button variant="hero" size="lg">
              Sign Up to Volunteer
            </Button>
            <Button variant="heroYellow" size="lg">
              Make a Donation
            </Button>
          </div>

          {/* Email Signup */}
        {/* <div className="flex flex-col sm:flex-row gap-3 max-w-md mt-2">
          <Input 
            type="email" 
            placeholder="Enter your email" 
            className="bg-campaign-cream border-campaign-blue/30"
          />
          <Button variant="action" className="whitespace-nowrap">
            Join Us
          </Button>
        </div> */}
      </div>

        {/* Right Column - Candidate Image */}
        <div className="flex justify-center md:justify-end items-stretch" style={{ animationDelay: '0.4s' }}>
          <div className="relative w-full h-full md:translate-x-8">
            <img 
              src={candidatePortrait} 
              alt="Ali - Candidate for Saint Paul" 
              className="w-full h-full max-w-md rounded-xl shadow-strong object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
