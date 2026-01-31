// src/components/layout/navbar.tsx
import Link from "next/link";
import { ModeToggle } from "@/components/layout/mode-toggle";
import { personalInfo } from "@/data/resume";

export function Navbar() {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full">
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo / Name */}
        <div className="font-bold text-lg tracking-tight">
          <Link href="/">{personalInfo.name}</Link>
        </div>

        {/* Navigation Links & Toggle */}
        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-6 text-sm font-medium text-slate-600 dark:text-slate-400">
            <Link href="#skills" className="hover:text-primary transition-colors">
              Skills
            </Link>
            <Link href="#experience" className="hover:text-primary transition-colors">
              Experience
            </Link>
            <Link href="#projects" className="hover:text-primary transition-colors">
              Projects
            </Link>
          </div>
          
          <div className="flex items-center gap-2">
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}