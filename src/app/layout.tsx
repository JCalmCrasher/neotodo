import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
 variable: "--font-geist-sans",
 subsets: ["latin"]
});

const geistMono = Geist_Mono({
 variable: "--font-geist-mono",
 subsets: ["latin"]
});

export const metadata: Metadata = {
 title: "Create Next App",
 description: "Generated by create next app"
};

export default function RootLayout({
 children
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
  <html lang="en">
   <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
    <main className="flex-grow">{children}</main>
    <footer className="fixed w-full bottom-0 py-4 text-center text-sm text-white">
     <code className="flex justify-center w-full gap-4">
      <span>built with nextjs&neon </span>
      <span>/</span>
      <a
       href="https://x.com/josh_osagie"
       target="_blank"
       rel="noopener noreferrer"
       className="hover:text-gray-700"
      >
       @josh_osagie
      </a>
     </code>
    </footer>
   </body>
  </html>
 );
}
