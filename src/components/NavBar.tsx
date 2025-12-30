'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";


const navItems = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Blog", path: "/blog" },
];

export default function NavBar() {
  const pathname = usePathname();
  const navBarClass = (path: string) => 
    pathname === path 
      ? "text-white font-medium" 
      : "text-zinc-400 hover:text-white";

  return (
    <nav className="flex justify-between items-center py-6 px-8 max-w-6xl mx-auto w-full">
      <Link href="/" className="flex items-center">
        <Image src="/logo-dark.png" alt="Logo" width={120} height={96} />
      </Link>
      <div className="flex items-center gap-8">
        {navItems.map((item) => (
          <Link 
            key={item.name} 
            href={item.path} 
            className={`text-sm transition-colors ${navBarClass(item.path)}`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
