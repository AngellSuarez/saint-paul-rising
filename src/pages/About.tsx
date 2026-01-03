import Header from "@/components/campaign/Header";
import Footer from "@/components/campaign/Footer";
import { Button } from "@/components/ui/button";
import communityPhoto from "@/assets/community-photo.jpg";

const About = () => {
  const values = [
    {
      title: "Community First",
      description:
        "Building a Saint Paul where every voice matters and every neighborhood thrives.",
    },
    {
      title: "Economic Justice",
      description:
        "Fighting for living wages, affordable housing, and economic opportunity for all.",
    },
    {
      title: "Environmental Stewardship",
      description:
        "Protecting our parks, rivers, and air for future generations of Saint Paul residents.",
    },
    {
      title: "Equity & Inclusion",
      description:
        "Creating a city where everyone belongs, regardless of background or zip code.",
    },
  ];

  const issues = [
    {
      title: "Affordable Housing",
      description:
        "Saint Paul families are being priced out of their homes. Ali will fight for rent stabilization, increased affordable housing development, and protections for renters.",
      icon: "🏠",
    },
    {
      title: "Public Safety",
      description:
        "Building a comprehensive approach to safety that includes mental health resources, community intervention programs, and accountable policing.",
      icon: "🛡️",
    },
    {
      title: "Climate Action",
      description:
        "Investing in green infrastructure, renewable energy, and sustainable transportation to make Saint Paul a leader in climate action.",
      icon: "🌿",
    },
    {
      title: "Education & Youth",
      description:
        "Supporting our schools, expanding youth programs, and ensuring every child in Saint Paul has the opportunity to succeed.",
      icon: "📚",
    },
    {
      title: "Small Business Support",
      description:
        "Strengthening our local economy by supporting small businesses, especially those owned by women and people of color.",
      icon: "🏪",
    },
    {
      title: "Transportation",
      description:
        "Improving public transit, creating safer streets for pedestrians and cyclists, and connecting all neighborhoods.",
      icon: "🚌",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-campaign-blue">
        <div className="container text-center">
          <h1 className="font-display text-campaign-yellow text-5xl md:text-6xl mb-4">
            MEET ALI
          </h1>
          <p className="font-body text-campaign-cream text-xl max-w-2xl mx-auto">
            A community organizer, Saint Paul resident, and advocate for a city
            that works for everyone.
          </p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16 bg-campaign-cream">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={communityPhoto}
                alt="Ali connecting with community members"
                className="w-full rounded-sm shadow-strong"
              />
            </div>
            <div className="font-body text-lg space-y-4">
              <p>
                <strong className="text-campaign-blue">Abshir Ali</strong> is an
                American with family through Somalia and North Minneapolis. He's
                a{" "}
                <strong className="text-campaign-green">
                  lifetime St. Paul
                </strong>{" "}
                resident, community organizer, and a new homeowner here in Ward
                1.
              </p>
              <p>
                Ali has spent years organizing alongside his neighbors, fighting
                for affordable housing, environmental justice, and equitable
                economic development.
              </p>
              <p>
                Ali is running for Mayor to make <strong>Saint Paul</strong> a
                more{" "}
                <strong className="text-campaign-green">
                  affordable and healthy city
                </strong>{" "}
                for all of us. He's excited to work alongside our community to
                build a better future for Saint Paul.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="font-display text-campaign-yellow-dark text-4xl md:text-5xl text-center mb-12 text-shadow-xl">
            ALI'S VALUES
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-campaign-yellow p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all"
              >
                <h3 className="font-display text-campaign-blue text-xl mb-3">
                  {value.title}
                </h3>
                <p className="font-body text-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Issues Section */}
      <section className="py-16 bg-campaign-blue">
        <div className="container">
          <h2 className="font-display text-campaign-yellow text-4xl md:text-5xl text-center mb-4">
            THE ISSUES
          </h2>
          <p className="font-body text-campaign-cream text-xl text-center max-w-2xl mx-auto mb-12">
            Ali is focused on the challenges that matter most to Saint Paul
            families.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {issues.map((issue, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-sm border border-campaign-cream/20 hover:bg-white/20 transition-colors hover:-trasnlate-y-2 hover:scale-105 transform"
              >
                <span className="text-4xl mb-4 block">{issue.icon}</span>
                <h3 className="font-display text-campaign-yellow text-xl mb-3">
                  {issue.title}
                </h3>
                <p className="font-body text-campaign-cream/90">
                  {issue.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-campaign-green">
        <div className="container text-center">
          <h2 className="font-display text-campaign-cream text-4xl md:text-5xl mb-6">
            JOIN THE MOVEMENT
          </h2>
          <p className="font-body text-campaign-cream/90 text-xl max-w-2xl mx-auto mb-8">
            Together, we can build a Saint Paul that works for all of us. Sign
            up to volunteer, donate, or just stay in the loop.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/#volunteer">
              <Button variant="heroYellow" size="lg">
                Sign Up to Volunteer
              </Button>
            </a>

            <Button variant="hero" size="lg">
              Make a Donation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
