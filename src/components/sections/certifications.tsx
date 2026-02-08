
// src/components/sections/certifications.tsx
"use client"; // <--- 1. IMPORTANT: This enables animations

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { certificationsData } from "@/data/resume";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { BadgeCheck, ExternalLink } from "lucide-react";

export function Certifications() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    // 2. This effect detects when the user scrolls to this section
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Stop watching after it triggers once
                }
            },
            { threshold: 0.1 } // Trigger when 10% of the section is visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="py-16 max-w-4xl mx-auto px-6 overflow-hidden" // overflow-hidden prevents horizontal scrollbars during animation
            id="certifications"
        >
            <h2 className="text-3xl font-bold mb-10 text-center">Certifications</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certificationsData.map((cert, index) => {
                    // Logic: Even items (0, 2) come from Left. Odd items (1, 3) come from Right.
                    const isEven = index % 2 === 0;

                    return (
                        <div
                            key={index}
                            // 3. THE ANIMATION CLASSES
                            className={`transition-all duration-1000 ease-out transform ${isVisible
                                    ? "opacity-100 translate-x-0" // End State: Visible & Center
                                    : `opacity-0 ${isEven ? "-translate-x-24" : "translate-x-24"}` // Start State: Hidden & Pushed to Side
                                }`}
                            // 4. Stagger effect: 0ms, 200ms, 400ms...
                            style={{ transitionDelay: `${index * 200}ms` }}
                        >
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Link href={cert.link} target="_blank" className="block h-full">
                                            <Card className="h-full hover:border-primary/50 hover:bg-slate-50 dark:hover:bg-slate-900 transition-all duration-300 cursor-pointer group relative overflow-hidden">

                                                {/* Decorative Background Gradient */}
                                                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12 transition-transform group-hover:scale-150" />

                                                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                                                    <Avatar className="h-12 w-12 border-2 border-background shadow-sm">
                                                        <AvatarFallback className="bg-primary/10 text-primary font-bold">
                                                            {cert.issuer.substring(0, 2).toUpperCase()}
                                                        </AvatarFallback>
                                                    </Avatar>

                                                    <div className="flex flex-col">
                                                        <CardTitle className="text-base font-semibold group-hover:text-primary transition-colors">
                                                            {cert.title}
                                                        </CardTitle>
                                                        <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">
                                                            {cert.issuer}
                                                        </p>
                                                    </div>
                                                </CardHeader>

                                                <CardContent className="pt-0">
                                                    <div className="flex items-center gap-2 text-xs text-slate-400 mt-2">
                                                        <BadgeCheck className="w-3 h-3 text-green-500" />
                                                        <span>Verified Credential</span>
                                                        <ExternalLink className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </Link>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>View Certificate from {cert.issuer}</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}