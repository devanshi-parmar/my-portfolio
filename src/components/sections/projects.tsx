import { motion } from "framer-motion";
import { Github, ExternalLink, CheckCircle } from "lucide-react";
import project1 from '../../assets/project1.png';
import project2 from '../../assets/project2.png';
import project3 from '../../assets/project3.png';
import project4 from '../../assets/project4.png';
import project5 from '../../assets/project5.png';
import project6 from '../../assets/project6.png';

export default function Projects() {
  const projects = [
    {
      title: "IoT Mobile App",
      description: "Built an IoT-powered mobile app to control pool pumps and lighting in real-time.",
      image: project4,
      achievements: [
        "Integrated MQTT for real-time control",
        "Built notification system using Firebase",
        "Designed intuitive control UI"
      ],
      technologies: ["React-Native", "MQTT", "Firebase", "Kotlin", "Swift"]
    },
    {
      title: "Ride-Hailing App – Driver & Customer",
      description: "Built cross-platform mobile apps to support seamless ride booking and driver communication.",
      image: project5,
      achievements: [
        "Developed with React Native for iOS & Android",
        "Used GraphQL for efficient data loading",
        "Integrated Firebase Auth and notifications"
      ],
      technologies: ["React-Native", "GraphQL", "Redux", "Firebase", "Java/Kotlin", "Swift/Objective-C"]
    },
    {
      title: "Jewelers – Vendor Dashboard & Mobile App",
      description: "Developed a responsive vendor dashboard and companion mobile app for real-time sales data and vendor management.",
      image: project3,
      achievements: [
        "Built using React.js and Angular.js for web and React-Native for Mobile App.",
        "Ensured mobile responsiveness and data accuracy",
        "Integrated dynamic data visualization"
      ],
      technologies: ["Redux", "React-Native", "Swift", "Kotlin", "App Deployment", "React.js", "Angular.js"],
    },
    {
      title: "Forex News Suggester – Web & Mobile",
      description: "Full-stack app providing Forex trading suggestions based on market news sentiment analysis.",
      image: project6,
      achievements: [
        "Built with React (web) and React Native (mobile) using Expo",
        "Node.js backend with PostgreSQL for news storage and signal generation",
        "Integrated NewsAPI and Sentiment analysis for real-time market insights"
      ],
      technologies: ["React", "React Native", "Node.js", "PostgreSQL", "Express", "Sentiment", "NewsAPI"],
      github: "https://github.com/devanshi-parmar/forex-insights"
    },
    {
      title: "An Insurance Platform",
      description: "Designed and developed a comprehensive insurance agent dashboard, customer portal, and landing page to modernize the agent-client experience.",
      image: project1,
      achievements: [
        "Built responsive, accessible interface using React.js",
        "Integrated Google Tag Manager for user tracking and analytics",
        "Enabled digital signing via Adobe Sign",
        "Integrated HubSpot API for CRM"
      ],
      technologies: ["React.js", "Redux", "Google Tag Manager", "HubSpot API", "HTML5", "CSS3"]
    },
    {
      title: " Sales Dashboard – Food Chain",
      description: "Created a comprehensive sales dashboard for a food chain built with Node.js, React, and Chart.js to visualize real-time sales metrics and trends.",
      image: project2,
      achievements: [
        "Developed data visualizations using Chart.js",
        "Used AWS for cloud storage and Lambda functions",
        "Optimized rendering and state management"
      ],
      technologies: ["React.js", "AWS (S3, Lambda)", "Node.js", "Redux", "Chart.js"]
    },    
  ];

  return (
    <section id="projects" className="py-20 bg-surface/30">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            A showcase of my best work, demonstrating technical expertise and creative problem-solving
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="group bg-dark/50 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-slate-200">{project.title}</h3>
                  <div className="flex space-x-3">
                    {project.github && <a
                      href={project.github}
                      className="text-slate-400 hover:text-primary transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>}
                    {/* {project?.live && <a
                      href={project?.live}
                      className="text-slate-400 hover:text-accent transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>} */}
                  </div>
                </div>

                <p className="text-slate-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-300 mb-3">KEY ACHIEVEMENTS</h4>
                  <ul className="space-y-2 text-sm text-slate-400">
                    {project.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-slate-700/50 text-slate-300 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform duration-300"
          >
            View All Projects
            <ExternalLink className="ml-2 w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
