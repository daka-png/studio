
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Award, Calendar } from "lucide-react";

const education = [
  {
    school: "Stanford University",
    degree: "M.S. in Computer Science",
    period: "2018 - 2020",
    description: "Focus on Distributed Systems and Artificial Intelligence. Graduated with honors.",
  },
  {
    school: "University of California, Berkeley",
    degree: "B.S. in Electrical Engineering & Computer Science",
    period: "2014 - 2018",
    description: "Coursework in Data Structures, Algorithms, OS, and Database Systems.",
  },
];

const certifications = [
  {
    name: "AWS Certified Solutions Architect - Professional",
    issuer: "Amazon Web Services",
    year: "2023",
  },
  {
    name: "Google Cloud Professional Cloud Architect",
    issuer: "Google",
    year: "2022",
  },
  {
    name: "Certified Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation",
    year: "2021",
  },
];

export function Education() {
  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Academic & Certifications</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-headline font-bold">Education</h3>
            </div>
            
            <div className="space-y-6">
              {education.map((edu, idx) => (
                <div key={idx} className="relative pl-8 border-l-2 border-primary/20">
                  <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-primary" />
                  <h4 className="text-lg font-bold mb-1">{edu.school}</h4>
                  <div className="flex items-center gap-2 text-sm text-primary font-medium mb-2">
                    <Calendar className="w-3.5 h-3.5" />
                    {edu.period}
                  </div>
                  <p className="font-semibold text-muted-foreground mb-2">{edu.degree}</p>
                  <p className="text-sm text-muted-foreground/80 leading-relaxed">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-headline font-bold">Certifications</h3>
            </div>

            <div className="grid gap-4">
              {certifications.map((cert, idx) => (
                <Card key={idx} className="bg-card/40 border-white/5 hover:border-secondary/30 transition-colors">
                  <CardHeader className="p-4">
                    <CardTitle className="text-base font-semibold">{cert.name}</CardTitle>
                    <div className="flex items-center justify-between text-xs text-muted-foreground mt-2">
                      <span>{cert.issuer}</span>
                      <span className="font-code text-secondary">{cert.year}</span>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
