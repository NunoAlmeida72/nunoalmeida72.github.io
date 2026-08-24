"use client";

import { Database, Code, Settings, Cpu, Layers, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    icon: Code,
    title: "Programming",
    skills: ["Java", "C#", "Python", "TypeScript", "JavaScript", "Prolog"],
  },
  {
    icon: Layers,
    title: "Frameworks & Tools",
    skills: ["Node.js", "Vue.js", "ASP.NET", ".NET"],
  },
  {
    icon: Database,
    title: "Databases",
    skills: ["SQL Server", "Oracle SQL", "MongoDB"],
  },
  {
    icon: Cpu,
    title: "AI & Data",
    skills: [
      "ROS 2",
      "YOLOv8",
      "LLMs (Qwen3, Gemma)",
      "XGBoost",
      "Pandas",
      "Numpy",
      "Genetic Algorithms",
    ],
  },
  {
    icon: Settings,
    title: "Other Tools",
    skills: ["GitHub", "Bitbucket", "Jira", "Trello", "Postman", "Power BI", "SSRS"],
  },
  {
    icon: Users,
    title: "Methodologies",
    skills: ["Scrum", "Agile"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 bg-card/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-[2px] bg-primary" />
            <h2 className="text-sm font-medium text-primary uppercase tracking-wider">
              Skills
            </h2>
          </div>

          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-balance">
            Technical expertise
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground">
                    {category.title}
                  </h4>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-secondary/80 hover:bg-primary/20 hover:text-primary border-transparent transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
