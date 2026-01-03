import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import communityPhoto from "@/assets/community-photo.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="bg-campaign-cream py-20">
      <div className="container">
        {/* Text centered above image */}
        <div className="text-center max-w-3xl mx-auto mb-12">
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

          <Link to="/about">
            <Button variant="action" size="lg" className="mt-8">
              Learn More About Ali &gt;
            </Button>
          </Link>
        </div>

        {/* Image below as visual separator */}
        <div className="max-w-4xl mx-auto">
          <img 
            src={communityPhoto} 
            alt="Ali connecting with community members" 
            className="w-full rounded-sm shadow-strong"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
