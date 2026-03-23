import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Biura serwisowane | Colliers",
  description:
    "Doradzamy w wyborze biur serwisowanych i rozwiązań flex — od hot-desków i prywatnych gabinetów po dedykowane moduły dla większych zespołów.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${inter.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
