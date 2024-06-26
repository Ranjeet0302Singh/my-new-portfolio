import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata: Metadata = {
  title: "Ranjeet Singh Rawat",
  description: "Ranjeet Portfolio Website",
};



import StairTransition from "@/components/StairTransition"; // Import the StairTransition component

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTransition /> {/* Use the StairTransition component */}
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
