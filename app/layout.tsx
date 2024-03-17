import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import QueryProviders from "./QueryProviders";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Taruhan Jaya MasterBinary",
  description:
    "Welcome To Taruhan Jaya MasterBinary. Taruhan Jaya MasterBinary is an investment or stock trading company that was founded in 2009 and is present in almost all countries in the world.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryProviders>
      <html lang='en'>
        <body className={inter.className}>{children}</body>
      </html>
    </QueryProviders>
  );
}
