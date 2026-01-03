import { Button } from "@/components/ui/button";

const CaucusBanner = () => {
  return (
    <section className="texture-green py-12">
      <div className="container text-center">
        <h2 className="font-display text-campaign-cream text-2xl md:text-4xl lg:text-5xl leading-tight">
          PRECINCT CAUCUS IS <span className="text-campaign-yellow">FEBRUARY 3RD!</span>
        </h2>
        <p className="font-display text-campaign-cream text-xl md:text-2xl mt-2">
          SIGN UP AND MAKE YOUR VOICE HEARD!
        </p>
        <Button variant="heroYellow" size="lg" className="mt-6">
          Learn How to Caucus
        </Button>
      </div>
    </section>
  );
};

export default CaucusBanner;
