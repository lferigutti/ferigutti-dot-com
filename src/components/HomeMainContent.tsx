export default function HomeMainContent() {
  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <section
        id="what-i-do"
        className="max-w-3xl mx-auto py-16 px-8 text-left"
      >
        <h2 className="text-2xl font-semibold mb-6">What I do</h2>
        <p className="mb-4">
          Core developer of an early-stage web app, co-leading product and
          frontend.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Frontend UX and design systems</li>
          <li>Full-stack prototyping (React / Next.js / Python)</li>
          <li>Building and iterating fast with small teams</li>
        </ul>
      </section>
    </main>
  );
}
