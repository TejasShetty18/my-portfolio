// // src/components/sections/hero.tsx
// import { personalInfo } from "@/data/resume";
// import { Button } from "@/components/ui/button";
// import { Mail } from "lucide-react"; // Install lucide-react if missing

// export function Hero() {
//   return (
//     <section className="py-20 md:py-32 max-w-4xl mx-auto px-6">
//       <div className="space-y-6">
//         <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
//           Hi, I'm <span className="text-primary">{personalInfo.name}</span>.
//         </h1>
//         <h2 className="text-2xl md:text-3xl text-slate-600 dark:text-slate-400 font-medium">
//           {personalInfo.title} based in {personalInfo.location}.
//         </h2>
//         <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
//           {personalInfo.summary}
//         </p>
//         <div className="flex gap-4 pt-4">
//           <Button asChild size="lg">
//             <a href={`mailto:${personalInfo.email}`}>
//               <Mail className="mr-2 h-4 w-4" /> Contact Me
//             </a>
//           </Button>
//           <Button variant="outline" size="lg" asChild>
//              <a href={personalInfo.socials.github} target="_blank">GitHub</a>
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// }

import Link from "next/link";
import { personalInfo } from "@/data/resume";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Github, Linkedin, Mail, MapPin, Terminal, ArrowRight, Download } from "lucide-react";

export function Hero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Decor: A subtle gradient blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/10 blur-[100px] rounded-full -z-10" />

      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT COLUMN: Text Content */}
        <div className="space-y-8 text-center lg:text-left animate-in slide-in-from-bottom-10 fade-in duration-700">

          {/* 1. Status Badge */}
          <div className="flex justify-center lg:justify-start">
            <Badge variant="outline" className="px-4 py-1.5 text-sm border-primary/20 bg-primary/5">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Available for New Projects
            </Badge>
          </div>

          {/* 2. Main Headlines */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              Building Scalable
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                Digital Experiences
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-medium flex flex-col lg:flex-row items-center gap-2 justify-center lg:justify-start">
              <span>Hi, I'm {personalInfo.name}</span>
              <span className="hidden lg:inline text-slate-300 mx-2">|</span>
              <span className="flex items-center gap-1 text-base bg-secondary/50 px-3 py-1 rounded-full mt-2 lg:mt-0">
                <MapPin className="w-4 h-4" /> {personalInfo.location}
              </span>
            </p>
          </div>

          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            {personalInfo.summary}
          </p>

          {/* 3. Call to Actions & Socials */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-4">
            <Button asChild size="lg" className="h-12 px-8 text-base shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all">
              <a href={`mailto:${personalInfo.email}`}>
                Contact Me <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>

            {/* Social Icons Row */}
            <div className="flex items-center gap-3">
              <Button variant="outline" size="icon" className="h-12 w-12 rounded-full hover:border-primary hover:text-primary transition-colors" asChild>
                <Link href={personalInfo.socials.github} target="_blank" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" className="h-12 w-12 rounded-full hover:border-blue-600 hover:text-blue-600 transition-colors" asChild>
                <Link href={personalInfo.socials.linkedin} target="_blank" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" className="h-12 w-12 rounded-full" asChild>
                {/* Assuming you might have a resume link later */}
                <Link href="/resume.pdf" target="_blank" aria-label="Download Resume">
                  <Download className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: The "Terminal" Visual */}
        <div className="hidden lg:block relative animate-in slide-in-from-right-10 fade-in duration-1000 delay-200">
          {/* Decorative background blob behind terminal */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-3xl transform rotate-3 scale-105" />

          <Card className="relative bg-slate-950 border-slate-800 shadow-2xl backdrop-blur-sm overflow-hidden transform -rotate-1 hover:rotate-0 transition-transform duration-500">
            {/* Terminal Header */}
            <CardHeader className="bg-slate-900/50 border-b border-slate-800 px-4 py-3 flex flex-row items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="ml-4 flex items-center gap-2 text-xs text-slate-400 font-mono">
                <Terminal className="w-3 h-3" />
                <span>developer-profile.tsx</span>
              </div>
            </CardHeader>

            {/* Terminal Code Content */}
            <CardContent className="p-6 font-mono text-sm text-slate-300 overflow-x-auto">
              <div className="space-y-1">
                <p><span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = <span className="text-yellow-300">{"{"}</span></p>
                <p className="pl-4">name: <span className="text-green-400">"{personalInfo.name}"</span>,</p>
                <p className="pl-4">role: <span className="text-green-400">"{personalInfo.title}"</span>,</p>
                <p className="pl-4">skills: <span className="text-yellow-300">["JavaScript", "TypeScript", "Python"]</span>,</p>
                <p className="pl-4">hardWorker: <span className="text-orange-400">true</span>,</p>
                <p className="pl-4">quickLearner: <span className="text-orange-400">true</span>,</p>
                <p className="pl-4">hireable: <span className="text-orange-400">function</span>() <span className="text-yellow-300">{"{"}</span></p>
                <p className="pl-8"><span className="text-purple-400">return</span> <span className="text-green-400">"Ready to code!"</span>;</p>
                <p className="pl-4"><span className="text-yellow-300">{"}"}</span></p>
                <p><span className="text-yellow-300">{"}"}</span>;</p>
              </div>

              {/* Blinking Cursor */}
              <div className="mt-4 flex items-center gap-2">
                <span className="text-green-500">➜</span>
                <span className="animate-pulse w-2 h-4 bg-slate-400 inline-block" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}