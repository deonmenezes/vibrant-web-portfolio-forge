import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { TeamMemberCard } from "@/components/TeamMemberCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { PageTransition } from "@/components/PageTransition";
import { motion } from "framer-motion";

const Team = () => {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=300",
      bio: "With over 15 years in tech, Alex leads our vision and strategy, ensuring we stay at the forefront of digital innovation.",
      socials: [
        { platform: "LinkedIn", url: "#" },
        { platform: "Twitter", url: "#" },
      ],
    },
    {
      name: "Sarah Chen",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300",
      bio: "Sarah brings over a decade of design expertise, creating visually compelling and user-centered digital experiences.",
      socials: [
        { platform: "LinkedIn", url: "#" },
        { platform: "Dribbble", url: "#" },
      ],
    },
    {
      name: "Michael Torres",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300",
      bio: "As our technical lead, Michael ensures our development practices are cutting-edge and our code is pristine.",
      socials: [
        { platform: "LinkedIn", url: "#" },
        { platform: "GitHub", url: "#" },
      ],
    },
    {
      name: "Jessica Park",
      role: "UX Researcher",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300",
      bio: "Jessica's research-driven approach ensures our products are not just beautiful, but truly user-friendly and accessible.",
      socials: [
        { platform: "LinkedIn", url: "#" },
        { platform: "Medium", url: "#" },
      ],
    },
    {
      name: "David Williams",
      role: "Frontend Developer",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=300",
      bio: "David transforms designs into responsive, interactive interfaces with a focus on performance and accessibility.",
      socials: [
        { platform: "LinkedIn", url: "#" },
        { platform: "GitHub", url: "#" },
      ],
    },
    {
      name: "Olivia Martinez",
      role: "Digital Strategist",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300",
      bio: "Olivia crafts digital strategies that align with business goals, ensuring our solutions drive real results.",
      socials: [
        { platform: "LinkedIn", url: "#" },
        { platform: "Twitter", url: "#" },
      ],
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-muted/30">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-4">
                Our Team
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Meet The Visionaries</h1>
              <p className="text-xl text-muted-foreground">
                The talented individuals behind Virelity.com who bring creativity, expertise, and passion to every project.
              </p>
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <TeamMemberCard
                    name={member.name}
                    role={member.role}
                    image={member.image}
                    bio={member.bio}
                    socials={member.socials}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Our Team */}
        <section className="py-20 bg-gradient-bg text-white clip-path-slant">
          <div className="container py-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
              <p className="text-xl mb-8">
                We're always looking for talented individuals who are passionate about creating exceptional digital experiences.
              </p>
              <Button asChild className="bg-white text-primary hover:bg-white/90">
                <a href="#careers">View Open Positions</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Company Culture */}
        <section className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold">Our Culture</h2>
                <p className="text-muted-foreground">
                  At Virelity.com, we believe that great work comes from a culture that values creativity, collaboration, and continuous learning.
                </p>
                <p className="text-muted-foreground">
                  We foster an environment where ideas can flourish, where team members are empowered to take risks and innovate, and where we celebrate our successes together.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span>Flexible working environment</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span>Continuous learning and development</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span>Diverse and inclusive workplace</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span>Health and wellness initiatives</span>
                  </div>
                </div>
              </motion.div>

              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-2 gap-4"
                >
                  <div className="space-y-4">
                    <div className="rounded-lg overflow-hidden h-40">
                      <img 
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=300" 
                        alt="Team collaboration" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="rounded-lg overflow-hidden h-60">
                      <img 
                        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=300" 
                        alt="Office space" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="rounded-lg overflow-hidden h-60">
                      <img 
                        src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=300" 
                        alt="Team meeting" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="rounded-lg overflow-hidden h-40">
                      <img 
                        src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=300" 
                        alt="Team event" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">
                Want to work with our team?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's discuss how our experts can help bring your vision to life.
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Team;
