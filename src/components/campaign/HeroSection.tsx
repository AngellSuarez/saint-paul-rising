import { Button } from "@/components/ui/button";
import candidatePortrait from "@/assets/alipodio.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-20 overflow-hidden bg-campaign-cream">
      {/* White Background - Left Side (desktop) */}
      <div
        className="hidden md:block absolute left-0 top-0 h-full z-0 overflow-hidden"
        style={{ top: "5rem", height: "calc(100vh - 5rem)", width: "55%" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white/95 to-campaign-cream/90" />
        <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-campaign-green via-campaign-yellow to-campaign-blue" />

        <div className="absolute top-20 right-10 w-32 h-32 bg-campaign-yellow/10 rounded-full blur-3xl" />
        <div className="absolute bottom-32 right-20 w-24 h-24 bg-campaign-green/10 rounded-full blur-2xl" />
        <div className="absolute top-1/2 right-8 w-16 h-16 bg-campaign-blue/10 rounded-full blur-xl" />

        <div className="absolute top-0 right-0 w-32 h-full opacity-5">
          <div className="absolute top-0 right-0 w-px h-full bg-campaign-blue" />
          <div className="absolute top-0 right-8 w-px h-full bg-campaign-green" />
          <div className="absolute top-0 right-16 w-px h-full bg-campaign-yellow" />
        </div>

        <div className="absolute top-0 right-0 w-24 h-24 border-t-4 border-r-4 border-campaign-yellow/20" />
        <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-campaign-green/20" />
      </div>

      {/* Right Side Image (desktop) */}
      <div
        className="hidden md:block absolute right-0 top-0 h-full z-0 overflow-hidden"
        style={{ top: "5rem", height: "calc(100vh - 5rem)", width: "45%" }}
      >
        <div className="absolute inset-0 bg-campaign-cream/50" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="overflow-hidden shadow-2xl w-[85%] aspect-[4/5]"
            style={{
              borderRadius: "2.5rem",
              maxWidth: "600px",
              maxHeight: "750px",
            }}
          >
            <img
              src={candidatePortrait}
              alt="Ali - Candidate for Saint Paul"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Desktop Content */}
      <div
        className="hidden md:flex absolute left-0 top-0 h-full z-10 items-center w-[55%]"
        style={{ top: "5rem", height: "calc(100vh - 5rem)" }}
      >
        <div className="pl-8 w-full h-full flex flex-col justify-center">
          <div className="flex flex-col gap-6">
            <h1 className="font-display text-4xl lg:text-6xl leading-tight font-bold">
              <span className="text-campaign-blue block">A NEW</span>
              <span className="text-campaign-blue block italic">
                GENERATION
              </span>
              <span className="text-campaign-yellow block font-black">
                STEPPING UP
              </span>
            </h1>

            <p className="font-body text-lg lg:text-xl max-w-xl font-semibold">
              Join our grassroots movement fighting for bold, progressive change
              for our community in District 65B.
            </p>

            <div className="flex gap-4 mt-6">
              <a href="/#volunteer">
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

      {/* Mobile */}
      <div className="md:hidden px-4 pb-8 pt-6">
        <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-2xl mb-4">
          <h1 className="text-3xl font-bold leading-tight mb-4 font-display">
            <span className="block text-campaign-blue">A NEW</span>
            <span className="block text-campaign-blue italic">GENERATION</span>
            <span className="block text-campaign-yellow font-black">
              STEPPING UP
            </span>
          </h1>

          <p className="text-base font-semibold">
            Join our grassroots movement fighting for bold, progressive change
            for our community in District 65B.
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-2xl mb-4">
          <img
            src={candidatePortrait}
            alt="Ali - Candidate for Saint Paul"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-2xl">
          <div className="flex flex-col gap-3">
            <a href="/#volunteer">
              <Button variant="hero" size="lg" className="w-full rounded-full">
                Sign Up to Volunteer
              </Button>
            </a>
            <a href="https://secure.actblue.com/donate/alifor65b">
              <Button
                variant="heroYellow"
                size="lg"
                className="w-full rounded-full"
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
