import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "ObfusX",
      description: "소프트웨어 가상화 프로그램",
      image: "/ObfusX.png?height=200&width=350",
      tags: ["C++", "Assembly", "Capstone", "Viusal Studio"],
      github: "#",
      demo: "#",
    },
    {
      title: "Who Touched My Cache?",
      description: "Prime+Probe 계열의 캐시 사이드채널 공격을 식별하기 위해, GNN 을 활용한 딥러닝 기반 탐지 기법",
      image: "/whotouched.png?height=200&width=350",
      tags: ["Python", "Graph Neural Network", "Pytorch", "Torch Geometric", "Scikit-learn", "Visual Studio Code"],
      github: "#",
      demo: "#",
    },
    {
      title: "건설기준지침체크 FastAPI 백엔드 애플리케이션",
      description: "초거대 언어 모델(LLM)을 FastAPI와 Nvidia Triton을 활용하여 서빙 및 API 구축",
      image: "/건설.png?height=200&width=350",
      tags: ["Python", "FastAPI", "Redis", "Nvidia Triton", "Docker", "Visual Studio Code"],
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
                {/* <a href={project.demo} className="flex items-center text-gray-300 hover:text-white">
                  <ExternalLink size={18} className="mr-1" />
                  <span>Demo</span>
                </a> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
