import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin, Download, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface ContactForm {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  projectType: string;
  message: string;
}

export default function Contact() {
  const { toast } = useToast();
  const [form, setForm] = useState<ContactForm>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    projectType: "",
    message: ""
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactForm) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        projectType: "",
        message: ""
      });
    },
    onError: (error) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(form);
  };

  const handleInputChange = (field: keyof ContactForm, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "devanshiparmar44@gmail.com",
      color: "bg-primary/20 text-primary"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/devansshi-parmar-58726484/",
      color: "bg-accent/20 text-accent"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "github.com/devanshi-parmar",
      color: "bg-green-500/20 text-green-400"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Toronto, ON",
      color: "bg-purple-500/20 text-purple-400"
    }
  ];

  const socialLinks = [
    { icon: "🐦", href: "#", color: "bg-blue-500/20 text-blue-400" },
    { icon: "📷", href: "#", color: "bg-purple-500/20 text-purple-400" },
    { icon: "📺", href: "#", color: "bg-red-500/20 text-red-400" },
    { icon: "✍️", href: "#", color: "bg-gray-500/20 text-gray-400" }
  ];

  return (
    <section id="contact" className="py-20 bg-surface/30">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Let's Build Something Amazing
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Ready to bring your next project to life? I'm always excited to work on challenging problems and create exceptional user experiences.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-dark/50 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-slate-200 mb-6">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    First Name
                  </label>
                  <Input
                    type="text"
                    value={form.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    placeholder="John"
                    required
                    className="bg-surface border-slate-600 text-slate-200 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Last Name
                  </label>
                  <Input
                    type="text"
                    value={form.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    placeholder="Doe"
                    required
                    className="bg-surface border-slate-600 text-slate-200 focus:border-primary"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  value={form.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="john@example.com"
                  required
                  className="bg-surface border-slate-600 text-slate-200 focus:border-primary"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Company
                </label>
                <Input
                  type="text"
                  value={form.company}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                  placeholder="Your Company"
                  className="bg-surface border-slate-600 text-slate-200 focus:border-primary"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Project Type
                </label>
                <Select value={form.projectType} onValueChange={(value) => handleInputChange("projectType", value)}>
                  <SelectTrigger className="bg-surface border-slate-600 text-slate-200 focus:border-primary">
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="web-development">Web Development</SelectItem>
                    <SelectItem value="mobile-app">Mobile App</SelectItem>
                    <SelectItem value="consulting">Consulting</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <Textarea
                  value={form.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  rows={5}
                  placeholder="Tell me about your project..."
                  required
                  className="bg-surface border-slate-600 text-slate-200 focus:border-primary resize-none"
                />
              </div>
              
              <Button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full bg-gradient-to-r from-primary to-accent text-white py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-primary/25"
              >
                {contactMutation.isPending ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-200 mb-6">Get in touch</h3>
              <p className="text-slate-400 leading-relaxed mb-8">
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and development.
              </p>
            </div>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={info.title}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4"
                  >
                    <div className={`w-12 h-12 ${info.color} rounded-full flex items-center justify-center`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-200">{info.title}</h4>
                      <p className="text-slate-400">{info.value}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            
            <div className="pt-8">
              <Button
                variant="outline"
                className="bg-surface/50 hover:bg-surface/70 text-slate-200 border-slate-600 hover:scale-105 transition-all duration-300"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>
            
            {/* <div className="pt-6">
              <h4 className="font-semibold text-slate-200 mb-4">Follow me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    whileHover={{ scale: 1.1 }}
                    className={`w-10 h-10 ${link.color} rounded-full flex items-center justify-center transition-transform duration-300`}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
