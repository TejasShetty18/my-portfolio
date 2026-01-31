// src/components/sections/hero.tsx
import { personalInfo } from "@/data/resume";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react"; // Install lucide-react if missing

export function Hero() {
  return (
    <section className="py-20 md:py-32 max-w-4xl mx-auto px-6">
      <div className="space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
          Hi, I'm <span className="text-primary">{personalInfo.name}</span>.
        </h1>
        <h2 className="text-2xl md:text-3xl text-slate-600 dark:text-slate-400 font-medium">
          {personalInfo.title} based in {personalInfo.location}.
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
          {personalInfo.summary}
        </p>
        <div className="flex gap-4 pt-4">
          <Button asChild size="lg">
            <a href={`mailto:${personalInfo.email}`}>
              <Mail className="mr-2 h-4 w-4" /> Contact Me
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
             <a href={personalInfo.socials.github} target="_blank">GitHub</a>
          </Button>
        </div>
      </div>
    </section>
  );
}