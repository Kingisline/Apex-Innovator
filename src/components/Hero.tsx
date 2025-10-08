import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-primary tracking-wider uppercase text-sm"
              >
                
              </motion.div>
              
              <motion.h1 
                className="text-5xl md:text-7xl tracking-tight leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              > <br />
                Ignite Your
                <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">
                  Entrepreneurial Spirit
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-muted-foreground max-w-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                Join a vibrant community of student innovators, creators, and leaders. Learn, collaborate, and launch your ideas.
              </motion.p>
            </div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <a href="https://t.me/+crlGI0Vq5m5iMDE9">
              <Button size="lg" className="w-full sm:w-auto gradient-bg glow-primary border-0 group">
                <span className="relative z-10">Join Us</span>
              </Button>
              </a>
              <a href="#projects">
              <Button variant="outline" size="lg" className="w-full sm:w-auto glass border-primary/50 hover:bg-primary/10">
                Explore Projects
              </Button>
              </a>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-3 gap-8 pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <div className="text-center">
                <motion.div 
                  className="text-3xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                  whileInView={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 0.5 }}
                >
                  6
                </motion.div>
                <div className="text-sm text-muted-foreground">Domains</div>
              </div>
              <div className="text-center">
                <motion.div 
                  className="text-3xl bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent"
                  whileInView={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  8
                </motion.div>
                <div className="text-sm text-muted-foreground">Club Members</div>
              </div>
              <div className="text-center">
                <motion.div 
                  className="text-3xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                  whileInView={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  10
                </motion.div>
                {/* <div className="text-sm text-muted-foreground">Active Clients</div> */}
                <div className="text-sm text-muted-foreground">Project Completed</div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <motion.div 
              className="relative z-10 floating"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="glass rounded-3xl overflow-hidden border border-primary/20">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1753998941488-fc3064ab6094?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwd29ya3NwYWNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTkzMzU4NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Workspace futurista de tecnologia"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-3xl blur opacity-25"></div>
            </motion.div>
            
            {/* Floating elements */}
            <motion.div 
              className="absolute top-10 -right-10 w-20 h-20 bg-primary/30 rounded-full blur-xl"
              animate={{ y: [-10, 10, -10], x: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute bottom-10 -left-10 w-16 h-16 bg-accent/30 rounded-full blur-xl"
              animate={{ y: [10, -10, 10], x: [5, -5, 5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}