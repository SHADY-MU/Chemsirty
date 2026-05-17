import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Kadwa } from "next/font/google";
import "./globals.css";
import Navbar from "./common/Navbar/Navbar";
import Footer from "./common/Footer/Footer";
import "react-loading-skeleton/dist/skeleton.css";

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
  title: {
    default: "Chemsirty",
    template: "%s | Chemsirty",
  },

  description: "منصة Chemsirty لتعلم الكيمياء مع محمد الشيخ، كورسات شاملة ومحاضرات تفاعلية تساعدك على التفوق الدراسي.",

  keywords: [
    "Chemsirty", "كيمياء", "منصة تعليمية", "كورسات كيمياء",
    "محمد الشيخ", "مواد دراسية", "تعليم اونلاين", "ثانوية عامة",
    "chemistry courses", "online learning", "Mohammed Al-Sheikh",
  ],

  authors: [{ name: "Mohammed Al-Sheikh" }],
  creator: "Shady Mustafa",
  applicationName: "Chemsirty",
  category: "education",
  themeColor: "#1E0B2E",          

  metadataBase: new URL("https://chemsirty-pbip.vercel.app"),

  openGraph: {
    type: "website",
    locale: "ar_EG",
    url: "https://chemsirty-pbip.vercel.app",
    siteName: "Chemsirty",
    title: "Chemsirty | منصة تعليم الكيمياء",
    description: "تعلم الكيمياء من خلال كورسات ومحاضرات احترافية مع محمد الشيخ.",
    images: [
      {
        url: "/MR.jpg",
        width: 1200,
        height: 630,
        alt: "Chemsirty منصة تعليم الكيمياء",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Chemsirty | الشيخ في الكيمياء",
    description: "منصة متخصصة في شرح الكيمياء بطريقة حديثة وتفاعلية.",
    images: ["/MR.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
