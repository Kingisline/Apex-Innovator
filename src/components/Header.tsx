import { Button } from "./ui/button";
import { motion } from "motion/react";

export function Header() {
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Events", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 w-full glass border-b border-border z-50"
    >
      <div className="container mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <div className="relative">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {/* SPARK  */}
                <img src="/logo.svg" alt="" />
              </span>
                  
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-25">
                  Apex
              </div>
            </div>
          </motion.div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="text-sm hover:text-primary transition-all duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </nav>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <a href="https://t.me/+crlGI0Vq5m5iMDE9">
            <Button size="sm" className="gradient-bg pulse-glow border-0">
              Join Now
            </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}