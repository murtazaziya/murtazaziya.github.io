import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand */}
          <div>
            <h3 className="font-semibold mb-3">Murtaza Ziya</h3>
            <p className="text-sm text-muted-foreground">
              Data Engineer focused on building scalable data pipelines,
              analytics platforms, and data models that enable better
              decision making.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#home" className="hover:text-foreground transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-foreground transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-foreground transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-foreground transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-3">Connect</h4>
            <div className="flex gap-3">

              <a
                href="https://github.com/murtazaziya"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-accent rounded-lg hover:bg-accent/70 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/murtaza-ziya/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-accent rounded-lg hover:bg-accent/70 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>

              <a
                href="mailto:ziya.murtaza141@gmail.com"
                className="p-2 bg-accent rounded-lg hover:bg-accent/70 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}