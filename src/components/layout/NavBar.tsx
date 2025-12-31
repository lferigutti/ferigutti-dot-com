'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "../ui/ThemeToggle";
import { useEffect, useState } from "react";


const navItems = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Blog", path: "/blog" },
];

export default function NavBar() {
  const [isDark, setIsDark] = useState(true)
  const pathname = usePathname();
  
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = savedTheme === "dark" || !savedTheme;
    setIsDark(prefersDark);
    document.documentElement.classList.toggle("light", !prefersDark);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    document.documentElement.classList.toggle("light", !newIsDark);
    localStorage.setItem("theme", newIsDark ? "dark" : "light");
  };
  
  const navBarClass = (path: string) => 
    pathname === path 
      ? "text-white font-medium" 
      : "text-zinc-400 hover:text-white";

  return (
    <nav className="flex justify-between items-center py-6 px-8 max-w-6xl mx-auto w-full">
      <Link href="/" className="flex items-center">
        <Image src={isDark ? "/logo-dark.png" : "/logo-light.png"} alt="Logo" width={120} height={96} />
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
        <ThemeToggle
          isDark={isDark}
          handleToggleTheme={toggleTheme}
        />
      </div>
    </nav>
  );
}
