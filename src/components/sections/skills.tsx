import { motion } from "framer-motion";
import { Code, Database, Settings, Users } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      icon: Code,
      color: "text-primary",
      skills: ["React", "Next.js", "Angular", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "SCSS", "SASS", "LESS", "Material UI", "Redux", "RxJS", "Jutro"]
    },
    {
      title: "Backend & Data",
      icon: Database,
      color: "text-accent",
      skills: ["Node.js", "Python", "PostgreSQL", "Guidewire", "MongoDB", "GraphQL", "REST APIs", "Firebase", "AWS (Lambda, S3)", "Terraform", "Google Data Analytics", "Predictive Modeling"]
    },
    {
      title: "Tools & Workflow",
      icon: Settings,
      color: "text-green-400",
      skills: ["Git", "Bitbucket", "Postman", "Jira", "Scrum", "Webpack", "Jest", "React Testing Library", "Chrome DevTools"]
    }
  ];

  const softSkills = [
    {
      title: "Communication",
      description: "Clear technical communication with stakeholders",
      icon: "💬",
      color: "bg-blue-500/20"
    },
    {
      title: "Time Management",
      description: "Efficient project delivery and sprint planning",
      icon: "⏰",
      color: "bg-green-500/20"
    },
    {
      title: "Problem Solving",
      description: "Creative solutions to complex challenges",
      icon: "🧩",
      color: "bg-purple-500/20"
    },
    {
      title: "Mentoring",
      description: "Guiding junior developers and knowledge sharing",
      icon: "👨‍🏫",
      color: "bg-orange-500/20"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-surface/50 rounded-2xl p-8 hover:bg-surface/70 transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <Icon className={`w-12 h-12 ${category.color} mb-4 mx-auto`} />
                  <h3 className="text-2xl font-bold text-slate-200">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-slate-700/50 text-slate-300 px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-600/50 transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-surface/50 rounded-2xl p-8"
        >
          <div className="text-center mb-8">
            <Users className="w-12 h-12 text-purple-400 mb-4 mx-auto" />
            <h3 className="text-2xl font-bold text-slate-200">Leadership & Soft Skills</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`${skill.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 text-2xl`}>
                  {skill.icon}
                </div>
                <h4 className="font-semibold text-slate-200">{skill.title}</h4>
                <p className="text-sm text-slate-400 mt-1">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
