import { motion } from "framer-motion";
import toast from "react-hot-toast";


  // Toast message
  const handleSeeFullProjectsClick = () => {
    toast('Policies will be updated soon', {
      icon: '🚧',
    });
  };

    const handleSeeFullProjectsClick2 = () => {
    toast('Terms & cons will be updated soon', {
      icon: '🚧',
    });
  };


export function Footer() {
  return (
    <footer className="relative py-20 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-transparent"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <motion.div 
          className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [-20, 20, -20]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-0 right-1/4 w-48 h-48 bg-accent/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [20, -20, 20]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Added text-center for mobile and md:text-left to reset on larger screens */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 text-center md:text-left">
          <motion.div 
            className="space-y-6 md:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Added justify-center for mobile and md:justify-start for larger screens */}
            <div className="flex items-center space-x-3 justify-center md:justify-start">
              <div className="relative">
                <span className="text-3xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  S P A R K
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-20"></div>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md mx-auto md:mx-0">
              We are passionate web designers, dedicated to crafting digital experiences that connect people, inspire creativity, and transform visions into extraordinary realities.
            </p>
            {/* Added justify-center for mobile */}
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <motion.div 
                className="w-3 h-3 bg-green-400 rounded-full"
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-sm text-primary">Available for new projects</span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="mb-6 text-lg bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <motion.a 
                  href="#home" 
                  className="hover:text-primary transition-colors relative group"
                  whileHover={{ x: 5 }}
                >
                  Home
                  <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#about" 
                  className="hover:text-primary transition-colors relative group"
                  whileHover={{ x: 5 }}
                >
                  About
                  <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#skills" 
                  className="hover:text-primary transition-colors relative group"
                  whileHover={{ x: 5 }}
                >
                  Skills
                  <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#projects" 
                  className="hover:text-primary transition-colors relative group"
                  whileHover={{ x: 5 }}
                >
                  Events
                  <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </motion.a>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="mb-6 text-lg bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <motion.a 
                  href="#" 
                  className="hover:text-accent transition-colors inline-flex items-center gap-2"
                  whileHover={{ x: 5 }}
                >
                  <span>📧</span> shanks@spark.designs
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#" 
                  className="hover:text-primary transition-colors inline-flex items-center gap-2"
                  whileHover={{ x: 5 }}
                >
                  <span>💼</span> LinkedIn
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#" 
                  className="hover:text-accent transition-colors inline-flex items-center gap-2"
                  whileHover={{ x: 5 }}
                >
                  <span>🎨</span> Github
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#" 
                  className="hover:text-primary transition-colors inline-flex items-center gap-2"
                  whileHover={{ x: 5 }}
                >
                  <span>🎯</span> Figma
                </motion.a>
              </li>
            </ul>
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-border/50 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center">
              {/* Crafted with ❤️ and lots of ☕ */}
              &copy; 2025 SPARK All rights reserved. <br /> <span className="text-l bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Crafted by Dept of CSE (2022 - 2026)</span> 
            </p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <motion.a 
                href="#" 
                onClick={handleSeeFullProjectsClick}
                className="hover:text-primary transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                Policies
              </motion.a>
              <span>•</span>
              <motion.a 
                href="#" 
                onClick={handleSeeFullProjectsClick2}
                className="hover:text-primary transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                Terms & cons
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

