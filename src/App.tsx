import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ParticleBackground } from "./components/ParticleBackground";
import { motion } from "motion/react";
import { Toaster } from 'react-hot-toast';

export default function App() {
  return (
    <div className="min-h-screen relative">
      {/* Particle background effect */}
      <ParticleBackground />
      
      {/* Smooth scroll wrapper */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Header />
        
        <main className="relative z-10">
          <section id="home">
            <Hero />
          </section>

          <section>
            {/* <Card/> */}
          </section>
          
          <section id="about">
            <About />
          </section>
          
          <section id="skills">
            <Skills />
          </section>
          
          <section id="projects">
            <Projects />
          </section>
          
          <section id="contact">
            <Contact />
          </section>
        </main>
        
        <Footer />
        <Toaster
          position="top-center" // You can customize the position
          reverseOrder={false}
        />
      </motion.div>
      
      {/* Scroll to top button */}
      <motion.button
        className="fixed bottom-8 right-8 w-12 h-12 glass rounded-full border border-primary/30 hover:border-primary/60 transition-all duration-300 z-50 flex items-center justify-center group"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <span className="text-primary group-hover:text-accent transition-colors">↑</span>
      </motion.button>
    </div>
  );
}