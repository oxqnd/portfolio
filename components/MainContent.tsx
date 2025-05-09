import { AboutSection } from "./sections/AboutSection"
import { SkillsSection } from "./sections/SkillsSection"
import { ProjectsSection } from "./sections/ProjectsSection"
import { ExperienceSection } from "./sections/ExperienceSection"
import { MusicSection } from "./sections/MusicSection"
import { HomeSection } from "./sections/HomeSection"

interface MainContentProps {
  activeSection: string
  sidebarOpen: boolean
}

export function MainContent({ activeSection, sidebarOpen }: MainContentProps) {
  return (
    <div className="flex-1 bg-gradient-to-b from-blue-900 to-black text-white overflow-y-auto transition-all duration-300">
      <div className="pt-16">
        {activeSection === "home" && <HomeSection />}
        {activeSection === "about" && <AboutSection />}
        {activeSection === "skills" && <SkillsSection />}
        {activeSection === "projects" && <ProjectsSection />}
        {activeSection === "experience" && <ExperienceSection />}
        {activeSection === "music" && <MusicSection />}
      </div>
    </div>
  )
}
