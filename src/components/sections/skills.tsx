import { skillsData } from "@/data/resume";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code2, Database, Terminal, Layout, Cpu } from "lucide-react";

// Helper to get icons
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
        
        {/* 1. SCROLLABLE TAB LIST */}
        <div className="w-full overflow-x-auto pb-4 mb-4 scrollbar-hide">
           <TabsList className="inline-flex w-auto h-auto p-1 bg-muted/50 rounded-xl">
            <TabsTrigger 
              value="all" 
              className="px-6 py-2 rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all"
            >
              All
            </TabsTrigger>
            {skillsData.map((group) => (
              <TabsTrigger 
                key={group.category} 
                value={group.category} 
                className="px-4 py-2 whitespace-nowrap rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all"
              >
                {group.category}
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
                        <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm font-normal">
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
              <TabsContent key={group.category} value={group.category} className="mt-4 animate-in slide-in-from-right-4 duration-300">
                <Card className="border-2 border-primary/10 shadow-sm">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <div className="p-3 bg-primary/10 rounded-full">
                            <Icon className="w-8 h-8 text-primary" />
                        </div>
                        <div>
                            <CardTitle className="text-xl md:text-2xl">{group.category}</CardTitle>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
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
                            className="text-sm px-4 py-1.5 md:text-base md:px-5 md:py-2 hover:scale-105 transition-transform cursor-default select-none"
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