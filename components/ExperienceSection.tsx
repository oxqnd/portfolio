import { Briefcase } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Undergraduate Research Student",
      company: "Network Sience Lab",
      period: "2023 ~",
      description:
        "",
    },
  ]

  return (
    <div className="p-8">
      <div className="mb-8">
        <p className="text-sm font-semibold">CAREER</p>
        <h1 className="text-5xl font-bold mt-2 mb-4">Experience</h1>
        <p className="text-sm text-gray-300">My professional journey and work history</p>
      </div>

      <div className="relative border-l-2 border-white/20 pl-8 ml-4">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-12 relative">
            <div className="absolute -left-12 bg-blue-900 p-2 rounded-full border-4 border-black">
              <Briefcase size={20} />
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold">{exp.title}</h3>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">{exp.period}</span>
              </div>
              <p className="text-green-400 mb-4">{exp.company}</p>
              <p className="text-gray-300">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white/10 p-6 rounded-lg mt-8">
        <h2 className="text-2xl font-bold mb-4">Education</h2>
        <div className="mb-4">
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-bold">Bachelor of Science in Computer Science</h3>
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm">2023 ~</span>
          </div>
          <p className="text-green-400">Catholice University of Korea</p>
          <p className="text-gray-300 mt-2">
            {/* Graduated with honors. Specialized in web development and artificial intelligence. */}
          </p>
        </div>
      </div>
    </div>
  )
}
