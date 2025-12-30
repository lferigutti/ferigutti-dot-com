"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function LanguageSwitcher({ currentLang }: { currentLang: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const toggleLanguage = (lang: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("lang", lang);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex gap-2 mb-8">
      <button
        onClick={() => toggleLanguage("es")}
        className={`px-3 py-1 rounded-md text-sm transition-colors ${
          currentLang === "es"
            ? "bg-zinc-100 text-zinc-900 font-medium"
            : "bg-zinc-800 text-zinc-400 hover:text-white"
        }`}
      >
        Español 🇪🇸
      </button>
      <button
        onClick={() => toggleLanguage("en")}
        className={`px-3 py-1 rounded-md text-sm transition-colors ${
          currentLang === "en"
            ? "bg-zinc-100 text-zinc-900 font-medium"
            : "bg-zinc-800 text-zinc-400 hover:text-white"
        }`}
      >
        English 🇺🇸
      </button>
    </div>
  );
}
