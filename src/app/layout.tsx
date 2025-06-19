import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amit Yadav - Full Stack Developer & Tech Leader",
  description: "Full Stack Developer with expertise in React, Node.js, and cloud technologies. Building scalable web applications and leading technical teams.",
  keywords: ["Full Stack Developer", "React", "Node.js", "JavaScript", "TypeScript", "Web Development", "Software Engineer"],
  authors: [{ name: "Amit Yadav" }],
  creator: "Amit Yadav",
  publisher: "Amit Yadav",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://amityadav.dev",
    title: "Amit Yadav - Full Stack Developer & Tech Leader",
    description: "Full Stack Developer with expertise in React, Node.js, and cloud technologies.",
    siteName: "Amit Yadav Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Amit Yadav - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amit Yadav - Full Stack Developer & Tech Leader",
    description: "Full Stack Developer with expertise in React, Node.js, and cloud technologies.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
      >
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
