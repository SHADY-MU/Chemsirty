import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Kadwa } from "next/font/google";
import "./globals.css";
import Navbar from "./common/Navbar/Navbar";
import Footer from "./common/Footer/Footer";

const kadwa = Kadwa({
  subsets: ['latin'],
  weight: ['400', '700'],
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chemsirty",
  description: "A Learning Platform website",
};

export const viewport: Viewport = {
  themeColor: '#1E0B2E',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      className={`${geistSans.variable} ${geistMono.variable} h-screen antialiased bg-main`}
    >
      <body className={`min-h-screen flex flex-col bg-main m-0 p-0 ${kadwa.className}`}>
        <Navbar />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
