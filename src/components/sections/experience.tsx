// // src/components/sections/experience.tsx
// import { experienceData } from "@/data/resume";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";

// export function Experience() {
//   return (
//     <section className="py-16 max-w-4xl mx-auto px-6" id="experience">
//       <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
//       <div className="space-y-6">
//         {experienceData.map((job, index) => (
//           <Card key={index} className="border-l-4 border-l-primary shadow-sm">
//             <CardHeader>
//               <div className="flex justify-between items-start flex-col md:flex-row gap-2">
//                 <div>
//                   <CardTitle className="text-xl font-bold">{job.role}</CardTitle>
//                   <p className="text-slate-500 font-medium">{job.company}</p>
//                 </div>
//                 <Badge variant="secondary">{job.period}</Badge>
//               </div>
//             </CardHeader>
//             <CardContent>
//               <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400">
//                 {job.description.map((point, i) => (
//                   <li key={i}>{point}</li>
//                 ))}
//               </ul>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </section>
//   );
// }

// src/components/sections/experience.tsx
import { experienceData } from "@/data/resume";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils"; 

export function Experience() {
  return (
    <section className="py-16 max-w-6xl mx-auto px-4 md:px-6" id="experience">
      <h2 className="text-3xl font-bold mb-12 text-center">Work Experience</h2>
      
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-1/2" />

        <div className="space-y-12">
          {experienceData.map((job, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={cn(
                  "relative flex items-center justify-between md:justify-normal",
                  // This reverses the LAYOUT (Card <-> Spacer) but NOT the text
                  isEven ? "md:flex-row-reverse" : ""
                )}
              >
                {/* 1. Timeline Dot */}
                <div 
                  className={cn(
                    "absolute left-8 md:left-1/2 w-4 h-4 rounded-full border-4 border-background bg-primary z-10 transform -translate-x-1/2 top-6"
                  )}
                >
                  <div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse w-full h-full scale-150" />
                </div>

                {/* 2. Spacer (Takes up 50% space to push card to side) */}
                <div className="hidden md:block w-1/2" />

                {/* 3. The Content Card */}
                <div className={cn(
                  "w-full md:w-1/2 pl-16 md:pl-0",
                  // Padding logic to keep card away from the center line
                  isEven ? "md:pr-12" : "md:pl-12" 
                )}>
                  <Card className="relative hover:shadow-lg transition-shadow duration-300 border-primary/20 text-left">
                    
                    {/* Arrow pointing to center line */}
                    <div className={cn(
                      "hidden md:block absolute top-6 w-3 h-3 bg-card border-t border-l border-primary/20 rotate-45 transform",
                      // If card is on Left (Even), arrow goes on Right. 
                      // If card is on Right (Odd), arrow goes on Left.
                      isEven ? "-right-1.5 border-t-0 border-l-0 border-b border-r" : "-left-1.5"
                    )} />

                    <CardHeader>
                      <div className="flex flex-col md:flex-row justify-between items-start gap-2">
                        <div>
                            <CardTitle className="text-xl font-bold">{job.role}</CardTitle>
                            <div className="flex items-center gap-2 mt-1">
                                <span className="text-primary font-medium">{job.company}</span>
                            </div>
                        </div>
                        
                        <Badge variant="secondary" className="w-fit mt-1 md:mt-0">
                          {job.period}
                        </Badge>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400 text-sm">
                        {job.description.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}