"use client";

import { User, Briefcase, GraduationCap, Zap } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-[2px] bg-primary" />
            <h2 className="text-sm font-medium text-primary uppercase tracking-wider">
              About
            </h2>
          </div>

          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-balance">
            About me
          </h3>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-12 text-pretty">
            I am a Software Developer and Master&apos;s in Artificial Intelligence Engineering candidate. Experienced in Fullstack development, backend architectures, and enterprise ERP modernization using .NET, Vue.js, and SQL. Currently specializing in AI, Machine Learning, and Multi-Agent Systems, with a portfolio of projects spanning predictive quantitative models and autonomous robotics.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: User,
                label: "Developer",
                description: "Fullstack & Backend",
              },
              {
                icon: Briefcase,
                label: "Experience",
                description: "ERP Modernization",
              },
              {
                icon: GraduationCap,
                label: "Education",
                description: "AI Engineering Master's",
              },
              {
                icon: Zap,
                label: "Interests",
                description: "Software Development, AI & Sports",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="group p-5 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">
                  {item.label}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
