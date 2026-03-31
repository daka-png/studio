
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export const metadata: Metadata = {
  title: 'Eng.DAKA GIFT | Professional Showcase',
  description: 'A sophisticated and modern presentation of DAKA GIFT.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const bgImg = PlaceHolderImages.find(img => img.id === "wildlife-bg");

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Source+Code+Pro:wght@400;600&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground relative">
        {/* Full Background Wildlife Image */}
        <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden">
          <Image
            src={bgImg?.imageUrl || ""}
            alt="Wildlife Background"
            fill
            className="object-cover opacity-15 brightness-[0.3] contrast-[1.1]"
            priority
            data-ai-hint="wildlife animals"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background" />
        </div>
        
        <div className="relative z-10">
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
