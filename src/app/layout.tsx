import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
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
    <html lang="pl" className={`${openSans.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
