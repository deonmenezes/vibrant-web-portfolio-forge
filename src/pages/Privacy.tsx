import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText, Mail, Sparkles } from "lucide-react";

const Privacy = () => {
  const sections = [
    {
      title: "Information We Collect",
      icon: <FileText className="h-6 w-6 text-white" />,
      content: [
        {
          subtitle: "Personal Information",
          text: "We may collect personal information that you voluntarily provide to us when you: register for an account, use our services, fill out a form, subscribe to our newsletter, or contact us. This may include your name, email address, phone number, company name, and any other information you choose to provide."
        },
        {
          subtitle: "Automatically Collected Information",
          text: "When you visit our website, we may automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device."
        },
        {
          subtitle: "Usage Data",
          text: "We may also collect information about how you access and use our website, such as pages visited, time spent on pages, and interaction data. This helps us improve our services and user experience."
        }
      ],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "How We Use Your Information",
      icon: <Eye className="h-6 w-6 text-white" />,
      content: [
        {
          subtitle: "Service Provision",
          text: "We use the information we collect to provide, maintain, and improve our services, respond to your inquiries, and fulfill your requests."
        },
        {
          subtitle: "Communication",
          text: "We may use your contact information to send you updates, newsletters, marketing communications, and other information that may be of interest to you. You can opt-out of these communications at any time."
        },
        {
          subtitle: "Analytics and Improvement",
          text: "We analyze usage patterns to understand how our website is used, improve our services, and enhance user experience."
        }
      ],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Data Protection",
      icon: <Lock className="h-6 w-6 text-white" />,
      content: [
        {
          subtitle: "Security Measures",
          text: "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction."
        },
        {
          subtitle: "Data Retention",
          text: "We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law."
        },
        {
          subtitle: "Third-Party Services",
          text: "We may use third-party service providers to help us operate our website and administer activities on our behalf. These third parties have access to your information only to perform specific tasks and are obligated not to disclose or use it for any other purpose."
        }
      ],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Your Rights",
      icon: <Shield className="h-6 w-6 text-white" />,
      content: [
        {
          subtitle: "Access and Control",
          text: "You have the right to access, update, correct, or delete your personal information at any time. You may also request a copy of your personal data that we hold."
        },
        {
          subtitle: "Opt-Out",
          text: "You can opt-out of receiving marketing communications from us by following the unsubscribe instructions in our emails or by contacting us directly."
        },
        {
          subtitle: "Cookies",
          text: "You can control cookies through your browser settings. However, disabling cookies may limit your ability to use certain features of our website."
        }
      ],
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-32 pb-20">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-blue-500/20 border border-primary/30 backdrop-blur-sm mb-8"
              >
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-primary font-semibold">Privacy Policy</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-5xl md:text-7xl font-bold mb-8"
              >
                <span className="bg-gradient-to-r from-white via-primary to-blue-400 bg-clip-text text-transparent">
                  Your Privacy Matters
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              >
                We are committed to protecting your privacy and ensuring transparency about how we collect, use, and safeguard your information.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mt-8 text-sm text-gray-400"
              >
                <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="py-20 relative">
          <div className="container max-w-6xl">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-500/5 opacity-50"></div>
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
                    Introduction
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    At Virelity.com ("we," "our," or "us"), we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    By using our website, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Main Sections */}
            {sections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: sectionIndex * 0.1 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <div className="relative p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${section.gradient} opacity-5`}></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`h-14 w-14 rounded-xl bg-gradient-to-br ${section.gradient} p-4 flex items-center justify-center`}>
                        {section.icon}
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
                        {section.title}
                      </h2>
                    </div>
                    <div className="space-y-6">
                      {section.content.map((item, itemIndex) => (
                        <div key={itemIndex} className="pl-2">
                          <h3 className="text-xl font-semibold mb-3 text-primary">
                            {item.subtitle}
                          </h3>
                          <p className="text-gray-300 leading-relaxed">
                            {item.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Additional Sections */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-orange-500/5 opacity-50"></div>
                <div className="relative z-10">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
                    Cookies and Tracking Technologies
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    We use cookies for various purposes, including website functionality, analytics, and marketing. You can control cookie preferences through your browser settings.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-50"></div>
                <div className="relative z-10">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
                    Children's Privacy
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us, and we will take steps to delete such information from our systems.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-cyan-500/5 opacity-50"></div>
                <div className="relative z-10">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
                    Changes to This Privacy Policy
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-blue-500/10 opacity-50"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary to-blue-500 p-4 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
                    Contact Us
                  </h2>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                </p>
                <div className="space-y-2 text-gray-300">
                  <p><strong className="text-primary">Email:</strong> <a href="mailto:deon.menezes@virelity.com" className="hover:text-primary transition-colors">deon.menezes@virelity.com</a></p>
                  <p><strong className="text-primary">Phone:</strong> +918104796542</p>
                  <p><strong className="text-primary">Address:</strong> Mumbai, India</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Privacy;

