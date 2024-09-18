import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Paw Pics",
  description: "Paw Pics is a community dedicated to showcasing the cutest, fluffiest, and most adorable dog paws around.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/bxg0kan.css"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Sora:wght@100..800&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-darkGreen min-h-screen flex flex-col">
        <Navbar />
        <div className="flex flex-grow w-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
