import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import candidatePortrait from "@/assets/persona-16-9.png";
import sunburstBg from "@/assets/sunburst-bg.jpg";
import campaignLogo from "@/assets/campaign-logo.png";

const HeroSection = () => {
  return (
    <section 
      className="relative overflow-hidden bg-campaign-cream"
      style={{ minHeight: 'calc(100vh - 5rem)', paddingTop: '5rem' }}
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
      {/* White Background - Left Side (desktop) */}
      <div 
        className="hidden md:block absolute left-0 top-0 bottom-0 z-0 overflow-hidden"
        style={{ top: '5rem', width: '55%' }}
      >
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white/95 to-campaign-cream/90" />
        
        {/* Decorative accent line - thicker */}
        <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-campaign-green via-campaign-yellow to-campaign-blue" />
        
        {/* Decorative geometric shapes */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-campaign-yellow/10 rounded-full blur-3xl" />
        <div className="absolute bottom-32 right-20 w-24 h-24 bg-campaign-green/10 rounded-full blur-2xl" />
        <div className="absolute top-1/2 right-8 w-16 h-16 bg-campaign-blue/10 rounded-full blur-xl" />
        
        {/* Decorative lines pattern */}
        <div className="absolute top-0 right-0 w-32 h-full opacity-5">
          <div className="absolute top-0 right-0 w-px h-full bg-campaign-blue" />
          <div className="absolute top-0 right-8 w-px h-full bg-campaign-green" />
          <div className="absolute top-0 right-16 w-px h-full bg-campaign-yellow" />
        </div>
        
        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-24 h-24 border-t-4 border-r-4 border-campaign-yellow/20" />
        <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-campaign-green/20" />
      </div>

      {/* Background Image - Right Side (desktop) */}
      <div 
        className="hidden md:block absolute right-0 top-0 bottom-0 overflow-hidden z-0"
        style={{ top: '5rem', width: '45%' }}
      >
        <img 
          src={candidatePortrait} 
          alt="Ali - Candidate for Saint Paul" 
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Desktop Content - Left Side */}
      <div className="hidden md:flex absolute left-0 top-0 bottom-0 z-10 items-center w-[55%]" style={{ top: '5rem' }}>
        <div className="pl-8 md:pl-12 lg:pl-16 w-full flex flex-col justify-center py-12">
          {/* Left Column - Text & CTAs - Aligned left */}
          <div className="flex flex-col gap-8 justify-center relative z-10">
            {/* Decorative element before headline */}
            <div className="flex items-center gap-4 mb-2">
              <div className="w-12 h-1 bg-gradient-to-r from-campaign-green to-campaign-yellow" />
              <div className="w-2 h-2 bg-campaign-blue rounded-full" />
            </div>
            
            {/* Headline */}
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight text-left font-bold">
              <span 
                className="text-campaign-blue block" 
                style={{ textShadow: '2px 2px 0 hsl(45 90% 55% / 0.5)' }}
              >
                LET'S
              </span>
              <span 
                className="text-campaign-yellow block font-black" 
                style={{ textShadow: '3px 3px 0 hsl(200 100% 40% / 0.3)' }}
              >
                BUILD A
              </span>
              <span 
                className="text-campaign-blue block" 
                style={{ textShadow: '2px 2px 0 hsl(45 90% 55% / 0.5)' }}
              >
                SAINT PAUL
              </span>
              <span 
                className="text-campaign-green block font-black" 
                style={{ textShadow: '3px 3px 0 hsl(45 90% 55% / 0.6)' }}
              >
                FOR ALL OF US.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="font-body text-xl md:text-2xl lg:text-3xl max-w-2xl text-foreground leading-relaxed text-left font-semibold">
              Join our grassroots movement fighting for bold, progressive change for Saint Paul.
            </p>

            {/* Decorative divider */}
            <div className="flex items-center gap-3 my-4">
              <div className="w-12 h-1 bg-gradient-to-r from-campaign-yellow to-campaign-green" />
              <div className="w-2 h-2 bg-campaign-blue rounded-full" />
              <div className="w-24 h-px bg-gradient-to-r from-campaign-yellow to-transparent" />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <a href="/#volunteer" onClick={(e) => {
                e.preventDefault();
                const scrollToVolunteer = () => {
                  const element = document.getElementById('volunteer');
                  if (element) {
                    const headerHeight = 150;
                    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = elementPosition - headerHeight - 30;
                    
                    window.scrollTo({
                      top: Math.max(0, offsetPosition),
                      behavior: 'smooth'
                    });
                  }
                };
                scrollToVolunteer();
              }}>
                <Button variant="hero" size="lg">
                  Sign Up to Volunteer
                </Button>
              </a>
              <a href="">
                <Button variant="heroYellow" size="lg">
                  Make a Donation
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Design - Completely Different */}
      <div className="md:hidden relative z-10 pt-8 pb-8 px-4">
        {/* Image First */}
        <div className="mb-8">
          <img 
            src={candidatePortrait} 
            alt="Ali - Candidate for Saint Paul" 
            className="w-full h-auto rounded-2xl shadow-strong object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="bg-white/95 rounded-2xl p-6 shadow-strong">
          {/* Headline */}
          <h1 className="font-display text-3xl sm:text-4xl leading-tight mb-4">
            <span className="text-campaign-blue block">
              LET'S BUILD A
            </span>
            <span className="text-campaign-blue block">
              SAINT PAUL
            </span>
            <span className="text-campaign-green block">
              FOR ALL OF US.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="font-body text-base sm:text-lg text-foreground leading-relaxed mb-6">
            Join our grassroots movement fighting for bold, progressive change for Saint Paul.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3">
            <a href="/#volunteer" onClick={(e) => {
              e.preventDefault();
              const scrollToVolunteer = () => {
                const element = document.getElementById('volunteer');
                if (element) {
                  const headerHeight = 100;
                  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                  const offsetPosition = elementPosition - headerHeight - 30;
                  
                  window.scrollTo({
                    top: Math.max(0, offsetPosition),
                    behavior: 'smooth'
                  });
                }
              };
              scrollToVolunteer();
            }}>
              <Button variant="hero" size="lg" className="w-full">
                Sign Up to Volunteer
              </Button>
            </a>
            <a href="">
              <Button variant="heroYellow" size="lg" className="w-full">
                Make a Donation
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
