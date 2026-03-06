import { motion } from 'motion/react';
import { Card } from './ui/card';
import { User, Target, Lightbulb, TrendingUp } from 'lucide-react';

const aboutPoints = [
  {
    icon: User,
    title: "Who I Am",
    description:
      "I am a Data Engineer and Analytics Engineer with experience building cloud data platforms, scalable ETL pipelines, and analytics solutions. My work focuses on transforming raw operational data into reliable data models and business intelligence systems that support decision-making.",
  },
  {
    icon: Target,
    title: "What I Do",
    description:
      "I design and build end-to-end data systems including data ingestion pipelines, warehouse data models, and BI dashboards. My experience spans Azure Data Factory pipelines, SQL data modeling, BigQuery warehouse optimization, and Power BI analytics solutions.",
  },
  {
    icon: Lightbulb,
    title: "My Approach",
    description:
      "I focus on solving business problems with well-structured data systems. My process begins with understanding the business workflow, designing reliable data pipelines, building scalable warehouse models, and delivering analytics dashboards that stakeholders can trust.",
  },
  {
    icon: TrendingUp,
    title: "My Impact",
    description:
      "My work has supported analytics platforms used by over 100,000 users, improved warehouse query performance by 30%, and increased data accuracy by 40% through optimized data modeling and pipeline design.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building scalable data pipelines, warehouse models, and analytics systems that turn operational data into business insights
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {aboutPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{point.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="p-8 bg-gradient-to-br from-chart-1/10 via-chart-2/10 to-chart-3/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold mb-1">4+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold mb-1">20+</div>
                <div className="text-sm text-muted-foreground">Dashboards Built</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold mb-1">100K+</div>
                <div className="text-sm text-muted-foreground">Platform Users Supported</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold mb-1">40%</div>
                <div className="text-sm text-muted-foreground">Data Accuracy Improvement</div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
