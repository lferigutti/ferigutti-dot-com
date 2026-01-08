"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { HiOutlineGlobeAlt } from "react-icons/hi2";

export default function LanguageSwitcher({ currentLang }: { currentLang: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const toggleLanguage = (lang: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("lang", lang);
    router.push(`${pathname}?${params.toString()}`);
  };

  const languages = [
    { id: "en", label: "English" },
    { id: "es", label: "Español" },
  ];

  return (
    <div className="flex items-center gap-4 mb-10">
      <div className="flex p-1 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-full w-fit">
        {languages.map((lang) => (
          <button
            key={lang.id}
            onClick={() => toggleLanguage(lang.id)}
            className={`
              relative px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300
              ${currentLang === lang.id 
                ? "text-white bg-zinc-800 shadow-sm" 
                : "text-zinc-500 hover:text-zinc-300"
              }
            `}
          >
            {lang.label}
          </button>
        ))}
      </div>
    </div>
  );
}
