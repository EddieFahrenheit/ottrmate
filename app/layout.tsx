import "./css/main.css";
import LayoutAuthenticated from "../src/layout/Authenticated";

export const metadata = {
  title: "Ottrmate",
  description:
    "Ottrmate - search models and customize GPT to your business needs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`dark overflow-hidden lg:overflow-visible`}>
        <LayoutAuthenticated>{children}</LayoutAuthenticated>
      </body>
    </html>
  );
}
