import { motion } from 'motion/react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';

export function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-chart-1/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-chart-2/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-chart-3/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-4 px-4 py-2 bg-accent rounded-full text-sm">
            👋 Welcome to my portfolio
          </div>

          <div className="text-sm sm:text-base text-muted-foreground mb-3">
            Data Analyst • Data Engineer • Analytics Engineer
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground to-foreground/60 bg-clip-text text-transparent">
            Building Scalable
            Data Platforms
            <br />
            <span className="bg-gradient-to-r from-chart-1 via-chart-2 to-chart-3 bg-clip-text text-transparent">
              and Analytics Systems
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Data Engineer and Analytics Engineer specializing in cloud data pipelines, warehouse data modeling, and analytics platforms that power business intelligence and operational decision-making.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Button size="lg" onClick={scrollToProjects} className="group">
              View My Work
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" asChild>
                  <a href="/mziya_de_resume.pdf" target="_blank" rel="noopener noreferrer">
                    Resume
                  </a>
                </Button>
          </div>

          <div className="flex items-center justify-center gap-4">
            <a
              href="https://github.com/murtazaziya"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-accent hover:bg-accent/70 transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/murtaza-ziya-999544170/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-accent hover:bg-accent/70 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="animate-bounce">
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
