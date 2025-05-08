import { Progress } from "@/components/ui/progress"

export function SkillsSection() {
  const skills = [
    { name: "C", level: 80 },
    { name: "C++", level: 85 },
    { name: "C#", level: 90 },
    { name: "Python", level: 90 },
    { name: "Rust", level: 70 },
    { name: "JavaScript", level: 75 },
    { name: "TypeScript", level: 65 },
    { name: "R", level: 70 },
  ]

  const tools = ["Visual Studio", "Visual Studio Code", "Nvidia Triton","Cuda","Git", "Docker", "WSL2", "Ubuntu"]

  return (
    <div className="p-8">
      <div className="mb-8">
        <p className="text-sm font-semibold">EXPERTISE</p>
        <h1 className="text-5xl font-bold mt-2 mb-4">Skills</h1>
        <p className="text-sm text-gray-300">My technical abilities and competencies</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white/10 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="bg-white/10 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-6">Tools & Technologies</h2>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool, index) => (
                <span key={index} className="bg-white/20 px-3 py-1 rounded-full text-sm">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white/10 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Soft Skills</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Problem Solving
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Team Collaboration
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Communication
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Time Management
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Adaptability
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
