"use client"

import { X, Github, ExternalLink, Calendar, Tag } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef } from "react"

interface ProjectModalProps {
  project: {
    title: string
    description: string
    longDescription?: string
    image: string
    tags: string[]
    github: string
    demo: string
    date?: string
    features?: string[]
    technologies?: string[]
  } | null
  isOpen: boolean
  onClose: () => void
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)

  // Close modal when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    // Close modal on ESC key
    function handleEscKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      document.addEventListener("keydown", handleEscKey)
      // Prevent scrolling when modal is open
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleEscKey)
      document.body.style.overflow = "auto"
    }
  }, [isOpen, onClose])

  // Focus trap
  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus()
    }
  }, [isOpen])

  if (!isOpen || !project) return null

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div
        ref={modalRef}
        className="bg-gradient-to-b from-blue-900/90 to-black/90 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700 shadow-xl"
        tabIndex={-1}
      >
        <div className="relative">
          <Image
            src={project.image || "/placeholder.svg"}
            width={800}
            height={400}
            alt={project.title}
            className="w-full h-64 object-cover rounded-t-lg"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-white">{project.title}</h2>
            {project.date && (
              <div className="flex items-center text-gray-300 text-sm">
                <Calendar size={16} className="mr-1" />
                <span>{project.date}</span>
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs flex items-center"
              >
                <Tag size={12} className="mr-1" />
                {tag}
              </span>
            ))}
          </div>

          <p className="text-gray-300 mb-6">{project.longDescription || project.description}</p>

          {project.features && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Key Features</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {project.technologies && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="bg-white/10 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="flex space-x-4 mt-8">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-md transition-colors"
            >
              <Github size={18} className="mr-2" />
              View Code
            </a>
            {/* <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-green-500 hover:bg-green-600 text-black px-4 py-2 rounded-md transition-colors"
            >
              <ExternalLink size={18} className="mr-2" />
              Live Demo
            </a> */}
          </div>
        </div>
      </div>
    </div>
  )
}