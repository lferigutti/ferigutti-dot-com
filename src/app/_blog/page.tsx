import Link from "next/link";

export default function BlogPage() {
  // Mock blog posts data - replace with real content later
  const featuredPost = {
    title: "Building Modern Web Applications with Next.js and TypeScript",
    excerpt:
      "A comprehensive guide to setting up a production-ready web application with the latest tools and best practices.",
    date: "March 15, 2024",
    readTime: "8 min read",
    tags: ["Next.js", "TypeScript", "React"],
    slug: "building-modern-web-apps",
  };

  const recentPosts = [
    {
      title: "The Future of Frontend Development",
      excerpt:
        "Exploring upcoming trends and technologies that will shape how we build user interfaces.",
      date: "March 10, 2024",
      readTime: "5 min read",
      tags: ["Frontend", "Trends"],
      slug: "future-of-frontend",
    },
    {
      title: "Optimizing React Performance",
      excerpt:
        "Practical tips and techniques for making your React applications faster and more responsive.",
      date: "March 5, 2024",
      readTime: "6 min read",
      tags: ["React", "Performance"],
      slug: "optimizing-react-performance",
    },
    {
      title: "Design Systems in Practice",
      excerpt:
        "How to build and maintain consistent design systems that scale with your team.",
      date: "February 28, 2024",
      readTime: "7 min read",
      tags: ["Design Systems", "UX"],
      slug: "design-systems-practice",
    },
  ];

  return (
    <main className="w-full max-w-6xl mx-auto px-8 py-16 space-y-16">
      {/* Page Header */}
      <section className="text-center space-y-6">
        <h1 className="text-5xl font-bold">Blog</h1>
        <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
          Thoughts on web development, design, and building products that people
          love. Sharing what I&apos;ve learned along the way.
        </p>
      </section>

      {/* Featured Post */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold">Featured Post</h2>
        <article className="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-colors">
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>{featuredPost.date}</span>
              <span>•</span>
              <span>{featuredPost.readTime}</span>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold hover:text-blue-400 transition-colors">
                <Link href={`/blog/${featuredPost.slug}`}>
                  {featuredPost.title}
                </Link>
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                {featuredPost.excerpt}
              </p>
              <div className="flex flex-wrap gap-2">
                {featuredPost.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-blue-600 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium"
              >
                Read More →
              </Link>
            </div>
          </div>
        </article>
      </section>

      {/* Recent Posts */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold">Recent Posts</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold hover:text-blue-400 transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-gray-300">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-700 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 text-sm font-medium"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold">Browse by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "Web Development", count: 12 },
            { name: "React", count: 8 },
            { name: "Design", count: 6 },
            { name: "TypeScript", count: 5 },
            { name: "Performance", count: 4 },
            { name: "UX/UI", count: 7 },
            { name: "Next.js", count: 6 },
            { name: "Tools", count: 3 },
          ].map((category) => (
            <Link
              key={category.name}
              href={`/blog/category/${category.name
                .toLowerCase()
                .replace(/[^a-z0-9]/g, "-")}`}
              className="bg-gray-800 rounded-lg p-4 text-center hover:bg-gray-700 transition-colors group"
            >
              <div className="space-y-1">
                <span className="font-medium group-hover:text-blue-400 transition-colors">
                  {category.name}
                </span>
                <div className="text-sm text-gray-400">
                  {category.count} post{category.count !== 1 ? "s" : ""}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="text-center space-y-6 py-16 bg-gray-800 rounded-xl">
        <h2 className="text-3xl font-bold">Stay Updated</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Get notified when I publish new posts about web development, design,
          and building great products.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
          />
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors">
            Subscribe
          </button>
        </div>
      </section>
    </main>
  );
}
