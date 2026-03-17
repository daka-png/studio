
"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Layers, Cpu, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["TypeScript", "JavaScript", "Python", "Go", "Java", "SQL", "C++"],
  },
  {
    title: "Frameworks",
    icon: Layers,
    skills: ["React", "Next.js", "Node.js", "Express", "Django", "Tailwind CSS", "Spring Boot"],
  },
  {
    title: "Cloud & Infrastructure",
    icon: Cpu,
    skills: ["AWS", "GCP", "Docker", "Kubernetes", "Terraform", "CI/CD", "PostgreSQL"],
  },
  {
    title: "Tools & Methodologies",
    icon: Wrench,
    skills: ["Git", "Agile", "Jira", "Figma", "Unit Testing", "Microservices", "System Design"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Technical Expertise</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.title} className="bg-card/50 border-white/5 hover:border-primary/50 transition-colors shadow-none">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <category.icon className="w-5 h-5" />
                </div>
                <CardTitle className="text-lg font-headline font-semibold">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2 pt-4">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-muted/50 text-xs font-code font-medium py-1 px-3 border-white/5">
                    {skill}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
