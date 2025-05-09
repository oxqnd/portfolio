"use client"

import { Home, User, Code, Briefcase, GraduationCap, Library, PlusSquare, Heart, Download, FileText } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"

const playlists = [
  "Chill Vibes",
  "Workout Mix",
  "90s Throwback",
  "Indie Acoustic",
  "Focus Playlist",
  "Road Trip Tunes",
  "Rainy Day Jazz",
  "Summer Hits",
  "Classical Essentials",
  "Hip Hop Favorites",
]

interface SidebarProps {
  setActiveSection: (section: string) => void
  isOpen: boolean
}

export function Sidebar({ setActiveSection, isOpen }: SidebarProps) {
  return (
    <div
      className={`bg-black text-gray-300 flex flex-col h-screen border-r border-gray-800 transition-all duration-300 overflow-hidden ${
        isOpen ? "w-60" : "w-0"
      }`}
    >
      <div className="p-6 min-w-60">
        <h1 className="text-2xl font-bold text-white mb-6 pl-8">Portfolio</h1>
        <nav>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => setActiveSection("home")}
                className="flex items-center space-x-2 hover:text-white w-full text-left"
              >
                <Home size={24} />
                <span>Home</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection("about")}
                className="flex items-center space-x-2 hover:text-white w-full text-left"
              >
                <User size={24} />
                <span>About</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection("skills")}
                className="flex items-center space-x-2 hover:text-white w-full text-left"
              >
                <Code size={24} />
                <span>Skills</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection("projects")}
                className="flex items-center space-x-2 hover:text-white w-full text-left"
              >
                <Briefcase size={24} />
                <span>Projects</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection("experience")}
                className="flex items-center space-x-2 hover:text-white w-full text-left"
              >
                <GraduationCap size={24} />
                <span>Experience</span>
              </button>
            </li>
            <li>
              <a
                href="resume-legacy/index.html"
                className="flex items-center space-x-2 hover:text-white w-full text-left"
              >
                <FileText size={24} className="text-white" />
                <span>Resume</span>
              </a>
            </li>
            <li>
              <button
                onClick={() => setActiveSection("music")}
                className="flex items-center space-x-2 hover:text-white w-full text-left"
              >
                <Library size={24} />
                <span>Music</span>
              </button>
            </li>
          </ul>
        </nav>
        <div className="mt-8 space-y-4">
          <button className="flex items-center space-x-2 hover:text-white">
            <PlusSquare size={24} />
            <span>Create Playlist</span>
          </button>
          <button className="flex items-center space-x-2 hover:text-white">
            <Heart size={24} />
            <span>Liked Songs</span>
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-hidden">
        <ScrollArea className="h-full">
          <div className="p-6 min-w-60">
            <h2 className="text-sm uppercase font-semibold mb-4">Playlists</h2>
            <ul className="space-y-2">
              {playlists.map((playlist, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-white">
                    {playlist}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </ScrollArea>
      </div>
      <div className="p-6 min-w-60">
        <button className="flex items-center space-x-2 hover:text-white">
          <Download size={24} />
          <span>Install App</span>
        </button>
      </div>
    </div>
  )
}
