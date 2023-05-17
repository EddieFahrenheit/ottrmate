import "./css/main.css";
import LayoutAuthenticated from "../layout/Authenticated";

export const metadata = {
  title: "Ottrmate",
  description:
    "Ottrmate - search models and customize GPT to your business needs",
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={`dark overflow-hidden lg:overflow-visible`}>
        <LayoutAuthenticated>{children}</LayoutAuthenticated>
      </body>
    </html>
  );
}
