import Header from "@/components/campaign/Header";
import Footer from "@/components/campaign/Footer";
import { Button } from "@/components/ui/button";
import communityPhoto from "@/assets/ali2.jpeg";

const About = () => {
  const values = [
    {
      title: "Community First",
      description:
        "Building a District 65B where every voice matters and every neighborhood thrives.",
    },
    {
      title: "Economic Justice",
      description:
        "Fighting for living wages, affordable housing, and economic opportunity for all.",
    },
    {
      title: "Environmental Stewardship",
      description:
        "Protecting our parks, rivers, and air for future generations of District 65B residents.",
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
        "District 65B families are being priced out of their homes. Ali will fight for increased affordable housing development, and protections for renters.",
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
        "Investing in green infrastructure, renewable energy, and sustainable transportation to make the district 65B a leader in climate action.",
      icon: "🌿",
    },
    {
      title: "Education & Youth",
      description:
        "Supporting our schools, expanding youth programs, and ensuring every child in the district 65B has the opportunity to succeed.",
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
      <section className="pt-24 pb-16 bg-campaign-blue texture-green">
        <div className="container text-center">
          <h1 className="font-display text-campaign-yellow text-5xl md:text-6xl mb-4">
            MEET ALI
          </h1>
          <p className="font-body text-campaign-cream text-xl max-w-2xl mx-auto">
            A community organizer, District 65B resident, and advocate for a city
            that works for everyone.
          </p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16 bg-campaign-cream">
        <div className="container ">
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
                <strong className="text-campaign-blue">
                  My name is Abshir Ali
                </strong>
                , and I am running for the Minnesota House of Representatives in
                District 65B. I was raised in{" "}
                <strong className="text-campaign-blue">Saint Paul</strong> in a
                community full of {""}{" "}
                <strong className="text-campaign-blue">
                  resilience, culture, and potential
                </strong>{" "}
                {""} but also one that has too often been overlooked and
                underinvested in. {""} Growing up here shaped how I see {""}
                <strong className="text-campaign-blue">leadership</strong>
                
                . I
                learned early that real change does not come from talking about
                communities. <strong className="text-campaign-blue">It comes from standing with them and doing the
                work</strong>.
              </p>
              <p>
                I have spent years {''} <strong className="text-campaign-blue "> organizing, building coalitions, and serving in leadership roles </strong>  that put me at the intersection of community and government. I have worked inside city systems and alongside residents, {' '} <strong className="text-campaign-blue">  helping turn ideas into action and making sure everyday people have a voice in decisions that affect their lives. </strong> Those experiences taught me how policy is made and how it should be made.
              </p>
              <p>
                I am a young leader, but I am not new to responsibility. I bring {' '} <strong className="text-campaign-blue">vision, energy, and a deep understanding of how to move institutions</strong> while staying grounded in the needs of the people. I believe Minnesota is strongest when leadership reflects the communities it serves and when government {' '} <strong className="text-campaign-blue">works with urgency, integrity, and compassion</strong> .
              </p>
              <p>
                I am running because {' '} <strong className="text-campaign-blue"> District 65B </strong>  deserves representation that {' '} <strong className="text-campaign-blue"> listens, leads, and delivers. </strong> This campaign is about building a future where {' '}<strong className="text-campaign-blue"> every neighborhood is valued, every voice matters, and the next generation can see themselves in the people fighting for them at the Capitol. </strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white ">
        <div className="container ">
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
      <section className="py-16 bg-campaign-blue texture-green">
        <div className="container">
          <h2 className="font-display text-campaign-yellow text-4xl md:text-5xl text-center mb-4">
            THE ISSUES
          </h2>
          <p className="font-body text-campaign-cream text-xl text-center max-w-2xl mx-auto mb-12">
            Ali is focused on the challenges that matter most to District 65B
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
      <section className="py-16 bg-campaign-green texture-green">
        <div className="container text-center">
          <h2 className="font-display text-campaign-cream text-4xl md:text-5xl mb-6">
            JOIN THE MOVEMENT
          </h2>
          <p className="font-body text-campaign-cream/90 text-xl max-w-2xl mx-auto mb-8">
            Together, we can build a District 65B that works for all of us. Sign
            up to volunteer, donate, or just stay in the loop.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/#volunteer">
              <Button variant="heroYellow" size="lg">
                Sign Up to Volunteer
              </Button>
            </a>

            <a href="https://secure.actblue.com/donate/alifor65b">
              <Button variant="hero" size="lg">
                Make a Donation
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
