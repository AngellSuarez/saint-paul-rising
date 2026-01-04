import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const VolunteerSection = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState('');
  const [ZIPCode, setZIPCode] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!firstName || !lastName || !phoneNumber || !ZIPCode || !email) {
      toast({
        title: "Please fill all fields",
        description: "All fields are required to sign up as a volunteer.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Web3Forms API endpoint
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "",
          subject: "New Volunteer Signup - Ali for Saint Paul",
          from_name: "Ali for Saint Paul Campaign",
          name: `${firstName} ${lastName}`,
          email: email,
          phone: phoneNumber,
          zipcode: ZIPCode,
          message: `New volunteer signup:\n\nName: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phoneNumber}\nZIP Code: ${ZIPCode}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        // Send thank you email to volunteer using EmailJS API
        const emailjsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const emailjsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const emailjsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
        
        // Only send if EmailJS is configured and email is valid
        if (emailjsServiceId && emailjsTemplateId && emailjsPublicKey && email) {
          try {
            const emailResponse = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                service_id: emailjsServiceId,
                template_id: emailjsTemplateId,
                user_id: emailjsPublicKey,
                template_params: {
                  to_name: firstName || "Volunteer",
                  to_email: email,
                  email: email,
                  name: `${firstName} ${lastName}`,
                },
              }),
            });

            const emailResult = await emailResponse.json();
            if (!emailResult || emailResponse.status !== 200) {
              console.error("EmailJS error:", emailResult);
            }
          } catch (emailError) {
            // Log error but don't fail the form submission
            console.error("Error sending thank you email:", emailError);
          }
        }

        toast({
          title: "Welcome to the team!",
          description: "Thanks for signing up! Check your email for a confirmation message. We'll be in touch soon!",
        });
        // Reset form
        setEmail("");
        setFirstName("");
        setLastName("");
        setPhoneNumber("");
        setZIPCode("");
      } else {
        throw new Error(result.message || "Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="volunteer" className="bg-campaign-green py-20 texture-green">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          {/* Headline */}
          <h2 className="font-display text-campaign-cream text-4xl md:text-5xl mb-4">
            WE NEED <span className="text-campaign-yellow">VOLUNTEERS!</span>
          </h2>
          
          {/* Subtext */}
          <p className="font-body text-campaign-cream text-lg mb-8">
            Get involved today! Sign up to volunteer and join our grassroots movement for a better Saint Paul.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 max-w-xl mx-auto">
            <Input 
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="bg-card border-foreground/20 rounded-[1vh] hover:border-campaign-yellow focus:border-campaign-yellow transition-colors"
              required
            />
             <Input 
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="bg-card border-foreground/20 rounded-[1vh] hover:border-campaign-yellow focus:border-campaign-yellow transition-colors"
              required
            />
            <Input 
              type="text"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="bg-card border-foreground/20 rounded-[1vh] hover:border-campaign-yellow focus:border-campaign-yellow transition-colors"
              required
            />
            <Input 
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-card border-foreground/20 rounded-[1vh] hover:border-campaign-yellow focus:border-campaign-yellow transition-colors"
              required
            />
            <Input 
              type="text"
              placeholder="ZIP Code"
              value={ZIPCode}
              onChange={(e) => setZIPCode(e.target.value)}
              className="bg-card border-foreground/20 col-span-2 rounded-[1vh] hover:border-campaign-yellow focus:border-campaign-yellow transition-colors"
              required
            />
            <Button 
              variant="heroYellow" 
              size="lg" 
              type="submit" 
              className="col-span-2 w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Join the Team"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default VolunteerSection;
