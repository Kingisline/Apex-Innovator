import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";
import { motion } from "motion/react";

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      skills: [
        { name: "Figma", level: 98 },
        { name: "UI/UX", level: 95 },
        { name: "Illustrator", level: 90 },
        { name: "Bootstrap & Tailwindcss", level: 88 },
      ],
    },
    {
      title: "Machine Learning",
      icon: "💻",
      skills: [
        { name: "Supervised Learning", level: 92 },
        { name: "Unsupervised Learning", level: 89 },
        { name: "Reinforcement Learning", level: 96 },
        { name: "Semi-Supervised Learning", level: 94 },
      ],
    },
    {
      title: "Iot & Embedded",
      icon: "🔍",
      skills: [
        { name: "Embedded system", level: 91 },
        { name: "Internet of things", level: 95 },
        { name: "Data Processing and Edge Computing", level: 93 },
        { name: "Arduino & Raspiberry OS", level: 87 },
      ],
    },
  ];

  const technologies = [
    "Figma",
    "Illustrator",
    "Canva Design",
    "UI & UX Design",
    "Bootstrap",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Machine Learning",
    "Neural Networks",
    "IOT & Embedded",
    "Networking",
  ];

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
            animation: "grid-move 20s linear infinite",
          }}
        ></div>
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
            Skills & Expertise
          </Badge>
          <h2 className="text-4xl md:text-5xl mb-6">
            Tools that
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {" "}
              we dominate
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A unique combination of artistic creativity, technical knowledge and
            strategic methodology to create extraordinary digital experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className="glass border-primary/20 hover:border-primary/40 transition-all duration-500 h-full group">
                <CardHeader className="text-center pb-4">
                  <motion.div
                    className="text-4xl mb-4"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    {category.icon}
                  </motion.div>
                  <CardTitle className="text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="space-y-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: skillIndex * 0.1 + index * 0.2 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm">{skill.name}</span>
                        <motion.span
                          className="text-sm text-primary"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                        >
                          {skill.level}%
                        </motion.span>
                      </div>
                      <div className="relative">
                        <Progress value={0} className="h-2 bg-muted/30" />
                        <motion.div
                          className="absolute top-0 left-0 h-2 bg-gradient-to-r from-primary to-accent rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{
                            duration: 1,
                            delay: skillIndex * 0.1 + index * 0.2,
                          }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Technologies and Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Badge
                  variant="secondary"
                  className="px-6 py-3 text-sm glass border border-primary/20 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
