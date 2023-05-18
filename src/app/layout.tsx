import "./css/main.css";
import Layout from "../layout/Layout";

import { getServerSession } from "next-auth";
import { authOptions } from "../lib/auth";

export const metadata = {
  title: "Ottrmate",
  description:
    "Ottrmate - search models and customize GPT to your business needs",
};

interface LayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: LayoutProps) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={`dark overflow-hidden lg:overflow-visible`}>
        <Layout session={session}>{children}</Layout>
      </body>
    </html>
  );
}