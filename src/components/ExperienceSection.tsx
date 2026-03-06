import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Briefcase, Award, GraduationCap } from 'lucide-react';

const experiences = [
  {
    id: "1",
    role: "Analytics Engineer",
    company: "American Technology Consulting",
    period: "Jun 2023 - Oct 2025",
    description:
      "Delivered analytics solutions for enterprise clients by designing scalable warehouse models and building multi-tenant reporting platforms used across large organizations.",
    achievements: [
      "Redesigned BigQuery warehouse fact and dimension tables improving data accuracy by 40%",
      "Reduced reporting query time by 30% through optimized data modeling",
      "Built and maintained 20+ Power BI dashboards used by enterprise clients",
      "Developed Python ETL pipelines for API data ingestion and analytics workflows",
      "Collaborated with product, engineering, and client teams to deliver analytics solutions"
    ],
    tags: ["BigQuery", "SQL", "Power BI", "Python", "Data Modeling"]
  },
  {
    id: "2",
    role: "Data Engineer",
    company: "Onward Technologies",
    period: "Mar 2021 - Aug 2022",
    description:
      "Designed and implemented cloud data pipelines integrating operational and financial datasets across multiple international business units.",
    achievements: [
      "Built Azure Data Factory pipelines integrating financial and operational data",
      "Developed Azure SQL and Synapse warehouse models for enterprise reporting",
      "Enabled revenue analytics across 100+ client accounts and $300M annual revenue",
      "Built Power BI dashboards providing executive-level operational insights"
    ],
    tags: ["Azure Data Factory", "Azure SQL", "Synapse", "Power BI", "ELT"]
  },
  {
    id: "3",
    role: "Data & Systems Analyst",
    company: "Alfa Facade Systems",
    period: "Apr 2020 - Mar 2021",
    description:
      "Built automation and internal data systems to streamline operational processes and improve reporting visibility.",
    achievements: [
      "Developed PowerApps and Power Automate workflows for CapEx and OpEx approvals",
      "Reduced approval cycle time from roughly 5 days to 1 day",
      "Improved operational transparency and process tracking",
      "Built internal reporting systems using SQL"
    ],
    tags: ["PowerApps", "Power Automate", "SQL", "Workflow Automation"]
  }
];

const education = [
  {
    id: "edu1",
    degree: "MSc Data Science",
    school: "Stevens Institute of Technology",
    period: "2022 - 2024",
    description:
      "Graduate program focused on machine learning, statistical modeling, and large-scale data analysis."
  },
  {
    id: "edu2",
    degree: "Bachelor of Technology (Electronics Engineering)",
    school: "Vishwakarma Institute of Technology",
    period: "2017 - 2021",
    description:
      "Engineering program with strong foundations in mathematics, programming, and analytical problem solving."
  }
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Experience & Background
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional experience building data pipelines, analytics platforms,
            and business intelligence systems.
          </p>
        </motion.div>

        {/* Work Experience */}

        <div className="mb-16">
          <div className="flex items-center gap-2 mb-8">
            <Briefcase className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-semibold">Work Experience</h3>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow relative overflow-hidden">

                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-chart-1 via-chart-2 to-chart-3" />

                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h4 className="text-xl font-semibold">{exp.role}</h4>
                      <p className="text-muted-foreground">{exp.company}</p>
                    </div>

                    <Badge variant="outline" className="w-fit">
                      {exp.period}
                    </Badge>
                  </div>

                  <p className="text-muted-foreground mb-4">
                    {exp.description}
                  </p>

                  <div className="mb-4">
                    <p className="text-sm font-semibold mb-2">
                      Key Achievements:
                    </p>

                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start">
                          <span className="mr-2 mt-1.5">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}

        <div>
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-semibold">Education</h3>
          </div>

          <div className="space-y-4">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold">{edu.degree}</h4>

                    <Badge variant="outline" className="text-xs">
                      {edu.period}
                    </Badge>
                  </div>

                  <p className="text-sm text-muted-foreground mb-1">
                    {edu.school}
                  </p>

                  <p className="text-sm text-muted-foreground">
                    {edu.description}
                  </p>

                </Card>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}