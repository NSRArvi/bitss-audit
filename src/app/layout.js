import { Geist, Geist_Mono, Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/shared/footer/Footer";
import { AuthProvider } from "@/context/AuthContext";
import { CurrencyProvider } from "@/context/CurrencyContext";
import NavbarWrapper from "@/components/shared/NavigationBar/NavbarWrapper";

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

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-Inter",
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
      className={`${barlow_Condensed.variable} ${geistSans.variable}  ${geistMono.variable} ${inter.variable} h-full antialiased`}
    >
      <body>
        <AuthProvider>
          <CurrencyProvider>
            <div aria-hidden="true" />
            <NavbarWrapper />
            <div className="relative z-10">{children}</div>
            <Footer />
          </CurrencyProvider>
        </AuthProvider>

        <Toaster />
      </body>
    </html>
  );
}
