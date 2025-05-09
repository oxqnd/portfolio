"use client"

import { Play, SkipBack, SkipForward, Repeat, Shuffle, Volume2 } from "lucide-react"
import Image from "next/image"
import { useMediaQuery } from "@/hooks/use-mobile"

export function PlayerControls() {
  const isMobile = useMediaQuery("(max-width: 768px)")

  return (
    <div className="bg-black text-white p-4 border-t border-gray-800">
      {/* Mobile Layout */}
      {isMobile ? (
        <div className="flex flex-col space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image
                src="/placeholder.svg?height=40&width=40"
                width={40}
                height={40}
                alt="Now playing"
                className="w-10 h-10"
              />
              <div className="truncate max-w-[120px]">
                <p className="font-semibold text-sm truncate">Song Title</p>
                <p className="text-xs text-gray-400 truncate">Artist Name</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-white text-black rounded-full p-1.5 hover:scale-105 transition">
                <Play fill="currentColor" size={16} />
              </button>
              <SkipForward size={18} className="text-gray-400 hover:text-white" />
            </div>
          </div>
          <div className="w-full">
            <div className="bg-gray-500 rounded-full h-1 w-full">
              <div className="bg-white rounded-full h-1 w-1/3"></div>
            </div>
          </div>
        </div>
      ) : (
        // Desktop Layout
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Image
              src="/placeholder.svg?height=56&width=56"
              width={56}
              height={56}
              alt="Now playing"
              className="w-14 h-14"
            />
            <div>
              <p className="font-semibold">Song Title</p>
              <p className="text-sm text-gray-400">Artist Name</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center space-x-6">
              <Shuffle size={20} className="text-gray-400 hover:text-white" />
              <SkipBack size={20} className="text-gray-400 hover:text-white" />
              <button className="bg-white text-black rounded-full p-2 hover:scale-105 transition">
                <Play fill="currentColor" size={20} />
              </button>
              <SkipForward size={20} className="text-gray-400 hover:text-white" />
              <Repeat size={20} className="text-gray-400 hover:text-white" />
            </div>
            <div className="w-full max-w-md mt-2">
              <div className="bg-gray-500 rounded-full h-1 w-full">
                <div className="bg-white rounded-full h-1 w-1/3"></div>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Volume2 size={20} />
            <div className="w-24">
              <div className="bg-gray-500 rounded-full h-1 w-full">
                <div className="bg-white rounded-full h-1 w-2/3"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
