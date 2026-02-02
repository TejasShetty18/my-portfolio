import { educationData } from "@/data/resume";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress"; // <--- The new feature
import { GraduationCap, Calendar, Award } from "lucide-react";

export function Education() {
    // Extract the number from the string "CGPA - 7.53" for the progress bar
    // Logic: Split by space, take the last part, convert to float.
    const cgpaValue = parseFloat(educationData.percent.split("-")[1] || "0");
    const progressValue = (cgpaValue / 10) * 100; // Assuming scale of 10

    return (
        <section className="py-16 max-w-4xl mx-auto px-6" id="education">
            <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>

            <div className="flex justify-center">
                <Card className="w-full max-w-2xl hover:shadow-lg transition-all duration-300 border-primary/20 bg-gradient-to-br from-background to-secondary/5">
                    <CardHeader>
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                            <div className="flex items-center gap-3">
                                <div className="p-3 bg-primary/10 rounded-full">
                                    <GraduationCap className="w-8 h-8 text-primary" />
                                </div>
                                <div>
                                    <CardTitle className="text-xl font-bold">{educationData.college}</CardTitle>
                                    <p className="text-slate-500 dark:text-slate-400 font-medium">
                                        {educationData.degree}
                                    </p>
                                </div>
                            </div>

                            <Badge variant="outline" className="flex items-center gap-2 px-3 py-1 text-sm">
                                <Calendar className="w-3 h-3" />
                                {educationData.period}
                            </Badge>
                        </div>
                    </CardHeader>

                    <CardContent className="space-y-6">
                        {/* Visual Separator */}
                        <div className="h-px w-full bg-border" />

                        {/* CGPA Visualization */}
                        <div className="space-y-2">
                            <div className="flex justify-between text-sm font-medium">
                                <span className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                                    <Award className="w-4 h-4 text-primary" />
                                    Academic Performance
                                </span>
                                <span className="font-bold text-primary">{educationData.percent}</span>
                            </div>

                            {/* Animated Progress Bar */}
                            <div className="relative pt-1">
                                <Progress value={progressValue} className="h-3" />
                                {/* Optional: Add a subtle scale marker (0...10) below */}
                                <div className="flex justify-between text-[10px] text-slate-400 mt-1 uppercase tracking-wider">
                                    <span>0.0</span>
                                    <span>5.0</span>
                                    <span>10.0</span>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}