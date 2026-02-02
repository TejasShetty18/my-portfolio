# ⚡ Modern Developer Portfolio

A sleek, high-performance personal portfolio website built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui**.

Designed for developers who want a clean, accessible, and easily customizable showcase for their work.

## 🚀 Features

* **🎨 Modern UI/UX:** Built with [shadcn/ui](https://ui.shadcn.com/) components for a consistent, professional look.
* **🌓 Dark Mode:** Fully integrated theme toggling (Light/Dark/System) using `next-themes`.
* **⚡ High Performance:** Powered by Next.js App Router and Server Components.
* **🧩 Type-Safe:** Complete TypeScript implementation for robust code.
* **📄 Data-Driven:** Content is separated from logic. Update your resume in **one file** (`src/data/resume.ts`) to reflect changes across the site.
* **✨ Smooth Animations:**
    * "Terminal" typing effect in Hero section.
    * Zig-zag timeline layout for Experience.
    * Slide-in scroll animations for Certifications.
    * Interactive tabs for Skills.

## 🛠️ Tech Stack

* **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Components:** [shadcn/ui](https://ui.shadcn.com/) (Radix UI + Tailwind)
* **Icons:** [Lucide React](https://lucide.dev/)
* **Animations:** Native CSS transitions & Intersection Observer API (No heavy libraries).

## 📂 Project Structure

```bash
├── src/
│   ├── app/                # Next.js App Router pages
│   ├── components/
│   │   ├── layout/         # Navbar, Footer
│   │   ├── sections/       # Hero, Experience, Projects, Skills, etc.
│   │   ├── ui/             # shadcn/ui primitives
│   │   ├── mode-toggle.tsx # Dark mode switch
│   │   └── theme-provider.tsx
│   ├── data/               # ⚡ YOUR DATA GOES HERE
│   │   └── resume.ts       # Single source of truth for content
│   ├── lib/                # Utilities (cn helper)
│   └── types/              # TypeScript interfaces
├── public/                 # Static assets
└── ...config files


Getting Started
1. Clone the repository
Bash
git clone [https://github.com/yourusername/my-portfolio.git](https://github.com/yourusername/my-portfolio.git)
cd my-portfolio

2. Install dependencies
Bash
npm install
# or
yarn install
# or
pnpm install

3. Run the development server
Bash
npm run dev
Open http://localhost:3000 with your browser to see the result.

📝 Customization
This portfolio is designed to be "Config First". You do not need to edit complex React components to update your information.

1. Update Personal Info
Go to src/data/resume.ts. Here you can modify:

Name, Title, Location

Social Links (GitHub, LinkedIn)

Summary/Bio

2. Add Projects & Experience
In the same file (src/data/resume.ts), add entries to the projectData and experienceData arrays. The UI will automatically generate the cards and timelines.

TypeScript
// Example: Adding a new project
export const projectData = [
  {
    title: "New App",
    description: "Built with Next.js",
    techStack: ["React", "Tailwind"],
    link: "[https://github.com](https://github.com)...",
    demoLink: "[https://demo.com](https://demo.com)..." // Optional
  },
  // ...
]

3. Change Colors
To change the primary color (currently Slate/Black), edit src/app/globals.css. shadcn/ui uses CSS variables for theming.

Deployment
The easiest way to deploy is using Vercel.

Push your code to a GitHub repository.

Go to Vercel and import the project.

Click Deploy.

Vercel will automatically detect the Next.js settings and optimize the build.
