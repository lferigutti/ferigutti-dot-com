import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex justify-end space-x-8 py-6 px-8 border-b border-gray-700">
      <Link href="/" className="text-gray-700 hover:text-blue-600">
        Home
      </Link>
      <Link href="/projects" className="text-gray-700 hover:text-blue-600">
        Projects
      </Link>
      <Link href="/blog" className="text-gray-700 hover:text-blue-600">
        Blog
      </Link>
      <Link href="/about" className="text-gray-700 hover:text-blue-600">
        About
      </Link>
      <Link href="/contact" className="text-gray-700 hover:text-blue-600">
        Contact
      </Link>
    </nav>
  );
}
