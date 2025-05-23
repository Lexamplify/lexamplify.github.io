import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
// Removed: import { Times_New_Roman } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

// Removed:
// const timesNewRoman = Times_New_Roman({
//   subsets: ['latin'],
//   weight: ['400', '700'],
//   variable: '--font-times-new-roman',
// });

export const metadata: Metadata = {
  title: 'Lexamplify — AI for Lawyers in India',
  description: 'Lexamplify empowers Indian legal professionals with AI tools for smarter drafting, research, and case management. Join the waitlist today.',
  keywords: 'ai for lawyers, legaltech India, case law AI, legal drafting assistant, Indian legal research, Lexamplify',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <Header />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
