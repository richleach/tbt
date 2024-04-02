import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trail Therapy: The Beaten Trail",
  description: "Check out our Youtube channel as well",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{
          background:
            "radial-gradient(circle, rgba(147,51,234,1) 0%, rgba(0,0,0,1) 30%)",
        }}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
