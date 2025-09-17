import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center space-x-8 py-4 px-8 border-b border-gray-700">
      <Link href="/" className="flex items-center">
        <Image src="/logo-dark.png" alt="Logo" width={150} height={120} />
      </Link>
      <div className="flex space-x-8">
        <Link href="/" className="text-gray-700 hover:text-blue-600">
          Home
        </Link>
        <Link href="/projects" className="text-gray-700 hover:text-blue-600">
          Projects
        </Link>
        {/* <Link href="/blog" className="text-gray-700 hover:text-blue-600">
        Blog
      </Link> */}
        <Link href="/about" className="text-gray-700 hover:text-blue-600">
          About
        </Link>
        <Link href="/contact" className="text-gray-700 hover:text-blue-600">
          Contact
        </Link>
      </div>
    </nav>
  );
}
