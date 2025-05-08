import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with payment processing and inventory management.",
      image: "/placeholder.svg?height=200&width=350",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      demo: "#",
    },
    {
      title: "Task Management App",
      description: "A Kanban-style task management application with real-time updates and team collaboration.",
      image: "/placeholder.svg?height=200&width=350",
      tags: ["React", "Firebase", "Tailwind CSS"],
      github: "#",
      demo: "#",
    },
    {
      title: "Weather Dashboard",
      description: "A weather application that provides forecasts and historical data visualization.",
      image: "/placeholder.svg?height=200&width=350",
      tags: ["JavaScript", "Chart.js", "Weather API"],
      github: "#",
      demo: "#",
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website with Spotify-inspired design and interactive elements.",
      image: "/placeholder.svg?height=200&width=350",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
      github: "#",
      demo: "#",
    },
  ]

  return (
    <div className="p-8">
      <div className="mb-8">
        <p className="text-sm font-semibold">SHOWCASE</p>
        <h1 className="text-5xl font-bold mt-2 mb-4">Projects</h1>
        <p className="text-sm text-gray-300">A collection of my recent work and personal projects</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white/10 rounded-lg overflow-hidden hover:bg-white/15 transition">
            <Image
              src={project.image || "/placeholder.svg"}
              width={350}
              height={200}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="bg-white/20 px-2 py-1 rounded-full text-xs">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a href={project.github} className="flex items-center text-gray-300 hover:text-white">
                  <Github size={18} className="mr-1" />
                  <span>Code</span>
                </a>
                <a href={project.demo} className="flex items-center text-gray-300 hover:text-white">
                  <ExternalLink size={18} className="mr-1" />
                  <span>Demo</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
