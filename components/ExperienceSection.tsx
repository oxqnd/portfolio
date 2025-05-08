import { Briefcase } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      period: "2021 - Present",
      description:
        "Lead the frontend development team in building responsive web applications. Implemented new features and optimized performance for existing products.",
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions LLC",
      period: "2019 - 2021",
      description:
        "Developed and maintained full-stack web applications using React, Node.js, and MongoDB. Collaborated with designers to implement UI/UX improvements.",
    },
    {
      title: "Junior Web Developer",
      company: "WebCraft Studios",
      period: "2017 - 2019",
      description:
        "Built responsive websites and implemented frontend features. Assisted in backend development and database management.",
    },
    {
      title: "Freelance Developer",
      company: "Self-employed",
      period: "2016 - 2017",
      description:
        "Designed and developed websites for small businesses and startups. Managed client relationships and project timelines.",
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
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm">2015 - 2019</span>
          </div>
          <p className="text-green-400">Stanford University</p>
          <p className="text-gray-300 mt-2">
            Graduated with honors. Specialized in web development and artificial intelligence.
          </p>
        </div>
      </div>
    </div>
  )
}
