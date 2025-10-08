import { useState } from "react";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser"; // 1. Import EmailJS

import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { motion } from "motion/react";


export function Contact() {
  // 2. SET UP STATE to manage form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes and update state
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // 3. CREATE a function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form refresh

    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error("Please fill in all fields.");
      return;
    }

    setIsSubmitting(true);

    // Replace with your actual EmailJS credentials
    const serviceId = "service_ne0bzff";
    const templateId = "template_d945l69";
    const publicKey = "Bcdswob_VcsYypVdU";

    const emailPromise = emailjs.send(serviceId, templateId, formData, publicKey);

    toast.promise(
      emailPromise,
      {
        loading: "Sending message...",
        success: "Message sent successfully! 🎉",
        error: "Failed to send message. Please try again.",
      }
    ).then(() => {
        // Reset form on success
        setFormData({ name: "", email: "", subject: "", message: "" });
    }).finally(() => {
        setIsSubmitting(false);
    });
  };

  const handleLinkClick = (url) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };


  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 360]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/15 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge variant="outline" className="mb-6 glass border-primary/50 text-primary">
            Let's talk
          </Badge>
          <h2 className="text-4xl md:text-5xl mb-6">
            Ready to create something  <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Extra Ordinary? </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Every big project starts with a conversation. Let's transform your vision into an unforgettable digital experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            className="space-y-10"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                How to find us?
              </h3>
              <div className="space-y-6">
                <motion.div
                  className="flex items-center gap-4 group"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <div className="w-14 h-14 glass rounded-xl flex items-center justify-center border border-primary/20 group-hover:border-primary/40 transition-all duration-300">
                    <span className="text-xl">📧</span>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-lg">yuvarajyuvi881@gmail.com</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-4 group"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <div className="w-14 h-14 glass rounded-xl flex items-center justify-center border border-accent/20 group-hover:border-accent/40 transition-all duration-300">
                    <span className="text-xl">📱</span>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">WhatsApp</p>
                    <p className="text-lg">+91 9360041620</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-4 group"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <div className="w-14 h-14 glass rounded-xl flex items-center justify-center border border-primary/20 group-hover:border-primary/40 transition-all duration-300">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-lg">Svcet Campus, Tiruvallur</p>
                  </div>
                </motion.div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl mb-6 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Connect with Us
              </h3>
              <div className="flex gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button onClick={() => handleLinkClick('https://www.linkedin.com/in/your-profile')} variant="outline" className="glass border-primary/50 hover:bg-primary/10">
                    LinkedIn
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button onClick={() => handleLinkClick('https://github.com/your-username')} variant="outline" className="glass border-accent/50 hover:bg-accent/10">
                    Github
                  </Button>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="glass border-primary/20 hover:border-primary/40 transition-all duration-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <motion.div
                      className="w-3 h-3 bg-green-400 rounded-full"
                      animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    Availability status
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-primary mb-2">✨ Available for new projects</p>
                  <p className="text-sm text-muted-foreground">
                    Guaranteed response within 12 hours
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
          
          {/* 4. WRAP THE FORM elements with a <form> tag and add onSubmit */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="glass border-primary/20 hover:border-primary/40 transition-all duration-500 h-full">
              <CardHeader>
                <CardTitle className="text-2xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Let's start your project
                </CardTitle>
                <p className="text-muted-foreground">
                  Tell me about your idea and let's create something amazing together
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm">Name</label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      className="glass border-primary/20 focus:border-primary/40 transition-all duration-300"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm">Email</label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className="glass border-primary/20 focus:border-primary/40 transition-all duration-300"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm">Project type</label>
                  <Input
                    id="subject"
                    placeholder="Ex: Website, App, Branding..."
                    className="glass border-primary/20 focus:border-primary/40 transition-all duration-300"
                    value={formData.subject}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm">Describe your vision</label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project, goals and how I can help make it reality ..."
                    rows={5}
                    className="glass border-primary/20 focus:border-primary/40 transition-all duration-300 resize-none"
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button type="submit" disabled={isSubmitting} className="w-full gradient-bg glow-primary border-0 py-6 text-lg">
                    {isSubmitting ? "Sending..." : "Message ✨"}
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
