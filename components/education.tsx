"use client";

import { GraduationCap, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const education = [
  {
    type: "degree",
    title: "Master's in Artificial Intelligence Engineering",
    institution: "ISEP",
    period: "2025 – Present",
    icon: GraduationCap,
  },
  {
    type: "degree",
    title: "Bachelor's in Informatics Engineering",
    institution: "ISEP",
    period: "2020 – 2024",
    icon: GraduationCap,
  },
];

export function Education() {
  return (
    <section id="education" className="py-20 md:py-28 bg-card/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-[2px] bg-primary" />
            <h2 className="text-sm font-medium text-primary uppercase tracking-wider">
              Education
            </h2>
          </div>

          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-balance">
            Academic background
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {education.map((item, index) => (
              <Card
                key={index}
                className="group bg-card border-border hover:border-primary/50 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>

                  <span className="text-xs font-medium text-primary uppercase tracking-wider mb-2 block">
                    {item.period}
                  </span>

                  <h4 className="text-base font-semibold text-foreground mb-2 leading-snug">
                    {item.title}
                  </h4>

                  <p className="text-sm text-muted-foreground">
                    {item.institution}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
