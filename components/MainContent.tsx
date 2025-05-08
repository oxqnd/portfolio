import { AboutSection } from "./sections/AboutSection"
import { SkillsSection } from "./sections/SkillsSection"
import { ProjectsSection } from "./sections/ProjectsSection"
import { ExperienceSection } from "./sections/ExperienceSection"
import { MusicSection } from "./sections/MusicSection"
import { HomeSection } from "./sections/HomeSection"

interface MainContentProps {
  activeSection: string
}

export function MainContent({ activeSection }: MainContentProps) {
  return (
    <div className="flex-1 bg-gradient-to-b from-blue-900 to-black text-white overflow-y-auto">
      {activeSection === "home" && <HomeSection />}
      {activeSection === "about" && <AboutSection />}
      {activeSection === "skills" && <SkillsSection />}
      {activeSection === "projects" && <ProjectsSection />}
      {activeSection === "experience" && <ExperienceSection />}
      {activeSection === "music" && <MusicSection />}
    </div>
  )
}
