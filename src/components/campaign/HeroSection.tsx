import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import candidatePortrait from "@/assets/persona-16-9.png";
import sunburstBg from "@/assets/sunburst-bg.jpg";
import campaignLogo from "@/assets/campaign-logo.png";

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen pt-20 overflow-hidden bg-campaign-cream"
    >
      {/* Logo por encima del header para que se vea completamente */}
      {/* White Background - Left Side (desktop) */}
      <div 
        className="hidden md:block absolute left-0 top-0 h-full z-0 overflow-hidden"
        style={{ top: '5rem', height: 'calc(100vh - 5rem)', width: '55%' }}
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
        className="hidden md:block absolute right-0 top-0 h-full overflow-hidden z-0"
        style={{ top: '5rem', height: 'calc(100vh - 5rem)', width: '45%' }}
      >
        <img 
          src={candidatePortrait} 
          alt="Ali - Candidate for Saint Paul" 
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Desktop Content - Left Side */}
      <div className="hidden md:flex absolute left-0 top-0 h-full z-10 items-center w-[55%]" style={{ top: '5rem', height: 'calc(100vh - 5rem)' }}>
        <div className="pl-8 md:pl-12 lg:pl-16 w-full h-full flex flex-col justify-center py-8 md:py-12">
          {/* Left Column - Text & CTAs - Aligned left */}
          <div className="flex flex-col gap-8 justify-center relative z-10 h-full">
            {/* Decorative element before headline */}
            <div className="flex items-center gap-4 mb-2">
              <div className="w-12 h-1 bg-gradient-to-r from-campaign-green to-campaign-yellow" />
              <div className="w-2 h-2 bg-campaign-blue rounded-full" />
            </div>
            
            {/* Headline */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl leading-tight text-left font-bold ">
              <span 
                className="text-campaign-blue block" 
                style={{ textShadow: '2px 2px 0 hsl(45 90% 55% / 0.5)'}}
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
                className="text-campaign-blue block italic" 
                style={{ textShadow: '2px 2px 0 hsl(45 90% 55% / 0.5)' }}
              >
                FUTURE
              </span>
              <span 
                className="text-campaign-green block font-black" 
                style={{ textShadow: '3px 3px 0 hsl(45 90% 55% / 0.6)' }}
              >
                FOR ALL OF US.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="font-body text-lg md:text-xl lg:text-2xl xl:text-3xl max-w-2xl text-foreground leading-relaxed text-left font-semibold">
              Join our grassroots movement fighting for bold, progressive change for the District 65B.
            </p>

            {/* Decorative divider */}
            <div className="flex items-center gap-3 my-0">
              <div className="w-12 h-1 bg-gradient-to-r from-campaign-yellow to-campaign-green" />
              <div className="w-2 h-2 bg-campaign-blue rounded-full" />
              <div className="w-24 h-px bg-gradient-to-r from-campaign-yellow to-transparent" />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-2 mb-5">
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
              <a href="https://secure.actblue.com/donate/alifor65b">
                <Button variant="heroYellow" size="lg">
                  Make a Donation
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Design - iOS Style Modern Enhanced */}
      <div className="md:hidden relative z-10 pt-4 pb-8 px-4">
        {/* Background with subtle gradient - iOS style */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-campaign-cream via-campaign-cream/80 to-transparent" />
          {/* Floating orbs - iOS style */}
          <div className="absolute top-32 right-4 w-32 h-32 bg-campaign-yellow/8 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute bottom-48 left-4 w-24 h-24 bg-campaign-green/8 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
        </div>

        {/* Text Content - iOS glassmorphism style */}
        <div 
          className="relative backdrop-blur-xl bg-white/70 rounded-3xl p-8 mb-4 shadow-2xl border border-white/60 overflow-hidden"
          style={{ 
            borderRadius: '1.5rem',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
          }}
        >
          {/* Subtle gradient overlay */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-campaign-yellow/5 to-transparent rounded-full blur-2xl" />
          
          {/* Decorative element before headline - minimal iOS style */}
          <div className="flex items-center gap-2 mb-5 relative z-10">
            <div className="w-8 h-0.5 bg-gradient-to-r from-campaign-green to-campaign-yellow rounded-full" />
            <div className="w-1.5 h-1.5 bg-campaign-blue rounded-full shadow-sm" />
          </div>

          {/* Headline - iOS style clean */}
          <h1 className="font-display text-3xl sm:text-4xl leading-tight mb-5 font-bold relative z-10">
            <span 
              className="text-campaign-blue block" 
              style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.05)' }}
            >
              LET'S
            </span>
            <span 
              className="text-campaign-yellow block font-black" 
              style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.05)' }}
            >
              BUILD A
            </span>
            <span 
              className="text-campaign-blue block" 
              style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.05)' }}
            >
              SAINT PAUL
            </span>
            <span 
              className="text-campaign-green block font-black" 
              style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.05)' }}
            >
              FOR ALL OF US.
            </span>
          </h1>

          {/* Subheadline - iOS style spacing */}
          <p className="font-body text-base sm:text-lg text-foreground/80 leading-relaxed relative z-10">
            Join our grassroots movement fighting for bold, progressive change for Saint Paul.
          </p>
        </div>

        {/* Image - iOS style with depth */}
        <div className="mb-4 relative">
          <div 
            className="relative rounded-3xl overflow-hidden shadow-2xl"
            style={{ 
              borderRadius: '1.5rem',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.08)'
            }}
          >
            <img 
              src={candidatePortrait} 
              alt="Ali - Candidate for Saint Paul" 
              className="w-full h-auto object-cover"
            />
            {/* Subtle vignette effect - iOS style */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* CTA Buttons - iOS style floating buttons with icon space */}
        <div 
          className="relative backdrop-blur-xl bg-white/70 rounded-3xl p-6 shadow-2xl border border-white/60 overflow-hidden"
          style={{ 
            borderRadius: '1.5rem',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
          }}
        >
          {/* Subtle gradient overlay */}
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-campaign-green/5 to-transparent rounded-full blur-xl" />
          
          <div className="flex flex-col gap-3 relative z-10">
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
              <Button 
                variant="hero" 
                size="lg" 
                className="w-full rounded-full h-14 text-base font-semibold shadow-lg active:scale-[0.97] active:opacity-90 transition-all duration-200 hover:shadow-xl hover:scale-[1.02]"
                style={{ 
                  borderRadius: '9999px',
                  boxShadow: '0 4px 14px 0 rgba(0, 0, 0, 0.15)'
                }}
              >
                Sign Up to Volunteer
              </Button>
            </a>
            <a href="">
              <Button 
                variant="heroYellow" 
                size="lg" 
                className="w-full rounded-full h-14 text-base font-semibold shadow-lg active:scale-[0.97] active:opacity-90 transition-all duration-200 hover:shadow-xl hover:scale-[1.02]"
                style={{ 
                  borderRadius: '9999px',
                  boxShadow: '0 4px 14px 0 rgba(0, 0, 0, 0.15)'
                }}
              >
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
