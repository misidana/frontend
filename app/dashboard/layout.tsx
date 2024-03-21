import type { Metadata } from "next";
import { Inter } from "next/font/google";
import QueryProviders from "../QueryProviders";
import Sidebar from "../../components/Sidebar";
import { getServerSession } from "next-auth";
import authOptions from "@/lib/nextauth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard | Suruhanjaya Master Binary",
  description: "Dashboard Suruhanjaya Master Binary",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang='en'>
      <QueryProviders>
        <body className={inter.className}>
          <Sidebar session={session}>{children}</Sidebar>
        </body>
      </QueryProviders>
    </html>
  );
}
