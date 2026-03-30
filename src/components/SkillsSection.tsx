import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Progress } from './ui/progress';
import { Code, Database, Brain, BarChart3, Globe, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming & Query Languages',
    icon: Code,
    skills: [
      { name: 'SQL'},
      { name: 'Python'},
      { name: 'R'}
    ],
  },
  {
    title: 'Data Engineering',
    icon: Database,
    skills: [
      { name: 'Azure Data Factory'},
      { name: 'BigQuery'},
      { name: 'Azure SQL'},
      { name: 'ETL / ELT Pipelines'},
      { name: 'Data Modeling (Fact & Dimension)'},
      { name: 'dbt (Data Build Tool)'}
    ],
  },
  {
    title: 'Analytics & Business Intelligence',
    icon: BarChart3,
    skills: [
      { name: 'Power BI'},
      { name: 'Data Visualization'},
      { name: 'Business Analytics' },
      { name: 'Dashboard Development'}
    ],
  },
  {
    title: 'Automation & Business Systems',
    icon: Wrench,
    skills: [
      { name: 'PowerApps'},
      { name: 'Power Automate'},
      { name: 'Workflow Automation'},
      { name: 'Process Optimization'}
    ],
  },
  {
    title: 'Data Analysis',
    icon: Brain,
    skills: [
      { name: 'Pandas'},
      { name: 'Statistical Analysis'},
      { name: 'Exploratory Data Analysis'},
      { name: 'Business Metrics Analysis'}
    ],
  },
  {
    title: 'Tools & Development',
    icon: Globe,
    skills: [
      { name: 'Git / GitHub'},
      { name: 'Jupyter Notebook'},
      { name: 'VS Code'}
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
                        </div>
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
