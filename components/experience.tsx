"use client";

import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Junior Software Developer",
    subtitle: "Backend & Data Focus",
    company: "Sistrade",
    period: "Sep 2024 – Present",
    description: [
      "Developed ERP features with a focus on data structuring.",
      "Designed custom analytical reports using SSRS and complex SQL queries.",
      "Developed backend logic for employee portal time-tracking data ingestion.",
    ],
  },
  {
    title: "Software Development Intern",
    company: "Sistrade",
    period: "Mar 2024 – Jun 2024",
    description: [
      "Integrated interactive dashboards for monitoring operational data.",
      "Contributed to onboarding software workflows in .NET.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-[2px] bg-primary" />
            <h2 className="text-sm font-medium text-primary uppercase tracking-wider">
              Experience
            </h2>
          </div>

          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-balance">
            Professional journey
          </h3>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-[2px] bg-border" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 md:pl-20">
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-8 top-0 w-[2px] h-full -translate-x-[calc(50%-1px)]">
                    <div className="w-4 h-4 rounded-full bg-primary border-4 border-background absolute -left-[7px] top-1" />
                  </div>

                  <div className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-3">
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-primary">
                          {exp.period}
                        </span>
                      </div>
                      <span className="hidden md:block text-muted-foreground">
                        •
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {exp.company}
                      </span>
                    </div>

                    <h4 className="text-xl font-semibold text-foreground mb-1">
                      {exp.title}
                    </h4>
                    {exp.subtitle && (
                      <p className="text-sm text-muted-foreground mb-4">
                        {exp.subtitle}
                      </p>
                    )}

                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
