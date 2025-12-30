import BackToNav from "@/components/ui/BackToNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-4xl mx-auto px-8 py-12">
      <BackToNav title="Back to Projects" href="/projects" />
      <article>{children}</article>
    </div>
  );
}
