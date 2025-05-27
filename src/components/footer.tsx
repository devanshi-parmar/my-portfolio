import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/devanshi-parmar", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/devansshi-parmar-58726484/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:devanshiparmar44@gmail.com", label: "Email" },
  ];

  return (
    <footer className="bg-dark border-t border-slate-800 py-12">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-200 mb-4">Devanshi Parmar</h3>
            <p className="text-slate-400 leading-relaxed">
              Senior Frontend Developer passionate about creating exceptional digital experiences that make a difference.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-slate-200 mb-4">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-slate-400 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-slate-200 mb-4">Let's Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    whileHover={{ scale: 1.1 }}
                    className="text-slate-400 hover:text-primary text-xl transition-colors"
                    aria-label={link.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
