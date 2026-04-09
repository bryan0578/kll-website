import type {Metadata} from 'next';
import './globals.css';
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: 'Kentucky Lawn and Leaf | Landscaping in Cincinnati & NKY',
  description: 'Professional landscaping and lawn care services for Cincinnati and Northern Kentucky. Call 513-703-8159 for a free quote.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={cn("font-sans scroll-smooth", geist.variable)}>
      <body className="min-h-screen flex flex-col font-sans antialiased" suppressHydrationWarning>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
