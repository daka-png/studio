
"use client";

export function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <div className="mb-6">
          <span className="font-headline font-bold text-xl tracking-tight">
            DevFolio<span className="text-primary">Pro</span>
          </span>
        </div>
        <p className="text-muted-foreground text-sm mb-4">
          © {new Date().getFullYear()} Alex Rivera. Designed with precision.
        </p>
        <div className="flex items-center justify-center gap-6 text-xs font-code text-muted-foreground uppercase tracking-widest">
          <span>San Francisco</span>
          <span className="w-1 h-1 rounded-full bg-primary" />
          <span>Built with Next.js</span>
          <span className="w-1 h-1 rounded-full bg-primary" />
          <span>Available for hire</span>
        </div>
      </div>
    </footer>
  );
}
