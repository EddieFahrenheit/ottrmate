interface LayoutProps {
  children: React.ReactNode;
}

export default async function Layout({ children }: LayoutProps) {
  return (
    <section className={`p-6 xl:max-w-6xl xl:mx-auto`}>{children}</section>
  );
}
