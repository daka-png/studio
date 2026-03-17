
"use client";

import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const projects = [
  {
    id: "project-1",
    title: "DICELABS INNOVATION ",
    description: ".",
    tech: ["Next.js", "PYTHON", "", "Node.js"],
    live: "#",
    github: "https://dice-labs.vercel.app/",
  },
  {
    id: "project-2",
    title: "Nexus Commerce",
    description: "High-performance e-commerce engine designed for scale. Features include headless CMS integration, advanced filtering, and instant edge-search capabilities.",
    tech: ["TypeScript", "GraphQL", "PostgreSQL", "Tailwind"],
    live: "#",
    github: "#",
  },
  {
    id: "project-3",
    title: "TRAFFIC TAXI APP",
    description: "Cross-platform mobile application for personalized VEHICLE tracking. Includesbest routes,, biometric data sync, and AI-driven route suggestions.",
    tech: ["React Native", "Firebase", "Python", "FastAPI"],
    live: "#",
    github: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Key Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my most significant work, combining technical complexity with user-centric design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const projectImg = PlaceHolderImages.find(img => img.id === project.id);
            return (
              <Card key={project.id} className="overflow-hidden flex flex-col group border-white/5 bg-card/40 hover:translate-y-[-4px] transition-all duration-300">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={projectImg?.imageUrl || ""}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint={projectImg?.imageHint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
                <CardHeader>
                  <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[10px] font-code uppercase tracking-wider text-primary font-bold">
                        #{t}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="gap-3">
                  <Button variant="outline" size="sm" className="w-full text-xs font-semibold" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-3.5 h-3.5 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="w-full text-xs font-semibold" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-3.5 h-3.5 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
