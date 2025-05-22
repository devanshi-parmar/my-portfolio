import { motion } from "framer-motion";
import { Github, ExternalLink, CheckCircle } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "NextGen E-commerce Platform",
      description: "Built a high-performance e-commerce platform handling 10k+ daily users. Implemented advanced filtering, real-time inventory updates, and seamless checkout experience.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600",
      achievements: [
        "Improved load time by 40% through code splitting",
        "Increased conversion rate by 25%",
        "Built responsive design for all devices"
      ],
      technologies: ["React", "Next.js", "Node.js", "Stripe API", "PostgreSQL"],
      github: "#",
      live: "#"
    },
    {
      title: "Advanced Analytics Dashboard",
      description: "Created a comprehensive analytics platform with real-time data visualization, custom reporting, and interactive charts for business intelligence.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600",
      achievements: [
        "Processed 1M+ data points in real-time",
        "Reduced report generation time by 60%",
        "Implemented advanced filtering and exports"
      ],
      technologies: ["React", "D3.js", "GraphQL", "Redis", "WebSocket"],
      github: "#",
      live: "#"
    },
    {
      title: "Guidewire Digital Portal",
      description: "Developed a modern digital portal for insurance customers using Guidewire and Jutro framework, streamlining policy management and claims processing.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600",
      achievements: [
        "Reduced policy processing time by 50%",
        "Improved customer satisfaction by 35%",
        "Migrated legacy system to modern architecture"
      ],
      technologies: ["Guidewire", "Jutro", "React", "JavaScript", "REST API"],
      github: "#",
      live: "#"
    },
    {
      title: "Real-time Collaboration Platform",
      description: "Built a real-time collaboration tool enabling teams to work together seamlessly with live document editing, video calls, and project management features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600",
      achievements: [
        "Supported 500+ concurrent users",
        "Achieved 99.9% uptime reliability",
        "Integrated video conferencing API"
      ],
      technologies: ["React", "Socket.io", "TypeScript", "WebRTC", "MongoDB"],
      github: "#",
      live: "#"
    }
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
                    <a
                      href={project.github}
                      className="text-slate-400 hover:text-primary transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.live}
                      className="text-slate-400 hover:text-accent transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
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
