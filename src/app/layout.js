import { Geist, Geist_Mono, Inter, Michroma } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Home/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
});
const michroma = Michroma({
  variable: "--font-michroma",
  weight: ["400"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "BITSS",
  description: "Next.js with Nebula Dark Mode",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${michroma.variable} ${inter.variable} ${geistSans.variable}  ${geistMono.variable} h-full antialiased`}>
      <body className="h-full">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="nebula-bg" aria-hidden="true" />
          <Navbar />
          <div className="relative z-10">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
