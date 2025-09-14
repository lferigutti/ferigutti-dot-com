import type { MDXComponents } from "mdx/types";
import Image from "next/image";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Custom component overrides
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mb-6 text-white">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-semibold mb-4 mt-8 text-white">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold mb-3 mt-6 text-white">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-semibold mb-2 mt-4 text-white">{children}</h4>
    ),
    p: ({ children }) => (
      <p className="text-lg leading-relaxed mb-4 text-gray-300">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="mb-4 text-gray-300 list-disc list-inside">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="mb-4 text-gray-300 list-decimal list-inside">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="mb-2 text-lg text-gray-300">{children}</li>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-300 mb-4">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="bg-gray-800 px-2 py-1 rounded text-blue-400 text-sm">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto mb-4 text-sm">
        {children}
      </pre>
    ),
    a: ({ children, href }) => (
      <a
        href={href}
        className="text-blue-400 hover:text-blue-300 underline transition-colors"
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
        className="rounded-lg mb-4 shadow-lg"
        style={{ width: "auto", height: "auto" }}
      />
    ),
    hr: () => <hr className="border-gray-700 my-8" />,
    ...components,
  };
}
