import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const navItems = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-surface/80 backdrop-blur-md rounded-full px-6 py-3 border border-slate-700/50"
    >
      <div className="flex items-center space-x-6">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={`text-sm font-medium transition-colors duration-300 ${
              activeSection === item.href.slice(1)
                ? "text-primary"
                : "text-slate-300 hover:text-primary"
            }`}
          >
            {item.label}
          </a>
        ))}
      </div>
    </motion.nav>
  );
}
