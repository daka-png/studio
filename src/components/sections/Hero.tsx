
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const profilePic = PlaceHolderImages.find(img => img.id === "profile-pic");

  return (
    <section id="about" className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-1/2 bg-primary/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 -z-10 w-1/3 h-1/3 bg-secondary/10 blur-[120px] rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center text-center">
        <div className="relative mb-8 group">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
          <div className="relative w-32 h-32 md:w-44 md:h-44 rounded-full border-2 border-primary/20 p-1">
            <Image
              src={profilePic?.imageUrl || ""}
              alt="Developer Profile"
              width={176}
              height={176}
              className="rounded-full object-cover"
              data-ai-hint="professional portrait"
              priority
            />
          </div>
        </div>

        <h1 className="font-headline text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
          Hello, I&apos;m <span className="gradient-text">Alex Rivera</span>
        </h1>
        <p className="font-headline text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl font-medium">
          Senior Full Stack Engineer specializing in building scalable distributed systems and high-performance web applications.
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <Button className="rounded-full px-8 h-12 text-base font-semibold" asChild>
            <a href="#contact">Get in touch</a>
          </Button>
          <Button variant="outline" className="rounded-full px-8 h-12 text-base font-semibold group" asChild>
            <a href="#projects">
              View Projects
              <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </a>
          </Button>
        </div>

        <div className="flex items-center gap-6">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
