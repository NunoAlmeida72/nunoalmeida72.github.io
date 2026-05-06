"use client";

import { Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Geometric Grid Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(100,130,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(100,130,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(100,130,255,0.08),transparent_70%)]" />
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 md:px-6 pt-20 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-1.5 text-xs font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
              Open to opportunities
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4 text-balance">
            Nuno Almeida
          </h1>

          <h2 className="text-xl md:text-2xl font-medium text-primary mb-6">
            Junior Software Developer & Aspiring Data Engineer
          </h2>

          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed text-pretty">
            Combining software engineering best practices with data analysis and artificial intelligence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="group bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <a href="mailto:nunoramosneves@gmail.com">
                <Mail className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                Contact Me
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="group border-border hover:border-primary hover:bg-primary/5"
            >
              <a href="/NunoAlmeidaCV.pdf" download="NunoAlmeidaCV.pdf">
                <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                Download CV
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
