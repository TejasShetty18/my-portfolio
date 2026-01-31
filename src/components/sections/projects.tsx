// // src/components/sections/projects.tsx
// import { projectData } from "@/data/resume";
// import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";

// export function Projects() {
//   return (
//     <section className="py-16 max-w-4xl mx-auto px-6 bg-slate-50 dark:bg-slate-900/50 rounded-xl" id="projects">
//       <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {projectData.map((project, index) => (
//           <Card key={index} className="hover:shadow-lg transition-shadow flex flex-col">
//             <CardHeader>
//               <CardTitle>{project.title}</CardTitle>
//               <div className="flex flex-wrap gap-2 mt-2">
//                 {project.techStack.map((tech) => (
//                   <Badge key={tech} variant="outline" className="text-xs">
//                     {tech}
//                   </Badge>
//                 ))}
//               </div>
//             </CardHeader>
//             <CardContent className="mt-auto">
//               <CardDescription className="text-base">
//                 {project.description}
//               </CardDescription>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </section>
//   );
// }

import Link from "next/link";
import { projectData } from "@/data/resume";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Folder, ArrowUpRight } from "lucide-react";

export function Projects() {
  return (
    <section className="py-16 max-w-6xl mx-auto px-4 md:px-6" id="projects">
      <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectData.map((project, index) => (
          <Card 
            key={index} 
            className="group flex flex-col h-full hover:shadow-lg hover:border-primary/50 transition-all duration-300"
          >
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-md text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Folder className="w-5 h-5" />
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </div>
              </div>
            </CardHeader>

            <CardContent className="flex-grow space-y-4">
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Badge 
                    key={tech} 
                    variant="secondary" 
                    className="font-normal text-xs"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>

            <CardFooter className="pt-0">
              <Button asChild className="w-full gap-2 group-hover:bg-primary/90" size="sm">
                <Link 
                  href={project.link || "#"} 
                  target="_blank" 
                  // If no link exists, we disable the click behavior visually (optional)
                  className={!project.link ? "pointer-events-none opacity-50" : ""}
                >
                  <Github className="w-4 h-4" />
                  <span>View Code</span>
                  {project.link && <ArrowUpRight className="w-3 h-3 opacity-50" />}
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}