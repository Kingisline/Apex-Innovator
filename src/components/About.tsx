import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

export function About() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="glass rounded-3xl overflow-hidden border border-primary/20">
                <ImageWithFallback
                  src="/1621.jpg"
                  alt="Interface de design moderno"
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-3xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
            </motion.div>

            {/* Floating design elements */}
            <motion.div
              className="absolute -top-6 -right-6 w-12 h-12 bg-primary/40 rounded-lg blur-sm"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute -bottom-6 -left-6 w-8 h-8 bg-accent/40 rounded-full blur-sm"
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          <motion.div
            className="space-y-8 order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Badge
                  variant="outline"
                  className="glass border-primary/50 text-primary"
                >
                  {/* About us */}
                </Badge>
              </motion.div>

              <motion.h2
                className="text-4xl md:text-5xl leading-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                About 
                <span className="text-6xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {" "}
                  SPARK CLUB
                </span>
              </motion.h2>

              {/* <motion.p
                className="text-lg text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                At Svcet, our students are acquainted with varied flavors of
                co-curricular and extra-curricular activities.
              </motion.p> */}
            </div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-muted-foreground leading-relaxed">
                SVCET clubs are functioning on the campus to help students learn
                new skills and gain fresh experiences. Co-curricular and
                Extracurricular activities offer great developmental benefits to
                help students grow professionally. Joining a Campus club benefit
                you to gain knowledge, skills and experience in leadership, good
                communication skills, excellent problem-solving skills, group
                development and management, presentation and Public speaking.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Card className="glass border-primary/20 hover:border-primary/40 transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <motion.div
                        className="text-2xl mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                        whileHover={{ scale: 1.1 }}
                      >
                        Faculty Coordinator
                      </motion.div>
                      <p className="text-sm text-muted-foreground">
                        Dr. P.R SENTHIL RAJAN
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Card className="glass border-accent/20 hover:border-accent/40 transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <motion.div
                        className="text-2xl mb-3 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent"
                        whileHover={{ scale: 1.1 }}
                      >
                        Student President
                      </motion.div>
                      <p className="text-sm text-muted-foreground">
                        R. Yuvaraj
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
