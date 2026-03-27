import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "../globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Silnik rekomendacji | Colliers Flex",
};

export default function WidgetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={`${openSans.variable} antialiased`}>
      <body className="bg-transparent">{children}</body>
    </html>
  );
}
