import { motion } from "framer-motion";
import { Heart, Users, Lightbulb, Rocket } from "lucide-react";
import myImage from '../../assets/profile.jpeg';

export default function About() {
  const values = [
    { icon: Heart, label: "Problem Solving", color: "text-red-400" },
    { icon: Users, label: "Team Collaboration", color: "text-blue-400" },
    { icon: Lightbulb, label: "Innovation", color: "text-yellow-400" },
    { icon: Rocket, label: "Growth Mindset", color: "text-green-400" },
  ];

  return (
    <section id="about" className="py-20 bg-surface/30">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-slate-300 leading-relaxed">
              With over 7 years of experience in frontend development, I specialize in building performant, accessible, and intuitive web and mobile applications that make a real difference. What began as a curiosity about how digital products work has grown into a passion for crafting seamless experiences across platforms.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              I believe great software is built at the intersection of technical excellence and human empathy. Whether I'm optimizing performance, designing responsive UIs, or mentoring junior developers, I'm always focused on the real-world impact of our work.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Outside of coding, you’ll find me exploring new technologies, contributing to open source projects, or sharing insights through technical writing. In this ever-evolving field, curiosity isn't just an asset—it’s essential.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.label}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-2 bg-dark/50 px-4 py-2 rounded-full"
                  >
                    <Icon className={`w-4 h-4 ${value.color}`} />
                    <span className="text-slate-300">{value.label}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.img
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              src={myImage}
              alt="Devanshi Parmar - React Application Developer"
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary/20 w-32 h-32 rounded-full blur-2xl"></div>
            <div className="absolute -top-6 -left-6 bg-accent/20 w-24 h-24 rounded-full blur-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
