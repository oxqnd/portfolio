import Image from "next/image"

export function AboutSection() {
  return (
    <div className="p-8">
      <div className="flex items-center space-x-4 mb-8">
        <Image
          src="/placeholder.svg?height=200&width=200"
          width={200}
          height={200}
          alt="About me"
          className="w-52 h-52 shadow-lg rounded-lg"
        />
        <div>
          <p className="text-sm font-semibold">PROFILE</p>
          <h1 className="text-5xl font-bold mt-2 mb-4">About Me</h1>
          <p className="text-sm text-gray-300">Get to know me better</p>
        </div>
      </div>

      <div className="bg-white/10 p-6 rounded-lg mt-8">
        <h2 className="text-2xl font-bold mb-4">Hello, I'm John Doe</h2>
        <p className="mb-4">
          I'm a passionate full-stack developer with 5 years of experience building web applications. I specialize in
          React, Node.js, and modern web technologies.
        </p>
        <p className="mb-4">
          When I'm not coding, you can find me hiking in the mountains, playing guitar, or exploring new coffee shops. I
          believe in continuous learning and pushing the boundaries of what's possible with technology.
        </p>
        <p>I'm currently based in San Francisco, California, and open to remote opportunities worldwide.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="bg-white/10 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Education</h3>
          <div className="mb-4">
            <p className="font-semibold">Bachelor of Science in Computer Science</p>
            <p className="text-gray-300">Stanford University</p>
            <p className="text-gray-400">2015 - 2019</p>
          </div>
        </div>

        <div className="bg-white/10 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Interests</h3>
          <ul className="list-disc list-inside text-gray-300">
            <li>Web Development</li>
            <li>UI/UX Design</li>
            <li>Artificial Intelligence</li>
            <li>Music Production</li>
            <li>Photography</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
