import { Button } from "@/components/ui/button";
import communityPhoto from "@/assets/community-photo.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="bg-card py-20">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="order-2 md:order-1">
            <h2 className="font-display text-campaign-blue text-4xl md:text-5xl mb-6">
              MEET ALI
            </h2>
            
            <div className="font-body text-foreground text-lg space-y-4">
              <p>
                Abshir Ali is an American with family through <strong>Somalia</strong>, North Minneapolis. He's a <strong className="text-campaign-green">lifetime St. Paul</strong> resident, community organizer, and a new homeowner here in Ward 1.
              </p>
              <p>
                Ali is running for Mayor to make <strong>Saint Paul</strong> a more <strong className="text-campaign-green">affordable and healthy city</strong> for all of us. He's excited to work alongside our community to build a better future for Saint Paul.
              </p>
            </div>

            <Button variant="action" size="lg" className="mt-8">
              Learn More &gt;
            </Button>
          </div>

          {/* Right Column - Image */}
          <div className="order-1 md:order-2">
            <img 
              src={communityPhoto} 
              alt="Ali connecting with community members" 
              className="w-full rounded-sm shadow-strong"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
