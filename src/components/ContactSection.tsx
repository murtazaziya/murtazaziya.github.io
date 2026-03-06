import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

export function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ziya.murtaza141@gmail.com",
      href: "mailto:ziya.murtaza141@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/murtaza-ziya",
      href: "https://linkedin.com/in/murtaza-ziya",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/murtazaziya",
      href: "https://github.com/murtazaziya",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pune, India",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/30">
      <div className="max-w-md mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Contact</h2>
          <p className="text-lg text-muted-foreground">
            The easiest way to reach me.
          </p>
        </motion.div>

        <Card className="p-8 max-w-md mx-auto">
          <div className="space-y-4 flex flex-col items-center">
            {contactInfo.map((info) => {
              const Icon = info.icon;

              const content = (
                <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-accent/50 transition-colors w-full">
                  <Icon className="h-5 w-5 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">
                      {info.label}
                    </div>
                    <div className="font-medium">{info.value}</div>
                  </div>
                </div>
              );

              return info.href ? (
                <a
                  key={info.label}
                  href={info.href}
                  className="w-full"
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                >
                  {content}
                </a>
              ) : (
                <div key={info.label}>{content}</div>
              );
            })}
          </div>
        </Card>
      </div>
    </section>
  );
}