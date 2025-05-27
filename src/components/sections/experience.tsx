import { motion } from "framer-motion";
import { TrendingUp, Users as UsersIcon, Code2, Database, Zap, Shield } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Custom Software Engineering Sr. Analyst",
      company: "Accenture Solutions Private Limited",
      period: "2021 - 2024",
      description: "Delivered scalable web applications by designing and implementing responsive interfaces using React.js, Redux, and TypeScript, Javascript, Node.js, Guidewire-Jutro, improving usability and reducing maintenance efforts for enterprise clients.",
      achievements: [
        { icon: TrendingUp, text: "Improved app performance by 45%", color: "text-green-400" },
        { icon: UsersIcon, text: "Mentored 5 junior developers", color: "text-blue-400" },
        { icon: Code2, text: "Architected component library", color: "text-purple-400" }
      ],
      technologies: ["React", "TypeScript", "JavaScript", "Node.js", "Guidewire", "Jutro"],
      color: "bg-primary"
    },
    {
      title: "Software Engineer L2",
      company: "Indianic Infotech Limited",
      period: "2019 - 2021",
      description: "Delivered high-performance web and mobile solutions for large-scale projects including - Insurance, eCommerce, Portals, Dashboards leveraging technologies like, React-Native, React.js, TypeScript, JavaScript and Node.js.",
      achievements: [
        { icon: Zap, text: "Reduced page load time by 60%", color: "text-green-400" },
        { icon: UsersIcon, text: "Delegated tasks, monitored progress and conducted interviews", color: "text-blue-400" },
        { icon: Shield, text: "Implemented security best practices", color: "text-purple-400" }
      ],
      technologies: ["React", "React-Native", "JavaScript", "TypeScript", "Node.js"],
      color: "bg-accent"
    },
    {
      title: "Software Developer",
      company: "Intuz Solutions Private Limited",
      period: "2017 - 2019",
      description: "Enhanced development efficiency and consistency by contributing to scalable React applications, building reusable component libraries and implementing robust design patterns, reducing development time by 25%.",
      achievements: [
        { icon: Code2, text: "Deployed 50+ features in 6 months", color: "text-green-400" },
        { icon: UsersIcon, text: "Mentored 2 junior developers", color: "text-blue-400" },
        { icon: TrendingUp, text: "Achieved 99.9% uptime", color: "text-purple-400" }
      ],
      technologies: ["React-Native", "JavaScript", "Node.js"],
      color: "bg-green-400"
    }
  ];

  const certifications = [
    {
      title: "Google Advanced Data Analytics",
      type: "Professional Certificate",
      icon: "📊",
      color: "bg-blue-500/20"
    },
    {
      title: "Guidewire Certified Specialist - EnterpriseEngage Config",
      type: "Certified Developer",
      icon: "🛡️",
      color: "bg-red-500/20"
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            7+ years of building exceptional digital experiences across various industries
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-accent to-primary"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  index % 2 === 0 ? "" : "md:flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right md:pr-8" : "md:text-left md:pl-8"} mb-4 md:mb-0`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-surface/50 rounded-2xl p-6 hover:bg-surface/70 transition-all duration-300"
                  >
                    <h3 className="text-2xl font-bold text-slate-200 mb-2">{exp.title}</h3>
                    <h4 className="text-xl font-semibold mb-3 text-primary">{exp.company}</h4>
                    <p className="text-slate-400 mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="space-y-2 mb-4">
                      {exp.achievements.map((achievement, achievementIndex) => {
                        const Icon = achievement.icon;
                        return (
                          <div
                            key={achievementIndex}
                            className={`flex items-center ${index % 2 === 0 ? "md:justify-end" : ""}`}
                          >
                            <Icon className={`w-4 h-4 ${achievement.color} mr-2`} />
                            <span className="text-sm text-slate-300">{achievement.text}</span>
                          </div>
                        );
                      })}
                    </div>
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={tech}
                          className="bg-slate-700/50 text-slate-300 px-3 py-1 rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
                
                {/* Timeline Dot */}
                <div className={`absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 ${exp.color} rounded-full border-4 border-dark`}></div>
                
                <div className={`flex-1 ${index % 2 === 0 ? "md:pl-8" : "md:pr-8"}`}>
                  <div className={`${index % 2 === 0 ? "text-right md:text-left" : "text-right md:text-right"}`}>
                    <span className="bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                      {exp.period}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Certifications Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-slate-200">Certifications & Credentials</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-surface/50 rounded-xl p-6 text-center hover:bg-surface/70 transition-all duration-300"
              >
                <div className={`w-16 h-16 ${cert.color} rounded-full flex items-center justify-center mx-auto mb-4 text-2xl`}>
                  {cert.icon}
                </div>
                <h4 className="font-semibold text-slate-200 mb-2">{cert.title}</h4>
                <p className="text-sm text-slate-400">{cert.type}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
