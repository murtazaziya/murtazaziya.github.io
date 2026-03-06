import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Progress } from './ui/progress';
import { Code, Database, Brain, BarChart3, Globe, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming & Query Languages',
    icon: Code,
    skills: [
      { name: 'SQL', level: 95 },
      { name: 'Python', level: 85 },
      { name: 'R', level: 70 }
    ],
  },
  {
    title: 'Data Engineering',
    icon: Database,
    skills: [
      { name: 'Azure Data Factory', level: 90 },
      { name: 'BigQuery', level: 85 },
      { name: 'Azure SQL', level: 85 },
      { name: 'ETL / ELT Pipelines', level: 90 },
      { name: 'Data Modeling (Fact & Dimension)', level: 85 }
    ],
  },
  {
    title: 'Analytics & Business Intelligence',
    icon: BarChart3,
    skills: [
      { name: 'Power BI', level: 90 },
      { name: 'Data Visualization', level: 85 },
      { name: 'Business Analytics', level: 85 },
      { name: 'Dashboard Development', level: 90 }
    ],
  },
  {
    title: 'Automation & Business Systems',
    icon: Wrench,
    skills: [
      { name: 'PowerApps', level: 85 },
      { name: 'Power Automate', level: 85 },
      { name: 'Workflow Automation', level: 80 },
      { name: 'Process Optimization', level: 85 }
    ],
  },
  {
    title: 'Data Analysis',
    icon: Brain,
    skills: [
      { name: 'Pandas', level: 85 },
      { name: 'Statistical Analysis', level: 80 },
      { name: 'Exploratory Data Analysis', level: 85 },
      { name: 'Business Metrics Analysis', level: 85 }
    ],
  },
  {
    title: 'Tools & Development',
    icon: Globe,
    skills: [
      { name: 'Git / GitHub', level: 80 },
      { name: 'Jupyter Notebook', level: 85 },
      { name: 'VS Code', level: 85 }
    ],
  },
];

export function SkillsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and platforms used to build scalable data and analytics systems
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold">{category.title}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                        }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
