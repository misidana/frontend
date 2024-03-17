import type { Metadata } from "next";
import { Inter } from "next/font/google";
import QueryProviders from "../QueryProviders";
import Sidebar from "../../components/Sidebar";
import { getServerSession } from "next-auth";
import authOptions from "@/lib/nextauth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard | Taruhan Jaya MasterBinary",
  description: "Dashboard Taruhan Jaya MasterBinary",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <QueryProviders>
      <html lang='en'>
        <body className={inter.className}>
          <Sidebar session={session}>{children}</Sidebar>
        </body>
      </html>
    </QueryProviders>
  );
}
