
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to explore potential collaborations? I&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-headline font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider font-bold mb-1">Email</p>
                  <a href="mailto:giftdaka543@gmail.com" className="text-lg font-medium hover:text-primary transition-colors">
                    giftdaka543@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider font-bold mb-1">Location</p>
                  <p className="text-lg font-medium">Lusaka, Zambia</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider font-bold mb-1">Phone</p>
                  <p className="text-lg font-medium">+260 971 645 445</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 bg-card/40 p-8 rounded-2xl border border-white/5 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium ml-1">Name</label>
                <Input required placeholder="Your Name" className="bg-muted/30 border-white/10" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium ml-1">Email</label>
                <Input required type="email" placeholder="Your Email" className="bg-muted/30 border-white/10" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium ml-1">Subject</label>
              <Input required placeholder="Subject" className="bg-muted/30 border-white/10" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium ml-1">Message</label>
              <Textarea required placeholder="How can I help you?" className="min-h-[150px] bg-muted/30 border-white/10" />
            </div>
            <Button type="submit" className="w-full h-12 font-bold text-base" disabled={loading}>
              {loading ? (
                "Sending..."
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
