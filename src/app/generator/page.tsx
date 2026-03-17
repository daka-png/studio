
"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Sparkles, ArrowLeft, Copy, Check } from "lucide-react";
import Link from "next/link";
import { generateProjectDescription } from "@/ai/flows/generate-project-description";
import { useToast } from "@/hooks/use-toast";

export default function GeneratorPage() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const [copied, setCopied] = useState(false);
  
  const [formData, setFormData] = useState({
    projectName: "",
    technologiesUsed: "",
    projectGoal: "",
    keyFeatures: "",
  });

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await generateProjectDescription(formData);
      setResult(response.description);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to generate description. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    toast({
      title: "Copied!",
      description: "Description copied to clipboard.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <Link href="/" className="inline-flex items-center text-sm text-primary hover:underline mb-8 group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>

          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center text-secondary">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-3xl font-headline font-bold">AI Project Descriptor</h1>
              <p className="text-muted-foreground">Transform technical specs into impactful portfolio copy.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <Card className="bg-card/40 border-white/5">
              <CardHeader>
                <CardTitle className="text-xl">Technical Inputs</CardTitle>
                <CardDescription>Provide details about your project to get started.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleGenerate} className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Project Name</label>
                    <Input 
                      required 
                      value={formData.projectName}
                      onChange={(e) => setFormData({...formData, projectName: e.target.value})}
                      placeholder="e.g. CloudScale Dashboard" 
                      className="bg-muted/30" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Technologies</label>
                    <Input 
                      required 
                      value={formData.technologiesUsed}
                      onChange={(e) => setFormData({...formData, technologiesUsed: e.target.value})}
                      placeholder="e.g. Next.js, AWS, Redis" 
                      className="bg-muted/30" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Project Goal</label>
                    <Input 
                      required 
                      value={formData.projectGoal}
                      onChange={(e) => setFormData({...formData, projectGoal: e.target.value})}
                      placeholder="What problem does it solve?" 
                      className="bg-muted/30" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Key Features</label>
                    <Textarea 
                      required 
                      value={formData.keyFeatures}
                      onChange={(e) => setFormData({...formData, keyFeatures: e.target.value})}
                      placeholder="List 2-3 standout features" 
                      className="bg-muted/30" 
                    />
                  </div>
                  <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold" disabled={loading}>
                    {loading ? "Generating..." : "Generate Description"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="bg-card/40 border-primary/20 min-h-[400px] flex flex-col">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center justify-between">
                    Generated Description
                    {result && (
                      <Button variant="ghost" size="icon" onClick={copyToClipboard} className="text-muted-foreground hover:text-primary">
                        {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                      </Button>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex items-center justify-center">
                  {result ? (
                    <p className="text-lg leading-relaxed text-muted-foreground animate-in fade-in slide-in-from-bottom-2 duration-500">
                      {result}
                    </p>
                  ) : (
                    <div className="text-center text-muted-foreground/50 italic">
                      Fill out the form to generate a professional project description.
                    </div>
                  )}
                </CardContent>
              </Card>

              <div className="p-4 bg-primary/10 rounded-xl border border-primary/20 text-xs text-primary/80">
                <strong>Tip:</strong> Use this tool to quickly draft content for your resume, LinkedIn, or personal site. The AI focuses on professional, impact-driven language.
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
