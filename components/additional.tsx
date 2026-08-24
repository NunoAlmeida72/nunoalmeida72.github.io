"use client";

import { Award, Heart, Globe, HeartHandshake, Dumbbell, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function AdditionalInfo() {
  return (
    <section id="additional" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-[2px] bg-primary" />
            <h2 className="text-sm font-medium text-primary uppercase tracking-wider">
              Additional Info
            </h2>
          </div>

          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-balance">
            Extracurriculars, Languages & Soft Skills
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Column 1: Languages & Soft Skills */}
            <div className="space-y-6 md:col-span-1">
              {/* Languages */}
              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="w-5 h-5 text-primary" />
                  <h4 className="font-semibold text-foreground">Languages</h4>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium text-foreground">Portuguese</span>
                      <span className="text-muted-foreground">Native</span>
                    </div>
                    <div className="w-full bg-secondary h-1.5 rounded-full overflow-hidden">
                      <div className="bg-primary h-full rounded-full w-full" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium text-foreground">English</span>
                      <span className="text-muted-foreground">Professional (B2)</span>
                    </div>
                    <div className="w-full bg-secondary h-1.5 rounded-full overflow-hidden">
                      <div className="bg-primary/75 h-full rounded-full w-[80%]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Soft Skills */}
              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <h4 className="font-semibold text-foreground">Soft Skills</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Teamwork",
                    "Problem-solving",
                    "Adaptability",
                    "Communication skills",
                  ].map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-secondary/60 text-muted-foreground border-transparent text-xs hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Column 2 & 3: Extracurriculars, Sports, Volunteering */}
            <div className="space-y-6 md:col-span-2">
              {/* Motorsport Academy */}
              <Card className="group bg-card border-border hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-primary font-medium uppercase tracking-wider block mb-1">
                      Nov 2024
                    </span>
                    <h4 className="text-lg font-semibold text-foreground mb-1">
                      Race Engineering & Motorsport Data Analysis
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      ISEP Motorsport Academy &mdash; Certificate of Participation.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Sports & Scouting */}
              <Card className="group bg-card border-border hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors shrink-0">
                    <Dumbbell className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      Sports & Scouting
                    </h4>
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                        Federated Rowing (2011-2020)
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                        Boy Scout (2010-2016)
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                        7-a-side Football (2023-2024)
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Volunteering */}
              <Card className="group bg-card border-border hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors shrink-0">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-primary font-medium uppercase tracking-wider block mb-1">
                      2020 – 2022
                    </span>
                    <h4 className="text-lg font-semibold text-foreground mb-1">
                      Volunteer &mdash; Coffee Shop
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Trained and integrated new team members while developing interpersonal and customer communication skills.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
