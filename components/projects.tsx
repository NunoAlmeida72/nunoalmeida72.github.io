"use client";

import { useState } from "react";
import { Brain, Code, Cpu, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type Project = {
  title: string;
  description: string;
  category: "ai" | "se";
  tags: string[];
  features?: string[];
};

const projects: Project[] = [
  {
    title: "Trading Tomorrow (XAI)",
    description: "Developed an Explainable AI decision-support system for commodity futures. Built an interactive React frontend connected to Java 25 + Drools 9 and SWI-Prolog engines to explain investment decisions.",
    category: "ai",
    tags: ["React", "Java 25", "Drools 9", "SWI-Prolog", "XAI"],
  },
  {
    title: "Next Bet",
    description: "Built a quantitative predictive engine using XGBoost and Genetic Algorithms to identify positive expected value (+EV) sports bets.",
    category: "ai",
    tags: ["XGBoost", "Genetic Algorithms", "Python", "Predictive Modeling"],
  },
  {
    title: "Auto Insurance Fraud Platform",
    description: "Created an end-to-end web platform fine-tuning LLMs (Qwen3, Gemma) for text testimony analysis and YOLOv8 for vehicle damage assessment.",
    category: "ai",
    tags: ["LLMs", "Qwen3", "Gemma", "YOLOv8", "Computer Vision"],
  },
  {
    title: "SIMAGIA & ArgusAI",
    description: "Integrated autonomous robotics (ROS 2, Nav2) with a Multi-Agent System (SPADE) using a TIAGo Lite robot for automated car inspections and fraud detection via LLMs.",
    category: "ai",
    tags: ["ROS 2", "Nav2", "SPADE", "TIAGo Lite", "LLMs", "Robotics"],
  },
  {
    title: "RobDroneGo",
    description: "Prototype fleet management system for robots/drones. Implemented CI/CD pipelines and daily database backups on Linux.",
    category: "se",
    tags: ["Angular", "Node.js", ".NET", "CI/CD", "Linux", "MongoDB"],
  },
  {
    title: "COVID-19 Vaccination System",
    description: "Java 17 application using Domain-Driven Design (DDD) and MVC. Implemented Role-Based Access Control and statistical reporting features to analyze wait times.",
    category: "se",
    tags: ["Java 17", "DDD", "MVC", "RBAC", "Reporting"],
  },
];

export function Projects() {
  const [filter, setFilter] = useState<"all" | "ai" | "se">("all");

  const filteredProjects = projects.filter(
    (project) => filter === "all" || project.category === filter
  );

  return (
    <section id="projects" className="py-20 md:py-28 bg-card/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-[2px] bg-primary" />
            <h2 className="text-sm font-medium text-primary uppercase tracking-wider">
              Projects
            </h2>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
              Academic & Personal Projects
            </h3>

            {/* Filters */}
            <div className="flex bg-secondary/50 p-1 rounded-lg border border-border w-fit">
              <button
                onClick={() => setFilter("all")}
                className={`px-4 py-1.5 text-xs font-medium rounded-md transition-all ${
                  filter === "all"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                All Projects
              </button>
              <button
                onClick={() => setFilter("ai")}
                className={`px-4 py-1.5 text-xs font-medium rounded-md transition-all flex items-center gap-1.5 ${
                  filter === "ai"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Brain className="w-3.5 h-3.5" />
                AI & Robotics
              </button>
              <button
                onClick={() => setFilter("se")}
                className={`px-4 py-1.5 text-xs font-medium rounded-md transition-all flex items-center gap-1.5 ${
                  filter === "se"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Code className="w-3.5 h-3.5" />
                Software Engineering
              </button>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group flex flex-col justify-between p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
              >
                {/* Background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                      {project.category === "ai" ? (
                        <Cpu className="w-5 h-5" />
                      ) : (
                        <Code className="w-5 h-5" />
                      )}
                    </div>
                  </div>

                  <h4 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-secondary/40 text-muted-foreground border-transparent text-[11px] font-normal"
                    >
                      {tag}
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
