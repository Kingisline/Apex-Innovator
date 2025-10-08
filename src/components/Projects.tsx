import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import toast from 'react-hot-toast';

export function Projects() {
  // 1. ADD 'url' AND 'caseStudyUrl' TO YOUR PROJECT DATA
  // Use your actual links here. Use null if a link doesn't exist.
  const projects = [
    {
      title: "AR Flashcards for Kids (Unity & Vuforia)",
      description:
        "An interactive AR learning app built with Unity and Vuforia that brings flashcards to life, making learning fun and engaging for kids through 3D visuals and animations.",
      image: "https://plus.unsplash.com/premium_photo-1710118990459-07ad42731385?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXVnbWVudGVkJTIwcmVhbGl0eXxlbnwwfHwwfHx8MA%3D%3D",
      technologies: ["Unity", "Figma", "Vuforia", "AR Foundation"],
      // featured: true,
      year: "2024",
      url: "https://github.com/12345-12345-12345/AR_Flashcards_Vuforia_Kids.git",
      caseStudyUrl: null
    },
    {
      title: "Full Stack College Management (Next js & Tailwindcss)",
      description:
        "A full-stack college management system designed to streamline academic and administrative tasks, including student records, faculty management, course enrollment, and performance tracking — providing an efficient and centralized platform for colleges.",
      image: "https://plus.unsplash.com/premium_photo-1685086785054-d047cdc0e525?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnVsbCUyMHN0YWNrfGVufDB8fDB8fHww",
      technologies: ["Next js", "Docker Desktop", "Prisma & Psotgres SQL"],
      featured: false,
      year: "2024",
      url: "https://github.com/your-username/college-management",
      caseStudyUrl: null, // This button will be disabled
    },
    {
      title: "Smart Stress Monitoring Watch",
      description:
        "A smart stress sensor powered by the MAX30102 and ESP32-C3 Mini that monitors body movements and physiological responses, analyzing patterns to detect stress levels and provide real-time insights for health and wellness.",
      image: "https://images.unsplash.com/photo-1634452015397-ad0686a2ae2d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZXNwMzJ8ZW58MHx8MHx8fDA%3D",
      technologies: ["Recurrent Neural Network", "MAx30102", "Python - Flask"],
      featured: false,
      year: "2023",
      url: "https://github.com/your-username/stress-watch",
      caseStudyUrl: "https://www.behance.net/your-username/stress-watch-study",
    },
    {
      title: "VR Control with Gyroscope senor(MPU6050)",
      description:
        "A VR control system using the MPU6050 gyroscope to capture real-time head and hand movements, enabling intuitive and immersive navigation and interaction within virtual environments.",
      image: "/mine.jpg",
      technologies: ["Iot Sensors", "Bi-concave lens", "Flask Programming"],
      // featured: true,
      year: "2024",
      url: null, // This button will be disabled
      caseStudyUrl: null, // This button will be disabled
    },
  ];

  // 2. CREATE A HANDLER TO OPEN LINKS IN A NEW TAB
  const handleLinkClick = (url) => {
    if (url) {
      // Prepend https:// if the URL doesn't have a protocol
      let fullUrl = url;
      if (!/^https?:\/\//i.test(fullUrl)) {
        fullUrl = `https://${fullUrl}`;
      }
      window.open(fullUrl, '_blank', 'noopener,noreferrer');
    }
  };


  // Toast message
  const handleSeeFullProjectsClick = () => {
    toast('This option will be available soon.', {
      icon: '🚧',
    });
  };

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
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
          <Badge
            variant="outline"
            className="mb-6 glass border-primary/50 text-primary"
          >
            {/* Portfolio */}
          </Badge>
          <h2 className="text-4xl md:text-5xl mb-6">
            Projects that
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {" "}
              Inspire
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Each project is a unique discovery journey, where we turn complex
            challenges into elegant and memorable solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`${project.featured ? "lg:col-span-1" : ""}`}
            >
              <Card
                className={`overflow-hidden glass border-primary/20 hover:border-primary/40 transition-all duration-500 group ${
                  project.featured ? "lg:h-auto" : "h-full"
                }`}
              >
                <div className={`${project.featured ? "lg:flex lg:h-96" : ""}`}>
                  <motion.div
                    className={`${
                      project.featured ? "lg:w-3/5" : ""
                    } relative overflow-hidden`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                        project.featured ? "h-64 lg:h-full" : "h-64"
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Floating year badge */}
                    <motion.div
                      className="absolute top-4 right-4 glass px-3 py-1 rounded-full border border-primary/30"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <span className="text-sm text-primary">
                        {project.year}
                      </span>
                    </motion.div>
                  </motion.div>

                  <div
                    className={`${
                      project.featured ? "lg:w-2/5" : ""
                    } p-8 flex flex-col justify-between`}
                  >
                    <div>
                      <CardHeader className="p-0 mb-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <motion.h3
                              className="text-2xl mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                              whileHover={{ scale: 1.02 }}
                            >
                              {project.title}
                            </motion.h3>
                          </div>
                          {project.featured && (
                            <motion.div
                              initial={{ opacity: 0, rotate: -10 }}
                              whileInView={{ opacity: 1, rotate: 0 }}
                              transition={{ delay: 0.3 }}
                            >
                              <Badge
                                variant="default"
                                className="gradient-bg border-0"
                              >
                                Featured
                              </Badge>
                            </motion.div>
                          )}
                        </div>
                      </CardHeader>

                      <CardContent className="p-0 mb-6">
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <motion.div
                              key={techIndex}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: techIndex * 0.1 }}
                              whileHover={{ scale: 1.05 }}
                            >
                              <Badge
                                variant="secondary"
                                className="text-xs glass border border-accent/20 hover:border-accent/40 transition-all duration-300"
                              >
                                {tech}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </div>
                    
                    {/* 3. CONNECT THE HANDLER AND ADD A 'disabled' STATE */}
                    <CardFooter className="p-0 gap-4">
                      <motion.div
                        whileHover={{ scale: project.url ? 1.02 : 1 }}
                        whileTap={{ scale: project.url ? 0.98 : 1 }}
                      >
                        <Button
                          onClick={() => handleLinkClick(project.url)}
                          disabled={!project.url}
                          variant="outline"
                          className="glass border-primary/50 hover:bg-primary/10 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          See project
                        </Button>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: project.caseStudyUrl ? 1.02 : 1 }}
                        whileTap={{ scale: project.caseStudyUrl ? 0.98 : 1 }}
                      >
                        <Button
                          onClick={() => handleLinkClick(project.caseStudyUrl)}
                          disabled={!project.caseStudyUrl}
                          variant="ghost"
                          className="hover:bg-accent/10 hover:text-accent disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Case Study
                        </Button>
                      </motion.div>
                    </CardFooter>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Button onClick={handleSeeFullProjectsClick}
            size="lg"
            className="gradient-bg glow-primary border-0 px-8 py-6 text-lg"
          >
            See full Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
}