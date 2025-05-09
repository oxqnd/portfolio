import { Play } from "lucide-react"
import Image from "next/image"

export function HomeSection() {
  return (
    <div className="p-8">
      <div className="flex items-center space-x-4 mb-8">
        <Image
          src="/profile.png?height=200&width=200"
          width={200}
          height={200}
          alt="Profile picture"
          className="w-52 h-52 shadow-lg rounded-full"
        />
        <div>
          <p className="text-sm font-semibold">PORTFOLIO</p>
          <h1 className="text-5xl font-bold mt-2 mb-4">Jinho Seo</h1>
          <p className="text-sm text-gray-300">Security Developer • Music Lover</p>
        </div>
      </div>
      <div className="mb-8">
        <button className="bg-green-500 text-black font-semibold py-3 px-8 rounded-full hover:bg-green-400">
          <Play fill="currentColor" size={20} className="inline mr-2" />
          Explore
        </button>
      </div>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        <div className="bg-white/10 p-6 rounded-lg hover:bg-white/20 transition">
          <h3 className="text-xl font-bold mb-2">About Me</h3>
          <p className="text-gray-300">Learn more about my background, interests, and what drives me.</p>
        </div>
        <div className="bg-white/10 p-6 rounded-lg hover:bg-white/20 transition">
          <h3 className="text-xl font-bold mb-2">Skills</h3>
          <p className="text-gray-300">Discover my technical skills and areas of expertise.</p>
        </div>
        <div className="bg-white/10 p-6 rounded-lg hover:bg-white/20 transition">
          <h3 className="text-xl font-bold mb-2">Projects</h3>
          <p className="text-gray-300">Check out some of my recent work and personal projects.</p>
        </div>
        <div className="bg-white/10 p-6 rounded-lg hover:bg-white/20 transition">
          <h3 className="text-xl font-bold mb-2">Experience</h3>
          <p className="text-gray-300">Review my professional journey and accomplishments.</p>
        </div>
      </div> */}
    </div>
  )
}
