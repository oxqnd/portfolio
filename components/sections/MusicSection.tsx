import { Play } from "lucide-react"
import Image from "next/image"

const songs = [
  { title: "busy guy", artist: "미노이(meenoi)", album: "Single", duration: "2:42", image: "/busy_guy.jpg" },
  { title: "2+2=4(Broken)", artist: "미노이(meenoi)", album: "EP(미니)", duration: "3:45", image: "/2+2=4.jpg" },
  { title: "가끔", artist: "Crush", album: "Single", duration: "4:23", image: "/가끔.jpg" },
  { title: "오늘의 기분", artist: "CHEEZE", album: "EP(미니)", duration: "3:45", image: "/오늘의기분.jpg" },
  { title: "JASMINE", artist: "DPR LIVE", album: "Single", duration: "3:21", image: "/jasmine.jpg" },
  { title: "Gravity", artist: "DPR LIVE, DPR CREAM", album: "Single", duration: "2:15", image: "/gravity.jpg" },
]

export function MusicSection() {
  return (
    <div className="p-8">
      <div className="flex items-center space-x-4 mb-8">
        <Image
          src="/music.jpg?height=200&width=200"
          width={200}
          height={200}
          alt="Playlist cover"
          className="w-52 h-52 shadow-lg"
        />
        <div>
          <p className="text-sm font-semibold">PLAYLIST</p>
          <h1 className="text-5xl font-bold mt-2 mb-4">Daily Mix 1</h1>
          <p className="text-sm text-gray-300">Created by Spotify • 50 songs, 3 hr 25 min</p>
        </div>
      </div>
      <div className="mb-8">
        <button className="bg-green-500 text-black font-semibold py-3 px-8 rounded-full hover:bg-green-400">
          <Play fill="currentColor" size={20} className="inline mr-2" />
          Play
        </button>
      </div>
      <table className="w-full text-left text-sm text-gray-300">
        <thead>
          <tr className="border-b border-gray-700">
            <th className="pb-3">#</th>
            <th className="pb-3">TITLE</th>
            <th className="pb-3">ALBUM</th>
            <th className="pb-3">DURATION</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song, index) => (
            <tr key={index} className="hover:bg-white/10">
              <td className="py-3">{index + 1}</td>
              <td className="py-3">
                <div className="flex items-center">
                  <Image
                    src={`${song.image}?height=40&width=40`}
                    width={40}
                    height={40}
                    alt={`${song.title} cover`}
                    className="mr-3"
                  />
                  <div>
                    <p className="text-white">{song.title}</p>
                    <p>{song.artist}</p>
                  </div>
                </div>
              </td>
              <td className="py-3">{song.album}</td>
              <td className="py-3">{song.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
