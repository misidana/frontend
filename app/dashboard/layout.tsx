import type { Metadata } from "next";
import { Inter } from "next/font/google";
import QueryProviders from "../QueryProviders";
import Sidebar from "../clientComponents/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard | Taruhan Jaya MasterBinary",
  description: "Dashboard Taruhan Jaya MasterBinary",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryProviders>
      <html lang='en'>
        <body className={inter.className}>
          <Sidebar>{children}</Sidebar>
        </body>
      </html>
    </QueryProviders>
  );
}
