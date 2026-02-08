// // // src/components/sections/skills.tsx
// // import { skillsData } from "@/data/resume";
// // import { Badge } from "@/components/ui/badge";

// // export function Skills() {
// //   return (
// //     <section className="py-16 max-w-4xl mx-auto px-6" id="skills">
// //       <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>
// //       <div className="grid gap-6 md:grid-cols-2">
// //         {skillsData.map((group, index) => (
// //           <div key={index}>
// //             <h3 className="text-lg font-semibold mb-3">{group.category}</h3>
// //             <div className="flex flex-wrap gap-2">
// //               {group.skills.map((skill) => (
// //                 <Badge key={skill} variant="secondary" className="px-3 py-1">
// //                   {skill}
// //                 </Badge>
// //               ))}
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // }

// // src/components/sections/skills.tsx
// import { skillsData } from "@/data/resume";
// import { Badge } from "@/components/ui/badge";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Code2, Database, Terminal, Layout, Cpu } from "lucide-react";

// // Helper to get icons based on category name
// // You can adjust these keys to match your exact resume.ts category names
// const iconMap: Record<string, any> = {
//   "Languages": Code2,
//   "Frameworks & Tech": Layout, // Matches "Technologies/Frameworks" if you update resume.ts or map loosely
//   "Technologies/Frameworks": Layout, 
//   "Cloud & Databases": Database,
//   "Developer Tools": Terminal,
// };

// export function Skills() {
//   return (
//     <section className="py-16 max-w-4xl mx-auto px-6" id="skills">
//       <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>
      
//       <Tabs defaultValue="all" className="w-full">
//         {/* 1. The Tab Navigation Bar */}
//         <div className="flex justify-center mb-8">
//           <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 w-full md:w-auto h-auto">
//             <TabsTrigger value="all" className="px-6">All</TabsTrigger>
//             {skillsData.map((group) => (
//               <TabsTrigger key={group.category} value={group.category} className="px-4">
//                 {group.category.split(" ")[0]} {/* Shorten name for tab (e.g. "Cloud" instead of "Cloud & Databases") */}
//               </TabsTrigger>
//             ))}
//           </TabsList>
//         </div>

//         {/* 2. Content: "All" View (Grid Layout) */}
//         <TabsContent value="all" className="animate-in fade-in-50 duration-500">
//           <div className="grid gap-6 md:grid-cols-2">
//             {skillsData.map((group, index) => {
//               const Icon = iconMap[group.category] || Cpu; // Fallback icon
//               return (
//                 <Card key={index} className="hover:border-primary/50 transition-colors">
//                   <CardHeader className="flex flex-row items-center gap-3 pb-2">
//                     <div className="p-2 bg-secondary rounded-lg">
//                         <Icon className="w-5 h-5 text-primary" />
//                     </div>
//                     <CardTitle className="text-lg">{group.category}</CardTitle>
//                   </CardHeader>
//                   <CardContent>
//                     <div className="flex flex-wrap gap-2">
//                       {group.skills.map((skill) => (
//                         <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm">
//                           {skill}
//                         </Badge>
//                       ))}
//                     </div>
//                   </CardContent>
//                 </Card>
//               );
//             })}
//           </div>
//         </TabsContent>

//         {/* 3. Content: Individual Category Views (Large Focused Cards) */}
//         {skillsData.map((group) => {
//              const Icon = iconMap[group.category] || Cpu;
//              return (
//               <TabsContent key={group.category} value={group.category} className="mt-6 animate-in slide-in-from-bottom-2 duration-500">
//                 <Card className="border-2 border-primary/10">
//                   <CardHeader>
//                     <div className="flex items-center gap-3 mb-4">
//                         <div className="p-3 bg-primary/10 rounded-full">
//                             <Icon className="w-8 h-8 text-primary" />
//                         </div>
//                         <div>
//                             <CardTitle className="text-2xl">{group.category}</CardTitle>
//                             <p className="text-slate-500 dark:text-slate-400">
//                                 My proficiency in {group.category.toLowerCase()}.
//                             </p>
//                         </div>
//                     </div>
//                   </CardHeader>
//                   <CardContent>
//                     <div className="flex flex-wrap gap-3">
//                       {group.skills.map((skill) => (
//                         <Badge 
//                             key={skill} 
//                             className="text-base px-4 py-2 hover:scale-105 transition-transform cursor-default"
//                         >
//                           {skill}
//                         </Badge>
//                       ))}
//                     </div>
//                   </CardContent>
//                 </Card>
//               </TabsContent>
//             );
//         })}
//       </Tabs>
//     </section>
//   );
// }

import { skillsData } from "@/data/resume";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code2, Database, Terminal, Layout, Cpu } from "lucide-react";

// Helper to get icons based on category name
const iconMap: Record<string, any> = {
  "Languages": Code2,
  "Frameworks & Tech": Layout,
  "Technologies/Frameworks": Layout,
  "Cloud & Databases": Database,
  "Developer Tools": Terminal,
};

export function Skills() {
  return (
    <section className="py-16 max-w-4xl mx-auto px-4 md:px-6" id="skills">
      <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>
      
      <Tabs defaultValue="all" className="w-full">
        
        {/* 1. RESPONSIVE TABS LIST */}
        {/* Changed from 'grid' to 'flex flex-wrap' for better mobile adaptation */}
        <div className="flex justify-center mb-8">
          <TabsList className="flex flex-wrap h-auto justify-center gap-2 bg-muted/50 p-2 rounded-lg w-full md:w-auto">
            <TabsTrigger 
              value="all" 
              className="px-4 py-2 flex-grow md:flex-grow-0 data-[state=active]:bg-background data-[state=active]:shadow-sm"
            >
              All
            </TabsTrigger>
            {skillsData.map((group) => (
              <TabsTrigger 
                key={group.category} 
                value={group.category} 
                className="px-4 py-2 flex-grow md:flex-grow-0 data-[state=active]:bg-background data-[state=active]:shadow-sm"
              >
                {/* On mobile, keep it short. On desktop, shows full name if needed, or keep short everywhere */}
                {group.category.split(" ")[0]} 
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {/* 2. Content: "All" View */}
        <TabsContent value="all" className="animate-in fade-in-50 duration-500 mt-0">
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
            {skillsData.map((group, index) => {
              const Icon = iconMap[group.category] || Cpu;
              return (
                <Card key={index} className="hover:border-primary/50 transition-colors h-full">
                  <CardHeader className="flex flex-row items-center gap-3 pb-2">
                    <div className="p-2 bg-secondary rounded-lg">
                        <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{group.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        {/* 3. Content: Individual Category Views */}
        {skillsData.map((group) => {
             const Icon = iconMap[group.category] || Cpu;
             return (
              <TabsContent key={group.category} value={group.category} className="mt-6 animate-in slide-in-from-bottom-2 duration-500">
                <Card className="border-2 border-primary/10">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-2">
                        <div className="p-3 bg-primary/10 rounded-full">
                            <Icon className="w-8 h-8 text-primary" />
                        </div>
                        <div>
                            <CardTitle className="text-2xl">{group.category}</CardTitle>
                            <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base">
                                My proficiency in {group.category.toLowerCase()}.
                            </p>
                        </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-3">
                      {group.skills.map((skill) => (
                        <Badge 
                            key={skill} 
                            className="text-sm md:text-base px-3 py-1 md:px-4 md:py-2 hover:scale-105 transition-transform cursor-default"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            );
        })}
      </Tabs>
    </section>
  );
}