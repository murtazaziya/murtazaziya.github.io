import { useState } from 'react';
import { motion } from 'motion/react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';


export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: 'ml' | 'engineering' | 'analytics' | 'all';
  tags: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  metrics?: {
    label: string;
    value: string;
  }[];
}

const projects: Project[] = [
  {
    id: "1",
    title: "Enterprise Analytics Platform",
    description:
      "Analytics platform supporting 100K+ users with scalable warehouse models and Power BI reporting.",
    longDescription:
      "Built analytics solutions for a large enterprise learning platform used by more than 100,000 users. Redesigned BigQuery warehouse models including fact and dimension tables to improve query performance and data accuracy. Developed over 20 Power BI dashboards used by clients to track engagement, platform usage, and performance metrics. Implemented optimized data models reducing query time by 30% and improving reporting accuracy by 40%.",
    category: "analytics",
    tags: ["BigQuery", "SQL", "Power BI", "Data Modeling", "Analytics Engineering"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    metrics: [
      { label: "Platform Users", value: "100K+" },
      { label: "Dashboards Built", value: "20+" },
      { label: "Query Performance", value: "+30%" },
    ],
  },

  {
    id: "2",
    title: "Azure Data Engineering Pipeline",
    description:
      "Cloud data pipeline integrating financial and operational data across global business units.",
    longDescription:
      "Designed and implemented Azure Data Factory pipelines to integrate financial and operational data across multiple international business units. Built Azure SQL and Synapse warehouse models enabling revenue analysis across more than 100 client accounts and $300M in annual revenue. Developed Power BI dashboards for executives providing real-time business performance insights.",
    category: "engineering",
    tags: ["Azure Data Factory", "Azure SQL", "Power BI", "ELT"],
    image:
      "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1200&auto=format&fit=crop",
    githubUrl:
      "https://github.com/murtazaziya/enterprise-revenue-analytics-warehouse",
    metrics: [
      { label: "Client Accounts", value: "100+" },
      { label: "Revenue Tracked", value: "$300M+" },
      { label: "Reporting Speed", value: "+30%" },
    ],
  },

  {
    id: "3",
    title: "Automated Business Workflow System",
    description:
      "Automation system reducing internal approval processes from 5 days to 1 day.",
    longDescription:
      "Developed an internal automation platform using PowerApps and Power Automate to manage CapEx and OpEx approval workflows. The system replaced manual approval processes and improved operational efficiency across departments. Approval cycles were reduced from approximately five days to one day while improving transparency and process tracking.",
    category: "engineering",
    tags: ["PowerApps", "Power Automate", "Workflow Automation", "Business Systems"],
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
    metrics: [
      { label: "Approval Time", value: "5d → 1d" },
      { label: "Automation", value: "70% faster" },
    ],
  },

  {
    id: "4",
    title: "Retail Analytics Case Study",
    description:
      "Retail transaction analysis identifying benchmark stores and measuring trial performance.",
    longDescription:
      "Analyzed retail transaction datasets as part of the Quantium Data Analytics simulation. Identified benchmark stores for testing layout changes and conducted uplift analysis to measure the performance impact of store trials. Delivered analytical reports highlighting customer purchasing patterns and providing data-driven recommendations.",
    category: "analytics",
    tags: ["Python", "Data Analysis", "Retail Analytics", "Statistical Analysis"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    metrics: [
      { label: "Dataset", value: "Retail Transactions" },
      { label: "Analysis", value: "Customer Behavior" },
    ],
  },
];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "engineering", label: "Data Engineering" },
  { id: "analytics", label: "Analytics" },
];

interface ProjectsShowcaseProps {
  onProjectClick?: (project: Project) => void;
}

export function ProjectsShowcase({ onProjectClick }: ProjectsShowcaseProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of data engineering and analytics systems I have built across enterprise platforms
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category.id)}
              className="transition-all"
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer h-full flex flex-col">
                <div
                  onClick={() => onProjectClick?.(project)}
                  className="flex flex-col h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    {project.metrics && (
                      <div className="absolute bottom-3 left-3 right-3 flex gap-2">
                        {project.metrics.map((metric, i) => (
                          <div
                            key={i}
                            className="bg-background/90 backdrop-blur-sm px-3 py-1 rounded-md text-xs"
                          >
                            <div className="font-semibold">{metric.value}</div>
                            <div className="text-muted-foreground">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 flex-1">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 4).map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 4 && (
                        <Badge variant="outline">+{project.tags.length - 4}</Badge>
                      )}
                    </div>

                    <div className="flex gap-2">
                      {project.githubUrl && (
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          onClick={(e) => e.stopPropagation()}
                        >
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          onClick={(e) => e.stopPropagation()}
                        >
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
