import { motion } from 'motion/react';
import { X, Github, ExternalLink, Calendar } from 'lucide-react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import type { Project } from './ProjectsShowcase';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', duration: 0.5 }}
        className="bg-background rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-64 sm:h-80">
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-background/90 rounded-full hover:bg-background transition-colors"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="absolute bottom-6 left-6 right-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
              {project.title}
            </h2>
            {project.metrics && (
              <div className="flex flex-wrap gap-3">
                {project.metrics.map((metric, i) => (
                  <div
                    key={i}
                    className="bg-background/90 backdrop-blur-sm px-4 py-2 rounded-lg"
                  >
                    <div className="text-sm font-semibold">{metric.value}</div>
                    <div className="text-xs text-muted-foreground">{metric.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="p-6 sm:p-8 overflow-y-auto max-h-[calc(90vh-20rem)]">
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">About This Project</h3>
            <p className="text-muted-foreground leading-relaxed">{project.longDescription}</p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-sm">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {project.githubUrl && (
              <Button asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  View on GitHub
                </a>
              </Button>
            )}
            {project.liveUrl && (
              <Button variant="outline" asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </a>
              </Button>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
