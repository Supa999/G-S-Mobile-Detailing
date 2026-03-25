import type { Metadata } from "next";
import {Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from './components/Header'
import Footer from './components/Footer'

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "G&S Mobile Detailing",
  description: "Luxury detailing service using top-rated products and tools",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black overflow-x-hidden scroll-smooth">
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}
