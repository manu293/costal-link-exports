// imports
import type { Metadata } from "next";
import { Inter } from "next/font/google";

// styles
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Coastal Link Exports - Premier Source for Spices, Coconut, Fresh Fruits and Seafood",
  description:
    "Your Premier Source for Spices and its derivatives, Coconut and its derivatives, Fresh fruits and vegetables, Seafood and a wide range of processed food",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
