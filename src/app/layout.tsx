import "../css/main.css";
import Layout from "../layout/Layout";

import { getServerSession } from "next-auth";
import { authOptions } from "../lib/auth";

export const metadata = {
  title: "Ottrmate",
  description:
    "Ottrmate - a playground for all things machine learning-related",
};

interface LayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: LayoutProps) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={`dark overflow-hidden lg:overflow-visible`}>
        {session ? (
          <Layout session={session}>{children}</Layout>
        ) : (
          <Layout>{children}</Layout>
        )}
      </body>
    </html>
  );
}
