import type { MDXComponents } from "mdx/types";
import Image from "next/image";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Custom component overrides - Minimal styling
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mb-6 text-white tracking-tight">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold mb-4 mt-10 text-white">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold mb-3 mt-6 text-white">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-medium mb-2 mt-4 text-white">{children}</h4>
    ),
    p: ({ children }) => (
      <p className="text-base leading-relaxed mb-4 text-zinc-400">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="mb-4 text-zinc-400 list-disc list-inside space-y-1">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="mb-4 text-zinc-400 list-decimal list-inside space-y-1">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="text-base text-zinc-400">{children}</li>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-zinc-600 pl-4 italic text-zinc-500 mb-4">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="bg-zinc-800 px-1.5 py-0.5 rounded text-zinc-300 text-sm">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl overflow-x-auto mb-4 text-sm">
        {children}
      </pre>
    ),
    a: ({ children, href }) => (
      <a
        href={href}
        className="text-white hover:text-zinc-300 underline underline-offset-2 transition-colors"
      >
        {children}
      </a>
    ),
    img: ({ src, alt, width, height }) => (
      <Image
        src={src || ""}
        alt={alt || ""}
        width={width ? Number(width) : 800}
        height={height ? Number(height) : 600}
        className="rounded-xl mb-4"
        style={{ width: "auto", height: "auto" }}
      />
    ),
    hr: () => <hr className="border-zinc-800 my-10" />,
    ...components,
  };
}
