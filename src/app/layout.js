import { Geist, Geist_Mono, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Home/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const barlow_Condensed = Barlow_Condensed({
  variable: "--font-Barlow_Condensed",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "BITSS Audit",
  description:
    "Professional security audits for smart contracts, wallets, exchanges, and blockchain systems. Identify vulnerabilities and build trust.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${barlow_Condensed.variable} ${geistSans.variable}  ${geistMono.variable} h-full antialiased`}>
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
