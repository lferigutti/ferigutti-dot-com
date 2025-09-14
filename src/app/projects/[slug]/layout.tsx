export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <article className="max-w-4xl mx-auto px-8 py-8">
      {children}
    </article>
  );
}
