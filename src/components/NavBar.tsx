'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";


const navItems = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  // { name: "Blog", path: "/blog" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function NavBar() {
  const pathname = usePathname();
  const navBarClass = (path: string) => pathname === path ? "text-blue-800 font-semibold" : "text-gray-700 hover:text-blue-700";


  return (
    <nav className="flex justify-between items-center space-x-8 py-4 px-8 border-b border-gray-700">
      <Link href="/" className="flex items-center">
        <Image src="/logo-dark.png" alt="Logo" width={150} height={120} />
      </Link>
      <div className="flex space-x-8">
        {navItems.map((item) => (
          <Link key={item.name} href={item.path} className={navBarClass(item.path)}>
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
