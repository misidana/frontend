import type { Metadata } from "next";
import { Inter } from "next/font/google";
import QueryProviders from "../QueryProviders";
import Sidebar from "../../components/Sidebar";
import { getServerSession } from "next-auth";
import authOptions from "@/lib/nextauth";
import AdminSidebar from "@/components/AdminSidedbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Admin | Taruhan Jaya MasterBinary",
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
          <AdminSidebar session={session}>{children}</AdminSidebar>
        </body>
      </html>
    </QueryProviders>
  );
}
